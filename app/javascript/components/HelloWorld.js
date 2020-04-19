import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getThings } from '../redux/actions'

const HelloWorld = ({ things, dispatch, ...props }) => {
    console.log(things);
    return (
      <React.Fragment>
        Greeting: {props.greeting}
        <button onClick={() => dispatch(getThings())}>Get Things</button>
        <ul>{things && things.length && things.map(item =>
          <li key={item.guid}>{item.name}: {item.guid}</li>)}</ul>
      </React.Fragment>
    );
  
}

const mapStateToProps = state => {
  const { things } = state;
  return { things };
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default connect(mapStateToProps)(HelloWorld)
