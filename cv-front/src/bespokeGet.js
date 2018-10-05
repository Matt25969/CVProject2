import React from 'react';


class BespokeGetComp extends React.Component {

    state = {

        target:"http://192.168.99.100:4011/"
       
        };

    changeTarget = () => {

var newTarget = "http://192.168.99.100:4011/"+this.props.name;

this.setState({target:newTarget});

console.log(this.state.target);

console.log(newTarget);

    }

    render(){
      return (
  
  <div>
  <form method="get" action={this.state.target}>
  <button type="submit" onClick={this.changeTarget}>Download CV!</button>
</form>
  </div>);
  
    }
  }
  
  export default BespokeGetComp;