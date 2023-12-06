import React from 'react';
import Search from './Search';

import Barchart from './Barchart';
import Joystick from './Joystick';
import Navbar from './Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <div style={{display:'flex',direction:'column',marginTop:'50px'}}>
      <Search />
      <div >
      <Barchart/>
      <Joystick/>
      </div>
      </div>
    </div>
  );
}

export default App;
