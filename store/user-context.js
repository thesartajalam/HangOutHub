import { createContext, useState } from "react";

export const UserContext = createContext({
    username: "",
    id: null,
    timeStamp: "",
    // setUserName: (enteredText) => {},
    roomId: "",
    setRoomId: (id) => {},
    setUserData: () => {}
});

function UserContextProvider({children}) {
    const [userData, setUserData] = useState({username: "", id: null, timeStamp: ""});
    const [roomId, setRoomId] = useState("");

    function setUser(userInfo){
        setUserData(userInfo);
    }

    const value = {
        username: userData.username,
        id: userData.id,
        timeStamp: userData.timeStamp,
        setUserData: setUser,
        roomId: roomId,
        setRoomId: setRoomId,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider;