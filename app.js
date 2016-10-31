(function(){
  'use strict';

 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController',ToBuyController)
 .controller('AlreadyBoughtController',AlreadyBoughtController)
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//ToBuyController
ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var tobuy=this;
  tobuy.tobuyitems=ShoppingListCheckOffService.getToBuyItems();

  tobuy.removefromtobuy=function(index){
     ShoppingListCheckOffService.removefromtobuyitems(index);
  }

}

//AlreadyBoughtController
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
 var alreadybought=this;
 alreadybought.alreadyboughtitems=ShoppingListCheckOffService.getalreadyBoughtItems();
}

//shoopinglist service
 function ShoppingListCheckOffService(){
    var shoppinglist=this;
     var tobuyitems=[
      {
        name:'choclates',
        quantity:10
      },
      {
        name:'fishes',
        quantity:15
      },
      {
        name:'biscuits',
        quantity:5
      },
      {
        name:'cakes',
        quantity:10
      },
      {
        name:'beer bottles',
        quantity:10
      }
    ];
    var alreadyboughtitems=[];
    shoppinglist.removefromtobuyitems=function(index){
      var item=tobuyitems.splice(index,1);
      alreadyboughtitems.push(item[0]);
      console.log(alreadyboughtitems);
    };
   shoppinglist.getToBuyItems=function(){
     return tobuyitems;
   }
   shoppinglist.getalreadyBoughtItems=function(){
     return alreadyboughtitems;
   }
 }
})();
