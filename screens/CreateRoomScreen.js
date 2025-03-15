import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useState } from "react";
import { createRoom } from "../util/apiService";

function CreateRoomScreen({navigation}) {
    const [roomName, setRoomName] = useState("");

    function onRoomNameChangeHandler(enteredText) {
        setRoomName(enteredText.trim());
    }

    async function createRoomHandler() {
        if(!roomName.trim()){
            Alert.alert("Error", "Room name cannot be empty");
            return;
        }

        const response = await createRoom(roomName);
        if(response){
            Alert.alert("Success", `Room "${response.name}" created!`);
            navigation.navigate('ChatScreen', {roomName: response.name, roomId: response.id});
        }
        else{
            Alert.alert("Error", "Failed to create room. Please try again.");
        }
    }

    return <View style={styles.container}>
        <Text style={styles.text}>Enter Room Name</Text>
        <Input placeholder="Room Name" value={roomName} onChangeText={onRoomNameChangeHandler}/>
        <Button onPress={createRoomHandler}>Create Room</Button>
    </View>
}

export default CreateRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    }
});