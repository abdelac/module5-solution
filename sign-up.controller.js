(function () {
'use strict';

angular.module('restaurant')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var signUpCtrl = this;
  signUpCtrl.user = {};
  signUpCtrl.saved = false;
  signUpCtrl.invalidFavorite = false;

  signUpCtrl.submit = function () {
    MenuService.getMenuItem(signUpCtrl.user.favorite).then(function (response) {
      if (response) {
        signUpCtrl.invalidFavorite = false;
        UserService.saveUser(signUpCtrl.user, response);
        signUpCtrl.saved = true;
      } else {
        signUpCtrl.invalidFavorite = true;
        signUpCtrl.saved = false;
      }
    });
  };
}
})();
