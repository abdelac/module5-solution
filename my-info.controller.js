(function () {
'use strict';

angular.module('restaurant')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
  var myInfoCtrl = this;
  myInfoCtrl.user = UserService.getUser();
  myInfoCtrl.favorite = UserService.getFavoriteItem();
}
})();
