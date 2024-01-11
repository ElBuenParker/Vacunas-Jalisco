import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados

import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Calculadora from './components/calculadora';
import Privacidad from './components/privacidad';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='calculadora' element={ <Calculadora /> } />
    <Route path='privacidad' element={ <Privacidad /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
