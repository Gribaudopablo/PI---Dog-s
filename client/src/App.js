import { BrowserRouter,Routes , Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import DogCreation from './components/DogCreation/DogCreation';
import About from './components/About/About';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.Guille}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' exact element={<Home/>} />
        <Route path='/dogs/:id' element={<DogDetail/>}/>
        <Route path='/newDog/' element={<DogCreation/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;