import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import UserAddPage from './pages/UserAdd';
import UserListPage from './pages/UserList';
import UserEditPage from './pages/UserEdit';
import BookListPage from './pages/BookList';
import BookEditPage from './pages/BookEdit';
import BookAddPage from './pages/BookAdd';
import LoginPage from './pages/Login';


ReactDOM.render((
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/user/add" component={UserAddPage}/>
        <Route path="/user/list" component={UserListPage}/>
        <Route path="/user/edit/:id" component={UserEditPage}/>
        <Route path="/book/list" component={BookListPage}></Route>
        <Route path="/book/edit/:id" component={BookEditPage}></Route>
        <Route path="/book/add" component={BookAddPage}></Route>
      </Switch>
    </Router>
), document.getElementById('app'));