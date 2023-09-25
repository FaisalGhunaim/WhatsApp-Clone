import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
            {/* <Route path="/" element={<h1>Home screen</h1>} /> */}
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
