import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import ComapnyReg from './Auth/CompanyRegistration/CompanyReg'
import UserRegistration from './Auth/UserRegistration/UserRegistration'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Result from './Components/Result'


function App() {
  return (
    <div className="App">

      {/* <UserReg /> */}
      
      <UserRegistration />
      <ComapnyReg />

      
      <Form />

      <Router>
        <Switch>
          <Route exact path="/Result" component={Result}  />
           

        </Switch>
      </Router>
    

   
    </div>
  );
}

export default App;
