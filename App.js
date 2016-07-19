import React from 'react';
import MDSearchBox from './src/MDSearchBox.jsx';
import styles from './App.css';
import 'font-awesome/css/font-awesome.css';

const App = () => (
  <div className={styles.container}>
    <MDSearchBox
      onChange={(text) => { console.log(`changed to ${text}`); }}
    />
  </div>
);

export default App;
