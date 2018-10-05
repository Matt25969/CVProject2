import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class UploadSection extends Component {
state = {

getTarget:"http://192.168.99.100:4011/",
temp:1,
firstState : "",
lastState : ""
}

  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;

    fetch("http://192.168.99.100:4011/"+first+"/"+last, {
      method: 'POST',
      body: data,
    });
  }


  handleGet(){
    var last = document.getElementById("lastName").value;
    this.state.getTarget = "http://192.168.99.100:4011/"+last;
  }

  handleUpload(){
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    this.setState({firstState:first});
    this.setState({lastState:last});
    this.setState({changeSocks:true})
    console.log(this.state.first);
  }

  
  render() {
    return (

      <div>
        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <input id = "firstName"/>
        <p>FirstName</p>
        <input id = "lastName" onChange={this.handleGet}/>
        <p>LastName</p>
		
				<input type="file" name="file" />
        <br/>   
				<input type="submit" value="Upload" onClick = {this.handleUpload}/>	
		</form>
     </div>
    );
  }
}

export default UploadSection;;
