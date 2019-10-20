import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';


const TFWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 10px;

	h2 {
		font-size: 3rem;
	}

`;


function TodoForm() {

	const { addTodo } = useContext(TodoContext);

	return (
		<TFWrapper>
			<h2>New Todo Form Goes Here!</h2>
		</TFWrapper>
	);
}

export default TodoForm;
