import  Home  from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppPage from "./pages/AppPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/app" element={<AppPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
