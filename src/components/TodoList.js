import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';


const TLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 20px;

	.list-header {
		font-size: 2.6rem;
	}
`;


function TodoList(props) {

	return (
		<TLWrapper>
			<div className='list-header'>
				<span>My Todo Tasks</span>
			</div>
			{props.todoList.map(todo => ( <Todo key={todo.id} todo={todo} /> ) )}
		</TLWrapper>
	);
}

export default TodoList;
