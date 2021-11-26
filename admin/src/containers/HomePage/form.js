
import React, { Component } from 'react'

export default class form extends Component {

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

 }

 componentWillReceiveProps(props){

   this.setState({

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

     <button type="submit">Submit</button>
     </form>


      </div>
    )
  }
}
