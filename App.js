import React from 'react';
import MDSearchBox from './src/MDSearchBox.jsx';

const App = () => (
  <div>
    <MDSearchBox
      onChange={(text) => { console.log(`changed to ${text}`); }}
      width={300}
      height={42}
    />
  </div>
);

export default App;
