import User from './User'
import UserClass from './UserClass';
import React, { Component } from 'react';

class About extends React.Component {
    constructor(){
        super()
        console.log("parent-constaor")
    }
    componentDidMount(){
        console.log("this parend-componentdidmount")
    }
    
    render(){
        console.log("this parent render")
        return(
            <div>
                <h1>this about page</h1>
                
                <UserClass name={"nanikadiveti-from class"} email={"nanikadiveti@gmail.com"} />
            </div>
        )


    }
    
}

export default About;