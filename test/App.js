import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  Alert,
  ActivityIndicator,
  Pressable,
} from "react-native";

export default function App() {
  // const [timesPressed, setTimesPressed] = useState(0);

  // let textLog = "";
  // if (timesPressed > 1) {
  //   textLog = timesPressed + "x onPress";
  // } else if (timesPressed > 0) {
  //   textLog = "onPress";
  // }

  const [indicator, setIndicator] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeoutID, setTimeoutID] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  function delayedAlert() {
    const timeoutID = window.setTimeout(
      window.alert,
      1000,
      "That was really slow!"
    );
  }
console.log("test");
console.log("test");
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewChild}>
        <Text style={styles.text1}>Chez Konexio</Text>
        <Text style={styles.text1}>Formation</Text>
        <Text style={styles.text1}>DigiTous</Text>
        {/* <StatusBar style="auto" /> */}
        <Image source={require("./assets/konexio.png")} style={styles.images} />
        <Image
          source={{
            uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
          style={styles.images}
        />
        {/* <View style={styles.containerButton}>
          <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "#2196f3",
              },
              styles.wrapperCustom,
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.text}>
                {pressed ? "Pressed!" : "Press Me"}
              </Text>
            )}
          </Pressable>
          <View style={styles.logBox}>
            <Text testID="pressable_press_console">{textLog}</Text>
          </View>
        </View> */}



        <View style={styles.buttonClass}>
          {loading ? (
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={loading}
              //Text with the Spinner
              textContent={"Loading..."}
              //Text style of the Spinner Text
              textStyle={styles.spinnerTextStyle}
            />
          ) : (
            <>
              <Button
                title="Click me !"
                onPress={() => {
                  setIndicator(startLoading);
                  delayedAlert();
                }}
              ></Button>
            </>
          )}
        </View>

        {/* <View>
          <Button
            title="Click Me"
            onPress={() => {
              setIndicator(!indicator);
              alert("You tapped the button!");
            }}
          />
          <ActivityIndicator size="large" color="blue" animating={indicator} />
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00DFFF",
  },
  viewChild: {
    marginTop: 80,
    backgroundColor: "white",
    width: 400,
    margin: "auto",
    borderRadius: "6%",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: "15px",
  },
  images: {
    width: "300px",
    height: "100px",
    margin: "auto",
    resizeMode: "center",
  },
  button: {
    margin: 20,
  },
  containerButton: {
    textAlign: "center",
  },
  wrapperCustom: {
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "140px",
    marginRight: "140px",
    padding: "10px",
    borderRadius: "6%",
    cursor: "pointer",
  },
  buttonClass: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: "140px",
    marginRight: "140px",
  },
});
