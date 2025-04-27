const UserProfile = ({ id }) => {
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
      </div>
    );
  };
  export default UserProfile;