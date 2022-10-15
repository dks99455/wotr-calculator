import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LevelUp from './components/LevelUp';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="levelup" element={<LevelUp />}/>
      </Route>
      </Routes>
    </>
  );
}

export default App
