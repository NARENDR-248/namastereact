import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:{
                login:"nani",
                email:"nani@gmailcom",
                avatar_url:"jdsdsc",


            }
        }

    }
    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/NARENDR-248");
        const json=await data.json();
        console.log(json)
        this.setState({
            userinfo:json
        })


        
    }
    

    render(){
        
        console.log("child-component-render")
        console.log(name)
        return(
            <div>
                <h1>{this.state.userinfo.login}</h1>
                <h4>{this.state.userinfo.email}</h4>
            </div>
        )
    }
    
}
export default UserClass;