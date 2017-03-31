import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import UserIndex from '../components/users'
import UserBlank from '../components/users/blank.js'
import UserNew from '../components/users/new.js'
import UserShow from '../components/users/show.js'
import UserEdit from '../components/users/edit.js'
import UserDelete from '../components/users/delete.js'

const Routes = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Route exact path="/" render={() => <Redirect to="/users" />} />
        <Route path="/users" component={UserIndex} />
      </div>
      <div className="col-md-8">
        <Switch>
          <Route exact path="/users" component={UserBlank} />
          <Route exact path="/users/new" component={UserNew} />
          <Route exact path="/users/:id" component={UserShow} />
          <Route exact path="/users/:id/edit" component={UserEdit} />
          <Route exact path="/users/:id/delete" component={UserDelete} />
        </Switch>
      </div>
    </div>
  );
}

export default Routes;
