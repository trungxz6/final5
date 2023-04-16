import Header from '../Header';
import Navbar from '../Navbar';
import Banner from '../Banner';
// import Champion from './components/Champion';
// import Home from './components/Home';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

function AppFake() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Banner/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default AppFake;
