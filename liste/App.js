import React from 'react';
import {SafeAreaView, FlatList, View, Text } from 'react-native';
import List from './components/List';

class App extends React.Component {

  

  render() {
    console.log("App test countries", this.props.country);
    console.log("App test countries", this.props.country);

    return (
      <>
      <List/>
      </>
    );
  }
}

export default App;