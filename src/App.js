import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Register from './components/main/register/Register';

function App() {
  let name="khush";
  return (
    <div>
     <Header/>
     <Register var={name}/>
    </div>
  );
}

export default App;
