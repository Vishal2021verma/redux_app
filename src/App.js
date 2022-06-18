
import './App.css';
import Navigation from './components/navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Courses from './components/courses';
import About from './components/about';
import LogIn from './components/logIn';
import SignUp from './components/signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Courses />} />
        <Route exact path="/about" element={<About />} />
        <Route  exact path="/login" element={<LogIn />} />
        <Route exact path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
