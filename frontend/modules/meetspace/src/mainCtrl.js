(function () {
'use strict';
function mainCtrl ($scope, Controller, eventsRepository) {
	Controller.call(this, $scope, eventsRepository);
	this.loadEvents();
}
mainCtrl.$inject = ['$scope', 'MyPlace.Crud.Controller', 'Meetspace.eventsRepository'];
angular.module('Meetspace')
.controller('Meetspace.mainCtrl', mainCtrl)
;
})();