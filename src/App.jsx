import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { StarShipPage } from './pages/StarshipPage';
import { VehiclePage } from './pages/VehiclePage';
import { SpeciesPage } from './pages/SpeciesPage';
import { PlanetsPage } from './pages/PlanetsPage';
import { PeoplePage } from './pages/PeoplePage';
import { FilmsPage } from './pages/FilmsPage';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<div className="app">
			<Navbar />
			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/starships" element={<StarShipPage />} />
					<Route path="/vehicles" element={<VehiclePage />} />
					<Route path="/species" element={<SpeciesPage />} />
					<Route path="/planets" element={<PlanetsPage />} />
					<Route path="/people" element={<PeoplePage />} />
					<Route path="/films" element={<FilmsPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
