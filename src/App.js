import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Favourites from './components/Favourites.jsx';
import BooksList from './components/BooksList.jsx';
import BooksDetails from './components/BooksDetails.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<BooksList/>} />
        <Route path='/books/:id' element={<BooksDetails/>} />
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
