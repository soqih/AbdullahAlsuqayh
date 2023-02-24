import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes'
function App() {
  return (
    <Router >
      <div className="app">

        <div>
          <Navbar />
        </div>
        <div className="content">
          <AnimatedRoutes />
        </div>
        {/* <div className='footer'> */}
        <Footer />
        {/* </div> */}
      </div>

    </Router>
  );
}

export default App;
