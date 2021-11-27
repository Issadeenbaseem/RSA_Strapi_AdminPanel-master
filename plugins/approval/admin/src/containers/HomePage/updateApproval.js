import React, { Component } from 'react'

const api = axios.create({
  baseURL:`http://localhost:1337`
})

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

   api.get('/advertisements/approved/').then(res =>{


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
