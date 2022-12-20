import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuid } from 'uuid';
import './kanbanBoard.css';

function AddButtons({ setColumns, addItem, items, columns }) {
	const addColumns = () => {
		return setColumns({
			...columns,
			[uuid()]: {
				name: 'new',
				items: [],
			},
		});
	};
	return (
		<div className='Header-container'>
			<span className='Header-title'>Managment Board</span>
			<div>
				<Button
					className='Header-btn'
					variant='contained'
					onClick={() => addItem()}
					endIcon={<AddIcon />}>
					Add Task
				</Button>{' '}
				<Button
					className='Header-btn'
					variant='contained'
					onClick={() => addColumns()}
					endIcon={<AddIcon />}>
					Add Column
				</Button>
			</div>
		</div>
	);
}

export default AddButtons;
