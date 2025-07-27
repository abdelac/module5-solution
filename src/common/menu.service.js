(function () {
'use strict';

angular.module('restaurant')
.service('MenuService', MenuService);

MenuService.$inject = ['$http'];
function MenuService($http) {
  var service = this;

  service.getMenuItem = function (category, number) {
    var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category}/menu_items/${number}.json`;
    return $http.get(url).then(function (response) {
      return response.data;
    }, function () {
      return null;
    });
  };
}
})();
