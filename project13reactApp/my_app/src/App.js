import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {
  render() {

    return (
      <div className="App">
        <div>age: {this.props.age}</div>
        <button onClick={this.props.ageUp}>age_up</button>
        <button onClick={this.props.ageDown}>age_down</button>
    </div>
    )
  }
}


const mapStateToProps = (state) => 
  ({age: state.age});


const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({type: "AGE_UP"}
    ),
    ageDown: () => dispatch({type: "AGE_DOWN"})
}};



export default connect(mapStateToProps, mapDispatchToProps)(App);
