import React from 'react';
import MDSearchBox from './src/MDSearchBox.jsx';

const App = () => (
  <div>
    <MDSearchBox
      onChange={(text) => { console.log(`changed to ${text}`); }}
    />
  </div>
);

export default App;
