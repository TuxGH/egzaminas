import './index.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Main2 from './Components/website';
import { BrowserRouter as Router, Route , Switch,  } from 'react-router-dom';
import Web from './Mainweb';
import SignupForm from './Components/SignUpForm/SignUpForm';


function App() {
return (
  <Router>
  <div>
 
    <Switch>
      <Route exact path="/">
      <LoginForm/><Main2/>
      </Route>
      <Route exact path="/Web">
      <Web></Web>
      </Route>
      <Route exact path="/Signup">
      <SignupForm/>
      </Route>
   
    <Route exact path="/mainweb">
      <mainweb></mainweb>
      </Route>
      </Switch>
  </div>
  </Router>
);
};
export default App;