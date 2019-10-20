import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';


const TodoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 10px;

	h3 {
		font-size: 2rem;
	}

	span {
		font-style: italic;
	}

`;


function Todo(props) {

	const { markTodo } = useContext(TodoContext);

	return (
		<TodoWrapper>
			<h3>Todo <span>{props.todo.task}</span> Goes Here!</h3>
		</TodoWrapper>
	);
}

export default Todo;
