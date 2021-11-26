
import React, { Component } from 'react'
import { Button } from '@buffetjs/core';


 class form extends Component {

  constructor(){
    // @ts-ignore
    super()

    this.state = {
      
      status:''
    }

}
 inforchange = even =>{

  const {name,value} = even.target

  this.setState({
      [name]:value

  })

}

 infosubmit = () =>{


  // let data = {
  //   id:this.state.id,
  //   status:this.state.status
  // }
  // this.props.myData(data)

 }

 componentWillReceiveProps(props){

   this.setState({
    id : props.setForm.id,
    status : props.setForm.status

   })
 

 }


  render() {
    return (
      <div>

     <form onSubmit = {this.infosubmit}>
     <div className="form-group">
      <label >Curret Staus:</label>
      <input type="text"  className="form-control"

      name = "status"
      onChange={this.inforchange}
      value ={this.state.status}

      />

     </div>

     <Button  name="enumeration"  type="submit" className="btn btn-primary">Submit</Button>
     </form>


      </div>
    )
  }
}
export default form
