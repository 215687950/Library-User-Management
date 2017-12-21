import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import UserAddPage from './pages/UserAdd';
import UserListPage from './pages/UserList';


ReactDOM.render((
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/add" component={UserAddPage}/>
        <Route path={"/user/list"} component={UserListPage}/>
      </Switch>
    </Router>
), document.getElementById('app'));