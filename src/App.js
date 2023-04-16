import HeaderAuth from './components/HeaderAuth/indexAuth';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import Champion from './components/Champion';
// import Home from './components/Home';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderAuth />
      <Navbar/>
      <Banner/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
