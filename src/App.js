import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage } from "./pages";
import { NavBar } from './components';


function App() {
  return (
     <BrowserRouter>
         <NavBar /> {/* Render the Navbar component */}
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/contact" element={<ContactPage />} />
         </Routes>
       </BrowserRouter>
  );
}

export default App;
