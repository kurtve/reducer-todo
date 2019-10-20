import React from 'react';
import styled from 'styled-components';


const TodoWrapper = styled.div`
	margin: 10px;
	padding: 5px;
	border: 1px solid grey;
	width: 400px;

	div {
		margin: 5px;
	}

	.todo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.task {
		font-size: 2rem;
	}

	.date {
		font-size: 1.8rem;
		font-style: italic;
	}

	.done {
		font-size: 1.8rem;
	}

	.check {
		width: 15px;
		height: 15px;
		margin-left: 10px;
	}
`;


function Todo(props) {

	const checkTodo = (e) => {
		props.markTodo(props.todo.id);
	};

	return (
		<TodoWrapper>
			<div className='todo'>
				<div className='task'>{props.todo.task}</div>
				<div className='date'>Added: {props.todo.id.toUTCString().substring(0, 12)}</div>
				<div className='done'>
					Complete?
					<input className='check' type='checkbox' onChange={checkTodo} checked={props.todo.completed} />
				</div>
			</div>
		</TodoWrapper>
	);
}

export default Todo;
