import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Addcar from './pages/Addcar';
import List from './pages/List';
import Detail from './pages/Detail';
import Invoice from './pages/Invoice';
import Landing from './pages/Landing';
import Add from './pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/form' element={<Add />} />
        <Route path='/cars' element={<List />} />
        <Route path='/add' element={<Addcar />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/invoice' element={<Invoice />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
