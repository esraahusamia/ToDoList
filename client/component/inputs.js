angular.module('app',[]).
component('inputlist', {

	bindings:{
		task:"<"
	},

	controller:function (){

		this.list = [];
		this.save:function (){
        this.newTask;
        this.list.push(this.newTask);
        $.ajax({
        	method:"POST",
        	url :"https://localhost:3000",
        	data:{task: $(#task).val(),date: $(#date).val,time : $(#time).val()}
        }).
        done(function(todo){
        	alert("data saved :" + todo);
        });

         $.ajax({
        	method:"GET",
        	url :"https://localhost:3000"
        }).
        done(function(todos){
        	alert( todo);
        });

		}

	},

	templateUrl:'../template/inputList.html'

});