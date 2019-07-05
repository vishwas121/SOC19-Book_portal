import React ,{Component} from 'react';
import Catalogue from './catalogue';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Staff from './AddBook';

class App extends Component{
//  constructor(props){
  //  super(props);
  //}
  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/catalogue" component={ Catalogue } />
            <Route path="/addbook" component={ Staff } />
            <Route render = { () => <h1>Not found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  };

}
/*
const Home = (props) => (
  <div>
    <h1>This will be the homepage.</h1>
    {console.log(props)}
    <NavLink to="/catalogue"> Catalogue</NavLink>
  </div>
);*/

export default App;
