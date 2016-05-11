(function(){

	var app=angular.module('todolist',[]);

	var tasks=[
		{
			taskName : "Bring Snacks",
			done : true,
		},
		{
			taskName : "Buy Books",
			done : false,
		}
	];

	app.controller('ListController',function(){
		this.taskList = tasks;

		this.isDone=function(task)
		{
			return task.done;
		};
		this.addTask=function(){
			
			this.taskList.push({
				taskName : this.taskname,
				done : false,
			});
			this.taskname="";
		}
	});
	
})();