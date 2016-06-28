(function() {
  'use strict';

  angular
    .module('yeoman')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,  $scope) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1467025200204;
    /**
    form schema
    **/
    vm.schema = {
      "type": "object",
"properties": {
  "subforms": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "nick": { "type": "string" },
        "emails": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  }
}
    };
    vm.form = [
      "*",      
        {
          type: "submit",
          title: "Save"
        }
      ];
    vm.model = {};
    vm.onSubmit = function(form) {
        // First we broadcast an event so all fields validate themselves

        $scope.$broadcast('schemaFormValidate');

        // Then we check if the form is valid
        if (form.$valid) {
          window.alert('valid');
        }else{
          window.alert('not valid');
        }
      }
    /**
    end
    form schema
    **/
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }



    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
