import React from "react";
import Daftar from "./components/register";
import Edit from "./components/edit";
import Cari from "./components/search";
import Navbar from "./components/Navbar/index";
import Footer from './components/Footer/Footer';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';

// import About from './pages/about';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

function App() {
  return (
    <Router>
        <Navbar />
        <Home />
        <Footer />

        
      <Routes>
      <Route exact path = "/register" element = {<Daftar/>} />
      <Route exact path = "/edit" element = {<Edit/>} />
      <Route exact path = "/search" element = {<Cari/>} />
      <Route path="/" exact component={Home} />
        
      </Routes>

    </Router>
  );
}

export default App;
