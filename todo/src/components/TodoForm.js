import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../contexts/TodoContext';


const TFWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 20px;

	h2 {
		font-size: 2rem;
	}

	.clear {
		font-size: 2rem;
		margin: 10px;

		span {
			margin-right: 10px;
		}
	}

	input {
		width: 300px;
		height: 30px;
		border-radius: 5px;
		border: 1px solid grey;
		font-size: 1.8rem;
		margin: 10px;
		padding: 5px;
	}

	button {
		height: 26px;
		width: 60px;
		font-size: 1.4rem;
		border: 1px solid grey;
		border-radius: 5px;

		&:hover {
			cursor: pointer;
		}
	}
`;


function TodoForm() {

	const { addTask, clearDone } = useContext(TodoContext);

	const [newTask, setNewTask] = useState('');

	const changeHandler = (e) => {
		e.preventDefault();
		setNewTask(e.target.value);
	};

	const addHandler = (e) => {
		e.preventDefault();
		addTask(newTask);
		setNewTask('');
	};

	const clearHandler = (e) => {
		e.preventDefault();
		clearDone();
	};

	return (
		<TFWrapper>
			<h2>Enter New Todo Task Here:</h2>

			<form className='add' onSubmit={addHandler}>
				<input onChange={changeHandler} type='text' placeholder='todo' value={newTask} />
				<button onClick={addHandler}>Add</button>
			</form>

			<form className='clear' onSubmit={clearHandler}>
				<span>Clear all completed tasks?</span>
				<button onClick={clearHandler}>Clear</button>
			</form>
		</TFWrapper>
	);
}

export default TodoForm;
