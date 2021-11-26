import React, { Component } from 'react'
import Table from "./table";
import axios from "axios";
import Wrapper from "./Wrapper";

 class index extends Component {

   constructor(){
     super()
     this.state ={
       data:[]
     }
   }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    axios.get("http://localhost:1337/activities").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <Wrapper>
      <div className="container-c1">
        <div className="header-1">
          <h1>Admin Activity Log</h1>
        </div>
        <Table getData={this.state.data}  />
      </div>
    </Wrapper>
    )
  }
}
export default index
