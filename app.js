const app = angular.module("motosmart",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"saludos.html",
        controller:"PerfilController"
    })
    .when("/dash",{
        templateUrl:"dash.html",
        controller:"DashController"
    }).when("/tienda",{
        templateUrl:"tienda.html",
        controller:"TiendaController"
    });

})
app.controller("PerfilController",function($scope){
    $scope.saludos = "Hola motosmart";
    $scope.acercade = " Este es una prueba creando las paginas correspondientes a la tienda y agregar un articulo";
    $scope.hechoen = "Construido con Angularjs V 1.8, utilizando materialize como estilo basado en el Figma de ejemplo proporcionado";
});

app.controller("DashController",function($scope){
    $scope.saludos = "Hola Dash";
});

app.controller("TiendaController",function($scope){
    $scope.saludos = "Hola tienda";
    $scope.act = true;
    $scope.ina = false;

    $scope.isShowHide = function (param) {
        if (param == "act") {
            $scope.act = true;
            $scope.ina = false;
        }
        else {
            $scope.act = false;
            $scope.ina = true;
        }
    }
});
