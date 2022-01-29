import React from 'react';
import PrimaryPage from './components/primary-page/primary-page.component';
import './styles/App.scss';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import SignUpForm from './components/SignUpForm/SignUpForm.jsx';
import StickyTopNavbar from './components/navbar-header/navbar-header.component';

function App() {
  return (
    <div className="App">
      <StickyTopNavbar/>
      <Routes>
          <Route exact path="/registration" element={<SignUpForm/>}/>
          <Route exact path="/" element={<PrimaryPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
