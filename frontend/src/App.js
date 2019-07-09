import React ,{Component} from 'react';
import Catalogue from './catalogue';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Staff from './AddBook';
import Check from './Checkin';
import Sign from './Sign';
import BaseFile from './Base';
import User from './User';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

 function NavTabs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" >
          <LinkTab label="Home" href="/" />
          <LinkTab label="Catalogue" href="/catalogue" />
          <LinkTab label="Add Book" href="/addbook" />
          <LinkTab label="Circulation" href="/checkin" />
          <LinkTab label="SignIn" href="/signin" />
          <LinkTab label="Base" href="/base" />
          <LinkTab label="User Data" href="/users" />
        </Tabs>
      </AppBar>
    </div>
  );
}


class App extends Component{
//  constructor(props){
  //  super(props);
  //}
  render(){
    return(
      <Router>
        <div>
          <NavTabs />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/catalogue" component={ Catalogue } />
            <Route path="/addbook" component={ Staff } />
            <Route path='/checkin' component={ Check } />
            <Route path="/signin" component={Sign} />
            <Route path='/base' component={BaseFile} />
            <Route path='/users' component={User} />            
            <Route render = { () => <h1>Not found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  };

}
/*
function Navlinks(){
  return(
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Book Club IITK</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/catalogue">Catalogue</Nav.Link>
      </Nav>
      <Nav>
         <Nav.Link href="/checkin">Book status</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/addbook">Add Delete</Nav.Link>


      </Nav>
      <Nav.Link href="/signin">Sign In</Nav.Link><br/>
      <Nav.Link href="#signup">Sign Up</Nav.Link>

    </Navbar.Collapse>
  </Navbar>
  </div>
  );
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
