import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("cheld-component-constructor")

    }
    componentDidMount(){
        console.log("child-componentdidmount")
    }
    

    render(){
        const{name,email}=this.props;
        console.log("child-component-render")
        return(
            <div>
                <h1>{name}</h1>
                <h4>{email}</h4>
            </div>
        )
    }
    
}
export default UserClass;