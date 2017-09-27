angular.module('app',[]).
component('list', {

	controller:function (){
		this.list=window.tasksList

		},


	templateUrl:'../template/list.html'
	

});