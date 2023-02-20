import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes'
function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className="content">
        <AnimatedRoutes />
      </div>
      {/* <div className='footer'> */}
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
