(function () {
'use strict';

angular.module('restaurant')
.service('UserService', UserService);

function UserService() {
  var service = this;
  var user = null;
  var favoriteItem = null;

  service.saveUser = function (userData, menuItem) {
    user = angular.copy(userData);
    favoriteItem = menuItem;
  };

  service.getUser = function () {
    return user;
  };

  service.getFavoriteItem = function () {
    return favoriteItem;
  };
}
})();
