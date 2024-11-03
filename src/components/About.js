import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props){
    super(props);

    // console.log("parent constructor");

  }

 componentDidMount(){
    // console.log("Parent component did mount");
 }

   render() {
    // console.log("parent render");
    return (
      <div>
          <h1>About</h1>
          <div>
            LoggedIn User
            <UserContext.Consumer>
              {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </div>

          <h2>This my namaste react series</h2>
          {/* <User name={"Vanshi Srivas (function)"}/> */}
          <UserClass name={"first"} location={"Varanasi class"} />
  
      </div>
    );
  };
} 


 

export default About;