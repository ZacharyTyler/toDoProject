import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//NOTE  Create the render function
function _drawTodos() {
	let todo = _todoService.Todo
	let s = "s"
	if (todo.length == 1) { s = "" }
	let template = `<div> <h4>${todo.length} thing${s} in your todo list</h4><br><br></div>`
	todo.forEach(t => {
		let complete = ""
		if (t.completed == true) { complete = 'checked' }
		template += `<div><h5><input type="checkbox" name="todo-check" value="todo" onclick="app.controllers.todoController.toggleTodoStatus('${t._id}')" ${complete}> ${t.description}</h5><button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${t._id}')" >delete</button></div>`
	})


	document.getElementById("todos").innerHTML = template

}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}

export default class TodoController {
	constructor() {
		//NOTE  Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			//NOTE  build the todo object from the data that comes into this method
			description: form.description.value
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
