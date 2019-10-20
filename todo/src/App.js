import React, { useState } from 'react';
import styled from 'styled-components';
import TodoContext from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	h1 {
		font-size: 4rem;
		text-align: center;
	}
`;


function App() {

	const initialTodo = {
		task: 'Add tasks to the Todo List',
		id: new Date(),
		complete: false
	};

	const [todoList, updateList] = useState([initialTodo]);

	const addTodo = (todo) => {
		updateList([...todoList, todo]);
	};

	const markTodo = (id) => {
		updateList(todoList.map(todo => {
			if (todo.id !== id) return todo;
			else return {...todo, complete: !todo.complete};
		}));
	};

	const clearDone = () => {
		updateList(todoList.filter(todo => !todo.complete));
	};


	return (
		<TodoContext.Provider value={{todoList, addTodo, markTodo, clearDone}} >
			<AppWrapper>
				<h1>Todo App With Reducer!</h1>
				<TodoForm />
				<TodoList />
			</AppWrapper>
		</TodoContext.Provider>
	);
}

export default App;
