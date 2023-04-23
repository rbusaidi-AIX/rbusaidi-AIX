import React from 'react'
import {Routes, Route} from 'react-router-dom'
import homepage from './routes/homepage'


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<homepage />} />

      </Routes>
    </div>
  );
}

export default App;
