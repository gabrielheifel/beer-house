import Header from './components/Header/Header'
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Login/Login';
import Painel from './pages/Painel/Painel';
import { DisplayFlex } from './assets/styles/globalStyle';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <DisplayFlex>
        <SideBar />
        <Painel />
      </DisplayFlex>
    </div>
  );
}

export default App;
