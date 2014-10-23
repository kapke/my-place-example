function mainCtrl ($scope, clientService, Conversion) {
	$scope.clients = [];
	$scope.conversions = [];
	$scope.actualClient = false;
	$scope.actualProduct = false;

	$scope.selectClient = selectClient;
	$scope.selectProduct = selectProduct;
	$scope.addConversion = addConversion;

	loadClients();

	function selectClient (client) {
		$scope.actualClient = client;
		$scope.actualProduct = false;
	}

	function selectProduct (product) {
		$scope.actualProduct = product;
		$scope.conversions = [];
		loadConversions();
	}

	function loadClients () {
		clientService.getClients().then(function (clients) {
			$scope.clients = clients;
		});
	}

	function loadConversions () {
		$scope.conversions = Conversion.query({clientId: $scope.actualClient.id, productId: $scope.actualProduct.id});
	}

	function addConversion () {
		var conversion = new Conversion();
		conversion.client = $scope.actualClient;
		conversion.product = $scope.actualProduct;
		conversion.$save(function () {
			loadConversions();
		});
	}
}

mainCtrl.$inject = ['$scope', 'ClientData.clientService', 'ClientConversions.Conversion'];

angular.module('ClientConversions')
.controller('ClientConversions.mainCtrl', mainCtrl)
;