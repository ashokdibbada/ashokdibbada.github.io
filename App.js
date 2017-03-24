var app = angular.module('ResumeApp',['ui.router','LocalStorageModule','ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider){	

//	$urlRouterProvider.otherwise('/firm_exp');
  $stateProvider       
        .state('firm_exp', {
            url: '/firm_exp',
            templateUrl: 'firm_exp.html',
			controller:'C1Ctrl'
        })
        .state('clg_exp', {
            url: '/clg_exp',
            templateUrl: 'clg_exp.html',
            controller:'C2Ctrl'
        })
        .state('skill_set', {
            url: '/skill_set',
            templateUrl: 'skill_set.html',
            controller:'C3Ctrl'
        })
        .state('education', {
            url: '/education',
            templateUrl: 'education.html',
            controller:'C4Ctrl'
        })
        .state('over_view', {
            url: '/over_view',
            templateUrl: 'overview.html',
            controller:'C5Ctrl'
        })
		;
		
});

// for preserving angular and other functional tags inside the passes HTML file
app.directive("compileHtml", function($parse, $sce, $compile) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
 
            var expression = $sce.parseAsHtml(attributes.compileHtml);
 
            var getResult = function () {
                return expression(scope);
            };
 
            scope.$watch(getResult, function (newValue) {
                var linker = $compile(newValue);
                element.append(linker(scope));
            });
        }
    }
});
