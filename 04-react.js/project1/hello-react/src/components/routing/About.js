import { navigate } from '@reach/router'
import React from 'react'

export default function About() {
    return (
        <div><h3>About Us</h3>

            <button onClick={() => navigate('/')}>goto home</button>
        </div>
    )
}


//// react router 
// import React from 'react';
// import { withRouter } from 'react-router-dom';

// function About({ history }) {
//   return (
//     <div>
//       <h3>About Us</h3>
//       <button onClick={() => history.push('/')}>Go to Home</button>
//     </div>
//   );
// }

// export default withRouter(About);
