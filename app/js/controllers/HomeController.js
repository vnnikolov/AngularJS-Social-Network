(function () {
	"use strict"
	var app = angular.module("app.controllers", []);

	app.controller("HomeController", function($scope, UsersFactory, UtilsFactory, ProfileFactory) {
        if (UtilsFactory.isLogged()) {
            $scope.menu = 'partials/menu.html';

            ProfileFactory.get(function (data) {
                $scope.fullName = data.name;
            }, function (data) {
                console.log(data);
            });
            return;
        }

        $scope.showTitle = true;
        $scope.loginForm = 'partials/loginForm.html';
        $scope.registerForm = '';
        $scope.loginLink = true;



        $scope.showLogin = function () {
            $scope.loginForm = 'partials/loginForm.html';
            $scope.registerForm = '';
        };

        $scope.showRegister = function () {
            $scope.registerForm = 'partials/registerForm.html';
            $scope.loginForm = '';
        };
	});
})();

