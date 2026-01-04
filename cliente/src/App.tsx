import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/navbar";

import Home from './components/home/home';

import FooterComponent from "./components/footer/footer";

function App () {
  return(
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar/>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </main>
        <FooterComponent/>
      </div>
    </BrowserRouter>
  )
}

export default App;