

import Header from "./component/head/Header";
import Home from "./component/home/Home";
import Footer from "./component/footer/Footer";
import SingleProduct from "./component/singleProduct/SingleProduct";
import Error from "./component/errorPage/Error";
import Cart from './component/cart/Cart';
import Register from "./component/accounts/Register";
import Login from './component/accounts/Login';
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./dashboard/Dashboard";

function App() {
 
  return (
    <div className='main'>
      <Header/>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route  path='/product/:productId' component={SingleProduct}/>
       <Route  path='/cart' component={Cart}/>
       <Route  path='/customer/account/create' component={Register}/>
       <Route  path='/customer/account/login' component={Login}/>
       <ProtectedRoute path='/user/dashboard/' component={Dashboard}/>
       <Route path='*' component={Error}/>
     
     </Switch>
      <Footer/>
    </div>
  );
}

export default App;
