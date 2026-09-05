import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import CarPage from "./pages/CarPage.jsx";

import {Route, Routes} from "react-router-dom";



function App() {


  return (
    <>
      <div >
          <Header/>

          <main>
              <Routes>
                  <Route path="/"  element={<Home/>} />
                  <Route path="/vozila/:id" element={<CarPage/>} />
              </Routes>
          </main>

          <Footer/>
      </div>



    </>
  )
}

export default App

