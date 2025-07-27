(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var signupCtrl = this;
    signupCtrl.user = {};
    signupCtrl.completed = false;
    signupCtrl.invalidFavorite = false;

    signupCtrl.submit = function () {
      MenuService.getMenuItem(signupCtrl.user.favoriteDish)
        .then(function (response) {
          UserService.saveUser(signupCtrl.user, response);  // save user + dish
          signupCtrl.invalidFavorite = false;
          signupCtrl.completed = true;
        })
        .catch(function () {
          signupCtrl.invalidFavorite = true;
          signupCtrl.completed = false;
        });
    };
  }
})();
