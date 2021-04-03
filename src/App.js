import logo from './logo.svg';
import './App.css';
import Navigation from './Navigationbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Welcome from './Welcome';
import Submitteachersdata from './Submitteachersdata';
import {Container,Row,Jumbotron,Button,Col } from 'react-bootstrap';
import UpdateComponent from './UpdateComponent';
import teacher_teaches from './teacher_teaches';
import register_student from './register_student';
import allattendance from './allattendance';
function App() {
  return (
    
    <Router>

    <Navigation/>
   

    <Switch>
      <Route path="/welcome" exact component={Welcome}  ></Route>
      <Route path="/add" exact component={Submitteachersdata}  ></Route>
      <Route path="/attendance" exact component={UpdateComponent}  ></Route>
      <Route path="/teacher_teaches" exact component={teacher_teaches}  ></Route>
      <Route path="/register_student" exact component={register_student}  ></Route>
      <Route path="/get_attendacne" exact component={allattendance}  ></Route>

      </Switch>
    </Router>
  )
}

export default App;
