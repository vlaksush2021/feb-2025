import { Link, Router } from "@reach/router";
import Home from "./Home";
import UserProfile from "./UserProfile";

export default function RouterApp() {
    
    return (
        <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/user/1">User 1 Profile</Link> | 
          <Link to="/user/2">User 2 Profile</Link>
        </nav>
        <Router>
          <Home path="/" />
          <UserProfile path="/user/:id" />
        </Router>
      </div>
    )
}
