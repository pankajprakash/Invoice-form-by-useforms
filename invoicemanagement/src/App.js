import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
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
