(function() {
  'use strict';
  angular.module('paygap')
  .controller('DataController', DataController);
    DataController.$inject = ['DataService'];
  function DataController(DataService){
      console.log('im in here');

      let vm = this;
      vm.apitest = function apitest(){
          DataService.apitest();
      };
  }

}());
