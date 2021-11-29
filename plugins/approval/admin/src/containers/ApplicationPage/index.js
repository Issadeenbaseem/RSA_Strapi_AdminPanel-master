import React, { Component } from "react";
import axios from "axios";
import { InputText } from "@buffetjs/core";
//import { Button } from "@buffetjs/core";
import Wrapper from "./Wrapper";
import "./app.css";
import { ListGroup } from "react-bootstrap";
//import Carousel from "react-bootstrap/Carousel";
//import Lightbox from "react-lightbox-component";
// import 'react-lightbox-component/build/css/index.css';
//import { SRLWrapper,SimpleReactLightbox } from "simple-react-lightbox";
import Gallery from "react-grid-gallery";
//import "bootstrap/dist/css/bootstrap.min.css";


// const api = axios.create({
//   baseURL:`http://localhost:1337`
// })

class index extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      status: "",
      description: "",
      images: [],
      city: "",
      customer: '',
      date: "",
      price: "",
      title: "",
      isClick : false,
      approved_date:""
    };
  }

  componentDidMount() {
    this.getId()
   
    
    
  }
  

  async getId() {
    await axios
      .get(
        `/advertisements/approved/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          id: res.data.id,
          status: res.data.status,
          description: res.data.description,
          images: res.data.advertisement_pictures,
          city: res.data.city.name,
          price:res.data.price,
          date: res.data.created_at,
          price: res.data.price,
          title: res.data.title,
          customer: res.data.customer.first_name
        
          //price:res.date.price
        });

        console.log(res);

        //console.log(res.data.status)
      });
  }

  infoApproved = () => {
    let data = {
      id: this.state.id,
      status: "Approved",
      approved_date: new Date().toISOString()
     }

     axios.put(`/Approval/${data.id}`, data).then((res) => {
      // this.getAll();
      // console.log(res);
    });
    strapi.notification.toggle({
      type: "success",
      message: { id: "Satus officially Agreed " },
    });

    this.setState({
      isClick :true,
      
    })
    // strapi.notification.success('app.notification.success');
  };
  infoReject = () => {
    let data = {
      id: this.state.id,
      status: "Reject",
    };

    axios.put(`/Approval/${data.id}`, data).then((res) => {
      // this.getAll();
      console.log(res);
    });
    strapi.notification.toggle({
      type: "success",
      message: { id: "Satus officially Reject" },
    });

    this.setState({
      isClick :true
    })
  };
  inforchange = (even) => {
    const { name, value } = even.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (

        <div className="container-c1">
          <div className="row">
            <div className="col-sm-6 header-title">
              <div className="d1">
                <h1>Approval Page </h1>
              </div>
             
            </div>
            <div class="col-sm-6 justify-content-end">
              <div class="d-flex justify-content-end">
                <button
                  
                  type="button"
                  
                  onClick={this.infoApproved}
                  disabled={this.state.isClick}
                  className={this.state.isClick ? "button-22" : " button-11"}

                  
                >
                  Approve
                </button>
                <button
                  
                  className={this.state.isClick ? "button-22" : " button-2"}
                  
                  type="button"
                  
                  onClick={this.infoReject}
                  disabled ={this.state.isClick}

                  
                >
                  Reject
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h3 className="header-1">Details</h3>
              <div className="container-c2">
                <div>
                <p>
                    {" "}
                    <b>Customer Name :</b> {this.state.customer} <br /><br />
                  </p>

                  <p>
                    {" "}
                    <b>Created Date :</b> {this.state.date}<br /><br />
                  </p>

                  <p>
                    {" "}
                    <b>City :</b> {this.state.city}<br /><br />
                  </p>

                  <p>
                    <b>Description :</b> {this.state.description}<br /><br />
                  </p>

                  <p>
                    {" "}
                    <b>Price :</b> {this.state.price}<br /><br />
                  </p>
                </div>
              
              </div>
            </div>

            <div className="col-6">
              <h3 className="header-1">Advertisement Pictures</h3>
              <div>
                <Gallery
                  className="container-c4"
                  images={this.state.images.map((e) => {
                    return {
                      src: e.image.url,
                      thumbnail: e.image.formats.thumbnail.url,
                    };
                  })}
                />
              </div>
            </div>
          </div>
          <div className="sizeBox"></div>

          <div className="container-c1"></div>
        </div>
      
    );
  }
}
export default index;
