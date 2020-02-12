import React, { Component } from 'react'
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
          <h1>his age: {this.props.age}</h1>
          <button onClick={this.props.ageUp}>age up</button>
          <button onClick={this.props.ageDown}>age down</button>
          <hr/>
          <div>History</div>
          <ul>
            {this.props.history.map((ele)=>(
              <li key={Math.random()}>{ele}</li>
            )    
            )}
          </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { age: state.age, history: state.history}
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageUp: () => dispatch({ type: 'AGE_UP', value: 1}),
    ageDown: () => dispatch({ type: 'AGE_DOWN', value: 1}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);