import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';
import Todo from './Todo';


const TLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 10px;

	h3 {
		font-size: 2.6rem;
	}

`;


function TodoList() {

	const { todoList } = useContext(TodoContext);

	return (
		<TLWrapper>
			<h3>Todo List Goes Here!</h3>
			<Todo todo={todoList[0]} />
		</TLWrapper>
	);
}

export default TodoList;
