import React, { Component } from 'react'

export default class table extends Component {
  render() {
    return (
    <div>
      <table className="table table-striped table-light">
  <thead>
    <tr>

      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>


{

        this.props.getData.map(e =>{
          console.log(e)

           return(
             <tr>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.status}</td>

                <td> <button className= 'btn btn-primary'

                 onClick = {() => {
                   this.props.setData(e)
                 }}

                > Edit</button></td>
             </tr>
           )

        })


}








  </tbody>
</table>
    </div>
    )
  }
}
