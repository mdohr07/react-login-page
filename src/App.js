import logo from './logo.svg';
import './App.css';
import './Components/Header/Header'
import './Components/Introduction/Introduction'
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <Introduction/>
      <LoginSignup/>
      </main>
    </div>
  );
}

export default App;
