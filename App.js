import React from 'react';
import MDSearchBox from './src/MDSearchBox.jsx';
import styles from './App.css';
import 'font-awesome/css/font-awesome.css';

const App = () => (
  <div className={styles.container}>
    <MDSearchBox
      onChange={(text) => { console.log(`changed to ${text}`); }}
      width={300}
      height={42}
    />
  </div>
);

export default App;
