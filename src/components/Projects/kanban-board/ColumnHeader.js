import React from 'react';
import { useState } from 'react';
import './kanbanBoard.css';
import Input from '@mui/material/Input';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

function ColumnHeader({ columnTitle, deleteColumn }) {
	const [title, setTitle] = useState(columnTitle);
	return (
		<div className='columnHeader-container'>
			<Input value={title} onChange={(e) => setTitle(e.target.value)} />
			<IconButton
				aria-label='delete'
				size='small'
				className='header-deleteContainer'
				onClick={() => deleteColumn()}>
				<ClearIcon />
			</IconButton>
		</div>
	);
}

export default ColumnHeader;
