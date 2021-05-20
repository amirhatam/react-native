import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const Item = ({ country, capital, flag,region,population,area,languages }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={{ uri: flag }} />
    <Text style={styles.title}>Country: {country} </Text>
    <Text style={styles.title}>Capital: {capital} </Text>
    <Text style={styles.title}>Region: {region} </Text>
    <Text style={styles.title}>Population: {population} </Text>
    <Text style={styles.title}>Area: {area} </Text>
    <Text style={styles.title}>Languages: {languages} </Text>
  </View>
);

const renderItem = ({ item }) => [
  <Item 
  country={item.name} 
  capital={item.capital} 
  flag={item.flag} 
  region={item.region}
  population={item.population}
  area={item.area}
  languages={item.languages[0].name}
  />,
];
class Pays extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Pays data :", data);
        // const flagMap = data.map((elem) => {
        // });

        this.setState({
          countries: data,
        });
      });
  }
  
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    textAlign: "center",
    backgroundColor: "#6c93ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft:"auto",
    marginRight:"auto",
    width:"80%",
    borderRadius:"1%"
  },
  title: {
    fontSize: 32,
  },
  img: {
    margin:"auto",
    width: "40vmax",
    height: 300,
    resizeMode: "center",
  },
});

export default Pays;
