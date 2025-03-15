import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Room({ room, onPress }) {
  // function onPressHandler() {
  //   onPress(room.id);
  // }

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{room.name}</Text>
      {/* <Text style={styles.text}>{room.id}</Text> just for debugging purpose */}
    </Pressable>
  );
}

export default Room;

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    // marginVertical: 5,
    // backgroundColor: "#ddd",
    // // backgroundColor: GlobalStyles.colors.creamBackground,
    // borderRadius: 5
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 6,
    backgroundColor: GlobalStyles.colors.sunsetBlush, // Sunset  Blush
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
