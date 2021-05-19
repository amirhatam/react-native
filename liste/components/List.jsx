import React, { Component } from "react";
import { SafeAreaView, FlatList, View, Text, Image } from "react-native";

export default class List extends Component {
  state = {
    country: [],
    flag: "",
  };

  componentDidMount() {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("data Country in componentDidMount", data);
        const flagMap = data.map((elem) => {
          return  <img src={elem.flag} />
        });
        const ctyMap = data.map((elem) => {
          return <Text>{elem.country} </Text>
        });
        console.log("test");
        console.log("Home data country in componentDidMount", testMap);

        this.setState({
          country: ctyMap,
          flag: flagMap,
        });
      });
  }

  render() {
    //   console.log("List test state",this.state.country);
    return (
      <View>
        
       
        
      </View>
    );
  }
}
