var ngApp = angular.module('myApp', []);

ngApp.controller('myController', function ($scope, $http) {
  $scope.msg = '¡Bienvenido! ';
  $scope.getData = function () {
    return 'qubernet';
  }
  //Ingresar usuario
  //**************** 
  $scope.createTodo = function () {
    $http
      .post("http://localhost:600/upload", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
      })

  };
  //Ingresar Inmueble
  //*****************
  $scope.RegistrarInmueble = function(){
    $http
      .post("http://localhost:600/insertarInmueble", $scope.formData)
      .then(function successCallback(response) {
        // $scope.formData = {};
        $scope.message = response.data;
        console.log(response);
      })
  }
})



onload = function () {
  document.getElementById('lbtnTest').onclick = function () {
    alert("En este espacio puedes crear tu usuario")
    // Obtenga la aplicación Angular a través del controlador
    var appElement = document.querySelector('[ng-controller=myController]');
    // Obtenga la variable $ scope
    var $scope = angular.element(appElement).scope();

    // Llama a la variable msg y cambia el valor de msg
    $scope.msg = '*Todos los campos son requeridos';
    // La línea anterior cambió el valor de msg. Si desea sincronizar con el controlador angular, debe llamar al método $ apply ().
    $scope.$apply();
    // Llame al método getData () en el controlador
    console.log($scope.getData());
  }
}