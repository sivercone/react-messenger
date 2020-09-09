import React from 'react';
import { Sidebar } from './index';

function Dashboard({ id }) {
   return (
      <div className="dashboard d-flex">
         <Sidebar id={id} />
      </div>
   );
}

export default Dashboard;
