import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import RootLayout from './components/RootLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
