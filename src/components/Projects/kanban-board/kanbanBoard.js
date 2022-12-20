import React, { useEffect, useState } from 'react';
import './kanbanBoard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import AddButtons from './AddButtons';
import ColumnHeader from './ColumnHeader';
import TaskCard from './TaskCard';

function KanbanBoard() {
	const [columnItems, setColumnItems] = useState([
		{
			id: uuid(),
			content: 'first task',
		},
		{
			id: uuid(),
			content: 'second task',
		},
	]);

	// const ColumnsFromBackend = {
	// 	[uuid()]: {
	// 		name: 'todo',
	// 		items: items,
	// 	},
	// 	[uuid()]: {
	// 		name: 'in progress',
	// 		items: [],
	// 	},
	// };
	const [columns, setColumns] = useState({
		[uuid()]: {
			name: 'todo',
			items: columnItems,
		},
		[uuid()]: {
			name: 'in progress',
			items: [],
		},
	});
	const onDragEnd = (result, columns, setColumns) => {
		if (!result.destination) return;
		const { source, destination } = result;
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = columns[source.droppableId];
			const destinationColumn = columns[destination.droppableId];
			const sourceItems = [...sourceColumn.items];
			const destinationItems = [...destinationColumn.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destinationItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...sourceColumn,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destinationColumn,
					items: destinationItems,
				},
			});
		} else {
			const column = columns[source.droppableId];
			const copiedItems = [...column.items];
			const [removed] = copiedItems.splice(source.index, 1);
			copiedItems.splice(destination.index, 0, removed);
			setColumns({
				...columns,
				[source.droppableId]: {
					...column,
					items: copiedItems,
				},
			});
		}
	};
	const addItem = () => {
		const firstColumnId = Object.keys(columns)[0];
		const column = columns[firstColumnId];
		const copiedItems = [...column.items];
		copiedItems.push({
			id: uuid(),
			content: 'New task',
		});
		setColumns({
			...columns,
			[firstColumnId]: {
				...column,
				items: copiedItems,
			},
		});
	};
	const deleteItem = (columnId, itemId) => {
		const column = columns[columnId];
		const copiedItems = [...column.items];
		const newColumnItems = copiedItems.filter((item) => item.id !== itemId);
		setColumns({
			...columns,
			[columnId]: {
				...column,
				items: newColumnItems,
			},
		});
	};
	const deleteColumn = (id) => {
		const currColumns = columns;
		delete currColumns[id];
		console.log(currColumns);
	};
	// console.log(columns, columnItems);

	return (
		<div className='page-container'>
			<AddButtons
				setColumns={setColumns}
				addItem={addItem}
				items={columnItems}
				columns={columns}
			/>
			<div className='d-flex flex-row'>
				<DragDropContext
					onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
					{Object.entries(columns).map(([id, column]) => {
						return (
							<div
								className='column-container'
								key={id}
								onClick={() => deleteColumn(id)}>
								<ColumnHeader columnTitle={column.name} />
								<div className='column-wrapper'>
									<Droppable droppableId={id} key={id}>
										{(provided, snapshot) => {
											return (
												<div
													{...provided.droppableProps}
													ref={provided.innerRef}
													style={{
														background: snapshot.isDraggingOver
															? 'lightblue'
															: '#1f2937',
														width: 250,
														minHeight: 900,
														borderRadius: '0.375rem',
													}}>
													{column.items.map((item, index) => {
														return (
															<Draggable
																key={item.id}
																draggableId={item.id}
																index={index}>
																{(provided, snapshot) => {
																	return (
																		<div
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																			style={{
																				userSelect: 'none',
																				margin: '0 0 8px 0',

																				borderRadius: '0.375rem',
																				backgroundColor: snapshot.isDragging
																					? '#263B4A'
																					: '#374151',
																				color: 'white',
																				...provided.draggableProps.style,
																			}}>
																			<TaskCard
																				content={item.content}
																				deleteItem={() =>
																					deleteItem(id, item.id)
																				}
																				{...provided.draggableProps}
																				{...provided.dragHandleProps}
																			/>
																		</div>
																	);
																}}
															</Draggable>
														);
													})}
													{provided.placeholder}
												</div>
											);
										}}
									</Droppable>
								</div>
							</div>
						);
					})}
				</DragDropContext>
			</div>
		</div>
	);
}

export default KanbanBoard;
