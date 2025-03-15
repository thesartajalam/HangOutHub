import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { UserContext } from "../store/user-context";

function MyMessage({message}) {
    const UserNameContext = useContext(UserContext);

    function formatTime(timeStamp){
        const date = new Date(timeStamp);
        return date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
    }

    const time = new Date().toISOString();

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.username}>{UserNameContext.username}</Text>
      <Text style={styles.messageText}>{message.content}</Text>
      {/* <Text style={styles.timeStamp}>{formatTime(message.created_at)}</Text> */}
      <Text style={styles.timeStamp}>{formatTime(time)}</Text>
    </View>
  );
}

export default MyMessage;

const styles = StyleSheet.create({
    messageContainer: {
        alignSelf: "flex-end",
        maxWidth: "75%",
        padding: 10,
        borderRadius: 10,
        borderTopRightRadius: 0,
        marginVertical: 5,
        backgroundColor: GlobalStyles.colors.dustyPeach,
        // flexShrink: 1
        // backgroundColor: GlobalStyles.colors.sunsetBlush
    },
    username: {
        fontWeight: "bold",
        marginBottom: 2,
        color: GlobalStyles.colors.darkTeal
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