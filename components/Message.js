import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Message({message}) {
    function formatTime(timeStamp){
        const date = new Date(timeStamp);
        return date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        });
    }

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.username}>{message.username}</Text>
      <Text style={styles.messageText}>{message.content}</Text>
      <Text style={styles.timeStamp}>{formatTime(message.created_at)}</Text>
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
    messageContainer: {
        alignSelf: "flex-start",
        maxWidth: "75%",
        padding: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        marginVertical: 5,
        // backgroundColor: GlobalStyles.colors.dustyPeach
        backgroundColor: GlobalStyles.colors.sunsetBlush,
        // flexShrink: 1
    },
    username: {
        fontWeight: "bold",
        marginBottom: 2, 
        color: GlobalStyles.colors.deepOceanBlue,
    },
    messageText: {
        fontSize: 16,
        color: GlobalStyles.colors.darkGray
    },
    timeStamp: {
        fontSize: 12,
        color: GlobalStyles.colors.mediumGray,
        alignSelf: "flex-end",
        marginTop: 5
    },
});