import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Default",
            //   avatar_url: "https://avatar-photo",
            },
        };
        
        // console.log(this.props.name +"child constructor");
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    
        console.log(json);
        // console.log(this.props.name +"Child component did mount");
    }

    componentDidUpdate() {
        // console.log("component is updated");
    }

    componentWillUnmount() {
        // console.log("component will unmounted");
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;

        // console.log(this.props.name +"child render");

        return(
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: vanshi27aug@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;