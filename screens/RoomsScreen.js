import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { getRooms } from "../util/apiService";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Room from "../components/Room";
import Button from "../components/UI/Button";
import { UserContext } from "../store/user-context";

function RoomsScreen({navigation}) {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const RoomContext = useContext(UserContext);

    useEffect(() => {
        async function fetchRooms(){
            setLoading(true);
            const response = await getRooms();
            if(response.length > 0){
                setRooms(response);
            }
            else{
                Alert.alert("No rooms", "No rooms are available. Try creating one!!");
            }
            setLoading(false);
        }

        fetchRooms();
    }, []);

    function navigateToChat(roomName, roomId){
        RoomContext.setRoomId(roomId);
        // console.log(roomName); // for debugging purpose
        navigation.navigate('ChatScreen', {roomName:  roomName, roomId : roomId});
    }

    function navigateToCreateRoom(){
        navigation.navigate('CreateRoomScreen');
    }

    if(loading){
        return <LoadingOverlay />
    }

    return <View style={styles.container}>
        <Text style={styles.text}>Available Chat Rooms</Text>
        <Button style={styles.button} onPress={navigateToCreateRoom}>Create New Room</Button>
        <FlatList data={rooms} keyExtractor={(item) => item.id} renderItem={({item}) => <Room room={item} onPress={() => navigateToChat(item.name, item.id)}/>}/>
    </View>
}

export default RoomsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    button: {
        marginBottom: 8
    }
});