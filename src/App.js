
import Registration from './pages/registration/Registration';
import GenrePage from "./pages/genre/GenrePage.jsx";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Registration />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/homepage" element={<HomePage />} />
       {/*   <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/promotion" element={<PromotionPage />} />  */}


        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
