import React from 'react';
import { useState } from 'react';
import './kanbanBoard.css';
import Input from '@mui/material/Input';

function ColumnHeader({ columnTitle }) {
	const [title, setTitle] = useState(columnTitle);
	return (
		<div className='columnHeader-container'>
			<Input value={title} onChange={(e) => setTitle(e.target.value)} />
		</div>
	);
}

export default ColumnHeader;
