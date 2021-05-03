import './App.css';
import CustomerReviews from './pages/CustomerReviews/CustomerReviews';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Home/>
      <Menu/>
      <CustomerReviews/>
      <Footer/>
    </div>
  );
}

export default App;
