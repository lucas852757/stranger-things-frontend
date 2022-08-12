import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer>{process.env.REACT_APP_ENVIROMENT}</footer>;
  }
}

export default Footer;
