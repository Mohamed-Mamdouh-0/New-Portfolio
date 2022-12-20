import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<div className='App'>
			<NavbarComponent />
			<AppRouter />
		</div>
	);
}

export default App;

// {/* Routes nest inside one another. Nested route paths build upon
//       parent route paths, and nested route elements render inside
//       parent route elements. See the note about <Outlet> below. */}
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="dashboard" element={<Dashboard />} />

//         {/* Using path="*"" means "match anything", so this route
//               acts like a catch-all for URLs that we don't have explicit
//               routes for. */}
//         <Route path="*" element={<NoMatch />} />
//       </Route>
//     </Routes>
