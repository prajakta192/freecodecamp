import Login from './pages/Login'
import OrderDashboard from './pages/OrderDashboard'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const isLogin = true;
  return (
    <>
    <Routes>
        <Route path="/" element={ <Login/> } />
        {isLogin && (
          <Route path='/orders' element={<OrderDashboard/>}/>
          )}
    </Routes>
   </>   
  );
}

export default App;
