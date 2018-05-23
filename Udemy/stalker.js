/*
var flag = true;
while(flag){
	var check = prompt("Are we there yet")
	if(check === "yes" || check === "yeah"){
		alert("Yay we made it!");
		flag = false;
	}
}
*/
var todos = [];
var input = prompt("What would you like to do");
while(input!=="quit"){
	if(input === "new"){
		addTodo();
	}
	else if(input === "list"){
		listTodo();
	}
	else if(input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do");
}

function addTodo(){
	var newInput = prompt("Add a todo");
		todos.push(newInput);
}

function listTodo(){
	todos.forEach(function(a, i){ //a je kao u javi for(String a : lista), i je index
		console.log(i+":"+a);
	});
}
function deleteTodo(){
	var which = prompt("Which index do you want to delete?");
		todos.splice(which-1,1); //izbacuje iz liste
}