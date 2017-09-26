angular.
module('ToDo').
component('list', {

	controller:{
		this.list=[{
			name: "running",
			date: "18/10/2017",
			time:  "08:00 am"
		},
		{
			name: "running",
			date: "18/10/2017",
			time:  "08:00 am"
		}
		]

	},

	templateUrl:'template/list.html'
	

}