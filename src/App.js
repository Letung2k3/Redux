import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './action/actions'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div>Count: {props.count}</div>

          <button onClick={() => props.increaseCounter()}>Increase Count</button>
          <br />
          <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
