import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MagicMakerForm from './components/MagicMakerForm';
import Main from './views/Main';
import Edit from './components/Edit';
import View from './components/View';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route element={<Main/>} path='/magicMakers' default />
          <Route element={<MagicMakerForm/>} path='/addMagicMaker' default />
          <Route element={<Edit/>} path='/magicMakers/edit/:id' />
          <Route element={<View/>} path='/magicMakers/:id' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
