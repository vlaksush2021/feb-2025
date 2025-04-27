import { Link } from "@reach/router";

const UserProfile = ({ id,children }) => {
    // Mock user data based on the ID
    const userData = {
      1: { name: 'Rama', age: 28 },
      2: { name: 'Krishna', age: 34 }
    };
  
    const user = userData[id] || { name: 'Unknown', age: 'N/A' };
  
    return (
      <div>
        <h2>User Profile: {user.name}</h2>
        <p>Age: {user.age}</p>


        {/* Nested Links */}
        <nav>
          <Link to="details">Details</Link> | 
          <Link to="posts">Posts</Link>
        </nav>

        {/* Nested routes */}
        {children}

        

      </div>
    );
  };
  export default UserProfile;