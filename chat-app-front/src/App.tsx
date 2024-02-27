import React, { useState } from 'react';
import Login from './components/Login/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ChatRoom } from './components/Chat/ChatRoom';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();


  return (
      <div className="app">
      <Routes>
        <Route path="/" element={<Login onLogin={setCurrentUser}/>} />
        <Route path="/chat" element={ <ChatRoom currentUser={currentUser} onLogout={
          () => 
          {
            setCurrentUser(null);
            navigate('/');

          }
        }/> } />
      </Routes>
    </div>
  );
}

export default App;