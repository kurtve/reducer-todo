import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';
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


function TodoList() {

	const { todoList, markTodo } = useContext(TodoContext);

	return (
		<TLWrapper>
			<div className='list-header'>
				<span>My Todo Tasks</span>
			</div>
			{todoList.map(todo => {
				return (
					<Todo key={todo.id} todo={todo} markTodo={markTodo} />
				);
			})}
		</TLWrapper>
	);
}

export default TodoList;
