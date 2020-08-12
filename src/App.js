import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboardpage from './pages/Dashboardpage';
import PostsPage from './pages/PostsPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component= {Dashboardpage} />
        <Route exact path = "/posts" component= {PostsPage} />
        <Redirect to = "/" />
      </Switch>
      </Router>
  );
}
export default App;