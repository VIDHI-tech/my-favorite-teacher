import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/play/instructions' exact element={<QuizInstructions />} />
        <Route path='/play/Quiz' exact element={<Play />}/>
        <Route path='/play/quizSummary' exact element={<QuizSummary/>} />
      </Routes>
    </Router>
  );
}

export default App;
