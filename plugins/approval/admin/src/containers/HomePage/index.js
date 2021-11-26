import React, { Component } from "react";
import axios from "axios";
//import Form from './form'
import Table from "./table";
import Wrapper from "./Wrapper";

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      editData: [],
    };
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    axios.get("http://localhost:1337/advertisements/approved/").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  update = (data) => {
    //  this.setState({
    //   editData:data
    //  })
  };

  create = (data) => {
    axios.put(`http://localhost:1337/Approval/${data.id}`, data).then((res) => {
      this.getAll();
    });
    console.log(data);
  };

  render() {
    return (
      <Wrapper>
        <div className="container-c1">
          <div className="header-1">
            <h1>Pending Items List</h1>
          </div>
          <Table getData={this.state.data} setData={this.update} />
        </div>
      </Wrapper>
    );
  }
}
