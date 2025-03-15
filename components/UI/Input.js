import { StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0522D"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "80%",
    borderColor: GlobalStyles.colors.deepCoffee,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: GlobalStyles.colors.softPeach,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // For Android shadow
    marginBottom: 20,
  },
});
