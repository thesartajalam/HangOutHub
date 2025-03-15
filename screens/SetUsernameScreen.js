import {StyleSheet, Text, View, TextInput, Alert, ActivityIndicator } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useContext, useState } from "react";
import { setUsername } from "../util/apiService";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { UserContext } from "../store/user-context";
import LoadingOverlay from "../components/UI/LoadingOverlay";



function SetUsernameScreen({navigation}) {
    const [username, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const UserNameContext =  useContext(UserContext);

    function usernameChangeHandler(enteredText){
        setUserName(enteredText.trim());
        // UserNameContext.setUserName(enteredText.trim());
    } 

    async function usernameHandler(){
        if(!username.trim()){
            Alert.alert("Error", "Username cannot be empty");
            return;
        }

        setIsLoading(true);

        const response = await setUsername(username);

        setIsLoading(false);
        if(response){
            // Storing both Username and UserId in context
            UserNameContext.setUserData({username: response.username, id: response.id, timeStamp: response.created_at});

            Alert.alert("Success", `Welcome, ${response.username}!`);
            setUserName("");
            navigation.navigate('RoomsScreen');
        }
        else{
            Alert.alert("Error", "Failed to set Username, Please try again.");
        }
    }

    if(isLoading){
      return <LoadingOverlay />
    }

  return (
    <View style={styles.container}>
      {/* {isLoading ? (
        <ActivityIndicator size="large" color={GlobalStyles.colors.deepCoffee}/>
      ) : ( */}
        {/* <> */}
        <Text style={styles.heading}>Enter Username</Text>
        {/* <TextInput style={styles.input} placeholder="Enter your Username" placeholderTextColor="#A0522D" value={username} onChangeText={usernameChangeHandler}/> */}
        <Input placeholder="Enter your Username" value={username} onChangeText={usernameChangeHandler}/>
        {/* <Button title="Continue" onPress={usernameHandler}/> */}
        <Button onPress={usernameHandler}>Continue</Button>
        {/* </> */}
      {/* ) */}
      {/* } */}
    </View>
  );
}

export default SetUsernameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: GlobalStyles.colors.deepCoffee,
  },
});
