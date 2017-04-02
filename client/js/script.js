(function() {
  "use strict";
  var app = angular.module("myApp", ["ngTable","angularModalService"])

    // customerTableController -  which controlles the customer table
    .controller('customerTableController', ["NgTableParams", "$scope", "$filter", "$http", "ModalService", "$window", function(NgTableParams, $scope, $filter, $http, ModalService, $window) {      
      var self = this;
      var simpleList2;

      function getCustomerData(){
        $.get( "http://192.168.33.10/restcustomer/app/api/customers", function( data ) {
          simpleList2 = JSON.parse(data);
          self.tableParams = new NgTableParams({}, { dataset: simpleList2});
          self.tableParams.reload();
        });
      }

      //exposing this function to window
      $window.getCustomerData = getCustomerData();

      self.del = del;
      self.edit = edit;

      // delete button
      function del(row) {
        $http.delete('http://192.168.33.10/restcustomer/app/api/customer/delete/' + row.id, null).then(
          function success(result){
            close(result, 500); // close, but give 500ms for bootstrap to animate
            getCustomerData();
          }, 
          function err(err){
            JSON.parse(err);
            console.log(err);
          }
        );
      }

      function edit(row){
       //Just provide a template url, a controller and call 'showModal'.

        console.log(row);
        var input = {}
        input.row = row;

        ModalService.showModal({
          templateUrl: "register/modal.html",
          controller: "EditModal",
          inputs: row
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            if(result.status === 200){
               getCustomerData();
            }
          });
        });
      }

      $scope.register = function(){
       //Just provide a template url, a controller and call 'showModal'.
        ModalService.showModal({
          templateUrl: "register/modal.html",
          controller: "RegisterModal"
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            if(result.status === 200){
               getCustomerData();
            }
          });
        });
      }

    }])

    // controller for the registeration popover (Modal)
    .controller('RegisterModal', ['$scope', 'close', '$http', function($scope, close, $http) {
      $scope.formData = {};

      $scope.close = function(result) {
        console.log($scope.formData);
        var emptyFormData = jQuery.isEmptyObject($scope.formData);

        //make sure the object isn't empty
        if(!emptyFormData){
          $http.post('http://192.168.33.10/restcustomer/app/api/customer/add', $scope.formData).then(
            function success(result){
              close(result, 500); // close, but give 500ms for bootstrap to animate
            }, 
            function err(err){
              console.log(err);
            }
          );          
        }
      };

    }])

    // controller for the registeration popover (Modal)
    .controller('EditModal', ['$scope', '$window', 'close', '$http', 'id', 'nic','first_name', 'last_name', 'phone', 'address', 'email', 'city','district','country',  
      function($scope, $window, close, $http, id, nic, first_name, last_name, phone, email, address, city, district, country) {
      $scope.formData = {
          "id" : id,
          "nic": nic,
          "first_name": first_name,
          "last_name": last_name,
          "phone": phone,
          "email": email,
          "address": address,
          "city": city,
          "district": district,
          "country": country
      };

      $scope.close = function(result) {
        console.log($scope.formData);
        
        var emptyFormData = jQuery.isEmptyObject($scope.formData);

        //make sure the object isn't empty
        if(!emptyFormData){
          var submitData = eval($scope.formData);
          $http.put('http://192.168.33.10/restcustomer/app/api/customer/update/'+id, $scope.formData).then(
            function success(result){
              console.log(result);
              close(result, 500); // close, but give 500ms for bootstrap to animate
            }, 
            function err(err){
              console.log(err);
            }
          );
        }
      };

    }])


})();

(function() {
  "use strict";
  angular.module("myApp").run(setRunPhaseDefaults);
  setRunPhaseDefaults.$inject = ["ngTableDefaults"];

  function setRunPhaseDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 10;
    ngTableDefaults.settings.counts = [];
  }
})();
