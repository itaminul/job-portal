import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Dahsbord</div>} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<div>Dahsbord</div>} />

        </Routes>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
