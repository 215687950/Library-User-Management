import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import UserAddPage from './pages/UserAdd';
import UserListPage from './pages/UserList';
import UserEditPage from './pages/UserEdit';


ReactDOM.render((
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/add" component={UserAddPage}/>
        <Route path="/user/list" component={UserListPage}/>
        <Route path="/user/edit/:id" component={UserEditPage}/>
      </Switch>
    </Router>
), document.getElementById('app'));