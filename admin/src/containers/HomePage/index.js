import React, { Component } from "react";
import axios from "axios";
import "./app.css";


export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      count_advertisements: "",
      count_categories: "",
      count_customers: "",
      count_approved: "",
      count_panding: "",
      count_reject: "",
      count_cities:"",
      count_countries:"",
      count_states:""
    };
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    axios.get("http://localhost:1337/advertisements/count/").then((res) => {
      console.log(res);

      this.setState({
        count_advertisements: res.data,
      });
    });
    axios.get("http://localhost:1337/categories/count/").then((res) => {
      console.log(res);

      this.setState({
        count_categories: res.data,
      });
    });
    axios.get("http://localhost:1337/customers/count").then((res) => {
      console.log(res);

      this.setState({
        count_customers: res.data,
      });
    });
    axios
      .get("http://localhost:1337/advertisements/advertisements_reject_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_reject: res.data,
        });
      });
    axios
      .get("http://localhost:1337/advertisements/advertisements_panding_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_panding: res.data,
        });
      });
    axios
      .get("http://localhost:1337/advertisements/advertisements_approved_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_approved: res.data,
        });
      });
      axios
      .get("http://localhost:1337/cities/count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_cities: res.data,
        });
      });
      axios
      .get("http://localhost:1337/cities/count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_countries: res.data,
        });
      });
      axios
      .get("http://localhost:1337/states/count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_states: res.data,
        });
      });
  }

  render() {
    return (











    <div class="main-content">


    <main>
      <div class="cards">
        <div class="card-single">
          <div>
            <h1>{ this.state.count_customers}</h1>
            <span>Customers</span>
          </div>
          <div>
            <span class="fas fa-users"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_advertisements}</h1>
            <span>Advertisements</span>
          </div>
          <div>
            <span class="fas fa-clipboard-list"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_categories}</h1>
            <span>Categories</span>
          </div>
          <div>
            <span class="fas fa-shopping-cart"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_panding}</h1>
            <span>Panding Advertisements </span>
          </div>
          <div>
            <span class="fas fa-info-circle"></span>
          </div>
        </div>
         <div class="card-single">
          <div>
            <h1>{this.state.count_approved}</h1>
            <span>Approved Advertisements </span>
          </div>
          <div>
            <span class="fas fa-check-circle"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_reject}</h1>
            <span>Reject Advertisements </span>
          </div>
          <div>
            <span class="fa fa-ban"></span>
          </div>
        </div>

        <div class="card-single">
          <div>
            <h1>{this.state.count_countries}</h1>
            <span>Number of Countries</span>
          </div>
          <div>
            <span class="fas fa-globe"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_states}</h1>
            <span>Number of States</span>
          </div>
          <div>
            <span class="fas fa-map"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>{this.state.count_cities}</h1>
            <span>Number of Cities</span>
          </div>
          <div>
            <span class="fas fa-map-marker-alt"></span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1></h1>
            <span> </span>
          </div>
          <div>

          </div>
        </div>

      </div>



    </main>
  </div>




    );
  }
}
 {/* <p>
            Advertisements Count :{this.state.count_advertisements} <br />
          </p>

          <p>
            Customers Count : {this.state.count_customers}
            <br />{" "}
          </p>
          <br />
          <p>
            Category Count : {this.state.count_categories}
            <br />{" "}
          </p>
          <br />
          <p>
            Panding Count : {this.state.count_panding} <br />
          </p>
          <br />
          <p>
            Approved Count : {this.state.count_approved}
            <br />
          </p>
          <br />
          <p>
            Reject Count : {this.state.count_reject}
            <br />{" "}
          </p>
          <br /> */}
