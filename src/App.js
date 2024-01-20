import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';
import PasswordGenrate from './Components/PasswordGenrate';
import Todo from './Components/Todo';
import Quete from './Components/Quete';
import Calculator from './Components/Calculator';
import TicTac from './Components/TicTac';
import Stopwatch from './Components/Stopwatch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import ColorPicker from './Components/ColorPicker';
import Profile from "./Components/Profile"
import Sign from "./Components/Sign";
import Login from "./Components/Login";
import Clock from './Components/Clock';
// import Chat from './Components/Chat';
function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="CurrencyConverter" element={<CurrencyConverter />} />
          <Route path="PasswordGenrate" element={<PasswordGenrate />} />
          <Route path="Todo" element={<Todo />} />
          <Route path="Quete" element={<Quete />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="TicTac" element={<TicTac />} />
          <Route path="Stopwatch" element={<Stopwatch />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="ColorPicker" element={<ColorPicker />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Sign" element={<Sign />} />
          <Route path="Login" element={<Login />} />
          <Route path="Clock" element={<Clock />} />
          {/* <Route path="Chat" element={<Chat />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
