import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Login/Login';
import Panel from './pages/Panel/Panel';
import Inventory from './pages/Inventory/Inventory';
import { DisplayFlex } from './assets/styles/globalStyle';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Header />
      <DisplayFlex>
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path='/' element={<Panel />}/>
            <Route path='estoque' element={<Inventory />}/>
          </Routes>
        </BrowserRouter>
      </DisplayFlex> */}
    </div>
  );
}

export default App;
