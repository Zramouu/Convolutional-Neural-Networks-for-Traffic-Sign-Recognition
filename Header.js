import React from 'react';
// import headerImage from './Headerimage.png';

const Header = () => {
  const headerStyle = {
    // backgroundImage: `url(${headerImage})`, 
    backgroundColor: '#466474', 
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1>Traffic Sign Recognition</h1>
    </header>
  );
};

export default Header;
