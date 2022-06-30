import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Articles from './pages/Articles';
import Layout from './components/Layout';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Layout>  
    </BrowserRouter>
  );
}

export default App;
