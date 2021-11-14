import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>

        <div className="container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         {/* <Landing /> */}
//         <Route exact path="/" component={Landing} />
//         <Footer />
//       </div>
//     </Router>
//   );
// }


export default App;
