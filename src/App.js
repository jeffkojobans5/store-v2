import { Routes , Route } from 'react-router-dom';
import './index.css';
import { Homepage , Shop } from './pages/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes> 
  );
}

export default App;
