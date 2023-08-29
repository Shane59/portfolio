import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import { useEffect, useState } from 'react';
import PersonalProjectPage from './components/PersonalProjectPage';

function App() {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [isLoading, setIslaoding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(response => response.json())
      .then(data => setPersonalProjects(data))
      .catch(err => console.log(err));
      setIslaoding(false);
  }, []);

  return (
    <>
      {!isLoading ?
        <Routes>
          <Route path='/' element={<Top personalProjects={personalProjects} />} />
          <Route path='/personal-project/:id' element={<PersonalProjectPage personalProjects={personalProjects} />} />
        </Routes>
        : null
      }
    </>
  );
}

export default App;
