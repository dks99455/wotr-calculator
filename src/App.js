import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LevelOne from './components/Level1';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="levelone" element={<LevelOne />}/>
      </Route>
      </Routes>
    </>
  );
}

export default App
