import React, { Component } from 'react'
import { Table } from '@buffetjs/core';
import { withRouter } from 'react-router';





 class table extends Component {
   
  constructor(){
    // @ts-ignore
    super()

    this.state = {
      rows:[],
      
      
    }

}

  componentWillReceiveProps(props){

   

    this.setState({
      rows : props.getData,
      
      

  
     })
   }
  
   
  render() {
   
    const headers = [
      {
        name: 'Id',
        value: 'id',
      },
      {
        name: 'Title',
        value: 'title',
      },
      {
        name: 'Price',
        value: 'price',
      },
      {
        name: 'Status',
        value: 'status',
      },

    ];
    
    const handleClick = (id) => {
      //let history = useHistory();
      // this.state.rows.map(e =>{
        this.props.history.push(`/plugins/Approval/${id}`);

      // })
      
      
    };
    
    
    return (
      
      <Table 
      headers={headers} 
      rows={this.state.rows}
      onClickRow={(e, data) => {
       // console.log(data)
        handleClick(data.id);
        // to=`/plugins/Approval/${rows.i}`
      }}
      
      />
    )
  }
}
export default withRouter(table)
