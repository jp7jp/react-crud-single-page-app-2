import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions';

class UserIndex extends Component {

  componentWillMount() {
    this.props.getAllUsers();
  }

  usersList() {
    return this.props.users.map(user => (
      <li key={user._id}><Link to={`/users/${user._id}`}>{user.email}</Link></li>
    ));
  }

  render() {
    return (
      <div>
        <h3>UserIndex</h3>
        <ul>
          {this.usersList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all
  }
}

export default connect(mapStateToProps, { getAllUsers })(UserIndex);
