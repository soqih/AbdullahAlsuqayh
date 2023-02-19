import Navbar from './components/navbar/Navbar';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes'
function App() {
  return (
    <Router>
        <Navbar />
        <div className="content">
            <AnimatedRoutes />
        </div>
    </Router>
  );
}

export default App;
