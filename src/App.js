import './App.css';
import ResponsiveAppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
