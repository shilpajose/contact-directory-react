import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AllContacts from './Pages/AllContacts';
import Singlview from './Pages/Singlview';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path={'/'} element={<AllContacts></AllContacts>}></Route>
        <Route path={'/singleview/:email'} element={<Singlview></Singlview>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
