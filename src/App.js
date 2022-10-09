import './App.css';
import { MainPage } from './pages/mainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CountryDetails } from './pages/CountryDetails/CountryDetails';
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState("")

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage setDetails={setDetails} />} ></Route>
        <Route path='/Details' element={<CountryDetails details={details} />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
