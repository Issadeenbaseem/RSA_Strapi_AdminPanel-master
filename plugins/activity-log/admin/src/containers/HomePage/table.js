import React, { Component } from "react";
import { Table } from "@buffetjs/core";
import { withRouter } from "react-router";
import "reactjs-popup/dist/index.css";

class table extends Component {
  constructor() {
    // @ts-ignore
    super();

    this.state = {
      rows: [],
    };
  }

  componentWillReceiveProps(props) {
    console.log(props.getData);

    this.setState({
      rows: props.getData,
      // admin :props.getData.updated_by.firstname
    });
  }

  render() {
    
    const headers = [
      {
        name: "ID",
        value: "id",
      },
      {
        name: "ContentType",
        value: "contentType",
      },
      {
        name: "Action",
        value: "action",
      },
      {
        name: "Updated Date",
        value: "published_at",
      },
    ];
    const handleClick = (id) => {
      //let history = useHistory();
      // this.state.rows.map(e =>{
        this.props.history.push(`/plugins/ActivityLog/${id}`);

      // })
      
      
    };

    
    return (
      <div>
        <Table
          
          headers={headers}
          rows={this.state.rows}
          onClickRow={(e, data) => {
            // console.log(data)
             handleClick(data.id);
             // to=`/plugins/Approval/${rows.i}`
           }}
        />
        
      </div>
    );
  }
}
export default withRouter(table);
