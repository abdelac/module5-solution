(function () {
  'use strict';

  angular.module('public')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var user = null;
    var favorite = null;

    service.saveUser = function (userData, favoriteDishData) {
      user = userData;
      favorite = favoriteDishData;
    };

    service.getUser = function () {
      return user;
    };

    service.getFavoriteDish = function () {
      return favorite;
    };
  }
})();
