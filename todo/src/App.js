import React, { useReducer } from 'react';
import styled from 'styled-components';

import TodoContext from './contexts/TodoContext';
import { todoReducer, initialState } from './reducers/todoReducer';
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

	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<TodoContext.Provider value={{dispatch}} >
			<AppWrapper>
				<h1>Todo App With Reducer!</h1>
				<TodoForm />
				<TodoList todoList={state.todoList} />
			</AppWrapper>
		</TodoContext.Provider>
	);
}

export default App;
