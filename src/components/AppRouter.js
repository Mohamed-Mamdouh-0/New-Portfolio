import React from 'react';
import Contact from './Contact';
import Home from './Home/Home';
import {
	Routes,
	Route,
	Outlet,
	Link,
	BrowserRouter,
	useLocation,
} from 'react-router-dom';
import FacebookHome from './Projects/facebook-simple-clone/FacbookHome';
import KanbanBoard from './Projects/kanban-board/kanbanBoard';
// import RecipeHome from './Projects/Recipe/RecipeHome';

function AppRouter() {
	// const location = useLocation();
	return (
		<BrowserRouter>
			{/* <Routes location={location} key={location.pathname}> */}
			<Routes>
				<Route index element={<Home />} />{' '}
				<Route path='contact' element={<Contact />} />{' '}
				<Route path='kanban-board' element={<KanbanBoard />} />{' '}
				<Route path='facebook-simple' element={<FacebookHome />} />
				{/* <Route path='Recipe' element={<RecipeHome />} /> */}
			</Routes>{' '}
		</BrowserRouter>
	);
}

export default AppRouter;
