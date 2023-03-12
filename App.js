import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
// import Bluetooth from "./Bluetooth";

const App = () => {
  const [connected, setConnected] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onPressButton = async (value) => {
    console.log(value);
    // try {
    //   await Bluetooth.connect();
    //   await Bluetooth.writeValue(value);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.container}>
          <View style={styles.direction}>
            <View style={styles.rotate}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonUp} onPress={() => onPressButton(1)}>
                  <Text style={styles.buttonText}>↑</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonLeft} onPress={() => onPressButton(2)}>
                  <Text style={styles.buttonText}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight} onPress={() => onPressButton(3)}>
                  <Text style={styles.buttonText}>→</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonDown} onPress={() => onPressButton(4)}>
                  <Text style={styles.buttonText}>↓</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.middle}>
            <View style={styles.rotate}>
              <View style={styles.row}>
                <Text style={styles.title}>Little Boy</Text>
              </View>
              <View style={styles.row}>
                <Switch
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttons}>
            <View style={styles.rotate}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonB} onPress={() => onPressButton('B')}>
                  <Text style={styles.buttonText}>B</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonA} onPress={() => onPressButton('A')}>
                  <Text style={styles.buttonText}>A</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#afaebc"
  },
  row: {
    flexDirection: "row",
  },
  direction: {
    flexDirection: "row",
    width: "100%",
    height: "42%",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    height: "38%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonB: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#604886",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 80,
  },
  buttonA: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#604886",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginRight: 80,
  },
  buttonUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    backgroundColor: "#5c5c61",
  },
  buttonDown: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5c5c61",
  },
  buttonLeft: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginRight: 60,
    backgroundColor: "#5c5c61",
  },
  buttonRight: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#5c5c61",
  },
  buttonText: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: -80,
    color: "#747382"
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
  },
  switch: {
    marginTop: 190,
  },
});