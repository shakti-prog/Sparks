import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Album from './Home';
import Pricing from './About';
import AddressForm from './Contact';
import 'antd/dist/antd.css';
import ScrollableTabsButtonForce from './Naviagtion'
import Donate from './Don';


function App() {
  return (
    <div>
      <BrowserRouter>
       <ScrollableTabsButtonForce/>
        <Switch>
          <Route path="/" exact component={Album}/>
          <Route path="/About" exact component={Pricing}/>
          <Route path="/Contact" exact component={AddressForm}/>
          <Route path="/don" exact component={Donate}/>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
