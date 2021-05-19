import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";

export default class List extends Component {
  state = {
    country: [],
  };

  componentDidMount() {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        const flagMap = data.map((elem) => {
          return (
            <>
              <Image source={{ uri: elem.flag }} style={styles.images} />
              <Text style={styles.title}>
                Country : {elem.name}
                <br /> <br />
                Capital : {elem.capital}
              </Text>
            </>
          );
        });

        this.setState({
          country: flagMap,
        });
      });
  }
  

  render() {
    return (
      <>
       {this.state.country}
      </>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    display: "block",
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  images: {
    display: "block",
    width: "300px",
    height: "200px",
    margin: "auto",
    resizeMode: "center",
    marginTop: 50,
  },
});
