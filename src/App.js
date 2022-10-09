import './App.scss';
import Header from './components/header/Header';
import Navi from './components/navigation/Navi';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';


function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
          <Navi />
          <Main />
      </div>
    </div>
  );
}

export default App;
