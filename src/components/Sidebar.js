import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
    render() {
        return (
            <aside className="app_sidebar">
            </aside>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeUser: state.reducer.users
    }
}

export default connect(mapStateToProps)(Sidebar);