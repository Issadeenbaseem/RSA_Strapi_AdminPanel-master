import React, { Component } from 'react'

 class updateApproval extends Component { 

  constructor(){
    // @ts-ignore
    super()

    this.state = {
      data:[],
      
      
    }

}



  componentDidMount()
  {
    this.getAll();
  }

  async getAll(){

   axios.get('http://localhost:1337/advertisements/approved/').then(res =>{


      this.setState({
        data:res.data
      })

   })

  }
  render() {
    
    return (
      <div>
        
      </div>
    )
  }
}
export default updateApproval
