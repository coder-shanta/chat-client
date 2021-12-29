import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { SocketContext, socket } from "./context/socket";

function App() {
  return (
    <div className="app">
      <div className="container py-4">
        <SocketContext.Provider value={socket}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="chat/:groupId" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </SocketContext.Provider>
      </div>
    </div>
  );
}

export default App;
