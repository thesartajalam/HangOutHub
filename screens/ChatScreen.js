import { useContext, useEffect, useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { getRoomMessages } from "../util/apiService";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { GlobalStyles } from "../constants/styles";
import Message from "../components/Message";
import { UserContext } from "../store/user-context";
import MyMessage from "../components/MyMessage";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ChatScreen({ route }) {
  const roomID = route.params.roomId;
  const roomName = route.params.roomName;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loadingMessages, setLoadingMessages] = useState(true);
  const ws = useRef(null);
  const flatListRef = useRef(null);
  const UserNameContext = useContext(UserContext);

//   console.log(roomName); // for debugging undefined values

  useEffect(() => {
    async function fetchMessages() {
        setLoadingMessages(true);
      const response = await getRoomMessages(roomID);
      setMessages(response.reverse());
      setLoadingMessages(false);
    }

    fetchMessages();
  }, [roomID]);

  // WebSocket Connection is established here
  useEffect(() => {
    console.log(roomID);
    ws.current = new WebSocket(
      `wss://chat-api-k4vi.onrender.com/ws/${roomID}/${UserNameContext.username}`
    );

    ws.current.onopen = () => {
        console.log("Successfully Connected to the WebSocket Server") // for confirming that the connection is established
    };

    ws.current.onerror = (error) => {
        console.error("WebSocket error :", error);
        Alert.alert("Connection error happened", "WebSocket Connection failed. Trying to reconnect...");
    };

    ws.current.onclose = (event) => {
        console.log("WebSocket Connection Closed :", event.code, event.reason);
        setTimeout(() => {
            console.log("Reconnecting WebSocket...");
            ws.current = new WebSocket(`wss://chat-api-k4vi.onrender.com/ws/${roomID}/${UserNameContext.username}`);
        }, 3000); // Reconnect after 3 seconds, 1 second = 1000 miliseconds
    };

    ws.current.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      console.log(receivedMessage);
      // setMessages((prevMessages) => [...prevMessages, receivedMessage.message]);

      if (receivedMessage.event === "message") {
        setMessages((prevMessages) => [
          ...prevMessages,
          receivedMessage.message,
        ]);
      } else if (receivedMessage.event === "join") {
        // Showing the system message when the user joins the chat room
        const joinMessage = {
          id: `join-${receivedMessage.username}`,
          content: `${receivedMessage.username} joined the chat`,
          system: true,
        };
        setMessages((prevMessages) => {
            // Check if the same join message already exits
            const isDuplicate = prevMessages.some(
                (msg) => msg.system && msg.content === `${receivedMessage.username} joined the chat`
            );

            if(!isDuplicate){
                return [...prevMessages, joinMessage];
                
            }
            return prevMessages;
        });
      } 
      else if(receivedMessage.event === "leave") {
        // Showing the system message when the user leaves the chat room
        const leaveMessage = {
            id: `leave-${receivedMessage.username}`,
            content: `${receivedMessage.username} left the room`,
            system: true,
        };
        setMessages((prevMessages) => {
          const isDuplicate = prevMessages.some((msg) => msg.system && msg.content === `${receivedMessage.username} left the room`);
          
          if(!isDuplicate){
            return [...prevMessages, leaveMessage];
          }
          return prevMessages;
        });
      }
    };

    return () => {
      ws.current.close(); // Close connection when component unmounts
    };
  }, [roomID]);

  function sendMessage() {
    if (!newMessage.trim()) {
      return;
    }

    // const messageToSend = newMessage;

    const messagePayload = {
      event: "message",
    //   content: messageToSend,
      content: newMessage,
    };

    ws.current.send(JSON.stringify(messagePayload));
    setNewMessage("");
  }

  if(loadingMessages){
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.roomName}>{roomName}</Text>
        </View>

      <FlatList
        ref={flatListRef} // Attached Ref to Flatlist
        data={messages}
        keyExtractor={(item, index) =>
        //   item.id ? item.id.toString() : index.toString() // earlier used this 
          item.id ? item.id.toString() : `system-${index}` // this is used for handling the duplicate keys warning which may cause problem in future
        }
        renderItem={({ item }) =>
          item.system ? (
            <Text style={styles.systemMessage}>{item.content}</Text>
          ) : item.username === UserNameContext.username ? (
            <MyMessage message={item} />
          ) : (
            <Message message={item} />
          )
        }
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({animated: true})} // Auto Scrolls whenever a new message adds
        onLayout={() => flatListRef.current?.scrollToEnd({animated: true})} // when the Screen load for the very first time
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <Button style={styles.buttonStyle} onPress={sendMessage}>
          Send
        </Button>
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  header: {
    Width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.warmApricot,
    marginBottom: 10,
    borderRadius: 10
  },
  roomName: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.darkGray
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  buttonStyle: {
    minWidth: 80,
    marginBottom: 20,
  },
  systemMessage: {
    alignSelf: "center",
    color: GlobalStyles.colors.darkGray,
    fontSize: 14,
    fontStyle: "italic",
    marginVertical: 5,
  },
});
