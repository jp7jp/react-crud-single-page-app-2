import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions'

class UserShow extends Component {

  componentWillUpdate(nextProps) {
    if (!this.props.user || this.props.user._id !== nextProps.match.params.id) {
      this.props.getUser(nextProps.match.params.id);
    }
  }

  componentWillMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>UserShow - ID: {this.props.match.params.id}</h3>
        Email: {this.props.user.email}<br/>
        Password: {this.props.user.password}<br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { getUser })(UserShow);
