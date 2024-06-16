import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import "./styles/app.scss";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App