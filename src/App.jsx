import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
