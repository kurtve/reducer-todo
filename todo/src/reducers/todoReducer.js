
export const initialState = {
	todoList: [
		{ task: 'Add items to todo-list', completed: false, id: new Date() }
	]
};


export function todoReducer(state, action) {
	switch (action.type) {

		// add a new todo to the list
		// payload = new task
		case "ADD_TODO":
			if (action.payload !== '') {
				return { ...state,
					todoList: [...state.todoList,
						{ task: action.payload, completed: false, id: new Date() }
					]
				};
			} else {
				return state;
			}

		// change a todo's completed status
		// payload = id of todo to toggle status
		case "MARK_TODO":
			return { ...state,
				todoList: state.todoList.map(todo =>
					todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
			};

		// remove all completed todos from the list
		// no payload
		case "CLEAR_DONE":
			return { ...state,
				todoList: state.todoList.filter(todo => !todo.completed)
			};

		default:
			return state;
	}
}
