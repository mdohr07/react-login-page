import logo from './logo.svg';
import './App.css';
import './Components/Header/Header'
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
      <LoginSignup/>
      </main>
    </div>
  );
}

export default App;
