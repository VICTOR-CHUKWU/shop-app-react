import React from 'react';
import { withRouter } from 'react-router-dom';
import DashNav from './DashNav'
import DashSideBar from './DashSideBar';

const Dashboard = () => {
    return (
        <section>
          <DashNav/> 
          <DashSideBar/> 
        </section>
    )
}

export default withRouter(Dashboard)
