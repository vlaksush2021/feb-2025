import { navigate } from '@reach/router'
import React from 'react'

export default function Contact() {
  return (
    <div><h3>Contact Page</h3>
        <button onClick={() => navigate('/')}>goto home</button>
    
    </div>
  )
}


// //react router
// import React from 'react';
// import { withRouter } from 'react-router-dom';

// function Contact({ history }) {
//   return (
//     <div>
//       <h3>About Us</h3>
//       <button onClick={() => history.push('/')}>Go to Home</button>
//     </div>
//   );
// }

// export default withRouter(Contact);
