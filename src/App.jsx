
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
