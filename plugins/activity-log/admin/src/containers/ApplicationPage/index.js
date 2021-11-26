import React, { Component } from 'react'
import axios from "axios";
import "./app.css";
import ReactJson from 'react-json-view'
import Wrapper from "./Wrapper";


 class index extends Component {
  constructor() {
    super();

    this.state = {
      content:[]
    };
  }
   componentDidMount() {
    this.getId()
   
    
    
  }
  

  async getId() {
    await axios
      .get(
        `http://localhost:1337/activities/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          
          content: res.data.content,
        
        
          //price:res.date.price
        });

        console.log(res);

      
      });
  }


  render() {
    return (

     
       <Wrapper>
       <div className="container-c1">
         <div className="header-1">
           <h1>Admin Activity History</h1>
         </div>
         <ReactJson src={this.state.content} />
       </div>
     </Wrapper>
      
    )
  }
}
export default index
