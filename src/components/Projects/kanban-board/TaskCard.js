import { Box, IconButton } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './kanbanBoard.css';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import TextField from '@mui/material/TextField';

function TaskCard(props) {
	const [isFocused, setIsFocused] = useState(true);
	console.log(props.text);
	const [description, setDescription] = useState(props.text ? props.text : '');
	const onChange = (e) => {
		setDescription(e.target.value);
		props.onChangeDescription(props.columnId, props.itemId, e.target.value);
	};
	return (
		<Box className='task-container' sx={{ minHeight: isFocused ? 150 : 50 }}>
			<div className='task-header'>
				<Input
					value={props.title}
					onChange={(e) =>
						props.onChangeTaskTitle(
							props.columnId,
							props.itemId,
							e.target.value
						)
					}
					fullWidth
					sx={{ paddingLeft: '5px' }}
				/>
				<IconButton
					aria-label='delete'
					size='small'
					className='task-deleteContainer'
					onClick={() => props.deleteItem()}>
					<ClearIcon />
				</IconButton>
			</div>
			{/* <div onClick={() => props.deleteItem()}>delete</div> */}
			<div>
				<Input
					// id='outlined-textarea'
					className='task-description'
					value={props.text}
					onChange={(e) => onChange(e)}
					fullWidth
					placeholder='Click to add description...'
					multiline={isFocused}
					sx={{ padding: '5px 10px' }}
				/>
			</div>

			{/* <IconButton
				aria-label='enlarge'
				size='small'
				className='task-enlargeBtnContainer'
				onClick={() => setIsFocused(!isFocused)}>
				<OpenInFullIcon fontSize='18' />
			</IconButton> */}
		</Box>
	);
}

export default TaskCard;
