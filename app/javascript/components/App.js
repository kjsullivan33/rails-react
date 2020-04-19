import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HelloWorld from './HelloWorld'

import store from '../redux/store'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home!"} />
            <Route
              path="/hello"
              render={() => <HelloWorld greeting="Friend" />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
