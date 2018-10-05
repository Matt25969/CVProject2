import React from 'react';


class BespokeGetComp extends React.Component {

    state = {

        target:`http://${process.env.BACKEND_URL}/`
       
        };

    changeTarget = () => {

var newTarget = `http://${process.env.BACKEND_URL}/`+this.props.name;

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