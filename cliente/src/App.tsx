import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar";

import Home from './components/home/home';

import FooterComponent from "./components/footer/footer";

function App () {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App;