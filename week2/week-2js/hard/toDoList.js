/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todos = []
    }

    add(todo){
        this.todos.push(todo);

    }

    remove(indexOfTodo){
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo,1)
        }else{
            console.log("Index out of range");
        }
    }
    update(index, updatedTodo){
        this.todos[index] = updatedTodo;
    }
    getAll(){
        for (let index = 0; index < this.todos.length; index++) {
            const element = this.todos[index];
            console.log(element);
        }
    }

    get(indexOfTodo){
        console.log(this.todos[indexOfTodo]);
    }

    clear(){
        this.todos = [];
    }

}

const toDo = new Todo();

toDo.add('going to gym')
toDo.add('Meditation')
toDo.add('Reading Book')
toDo.add('Coding')

toDo.update(2, 'Journaling')

// toDo.remove(3)

toDo.get(2)
toDo.getAll();

module.exports = Todo;