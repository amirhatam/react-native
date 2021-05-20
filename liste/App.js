import React from 'react';
import {SafeAreaView, FlatList, View, Text } from 'react-native';
import List from './components/List';
import Pays from './components/Pays';

class App extends React.Component {

  

  render() {
    

    return (
      <>
      <Pays/>
      {/* <List/> */}
      </>
    );
  }
}

export default App;