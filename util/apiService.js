import axios from "axios";

const API_EndPoint = "https://chat-api-k4vi.onrender.com";

// Registers user
export async function setUsername(username) {
    try {
        const response = await axios.post(`${API_EndPoint}/chat/username`, {username});
        return response.data;

    } catch (error) {
        console.error("Error setting in username :", error.response?.data || error.message);
        return null;
    }
}

// Fetches all chat rooms
export async function getRooms() {
    try {
        const response = await axios.get(`${API_EndPoint}/chat/rooms`);
        return response.data;
    } catch (error) {
        console.error("Error while fetching rooms :", error.response?.data || error.message);
        return [];
    }
}

// Creates a new room
export async function createRoom(roomName) {
    try{
        const response = await axios.post(`${API_EndPoint}/chat/rooms`, {name : roomName});
        return response.data;
    }catch(error){
        console.error("Error in Creating Room :", error.response?.data || error.message);
        return null;
    }
}

// Fetches details of a specific room
export async function getRoomById(roomId) {
    try {
        const response = await axios.get(`${API_EndPoint}/chat/rooms/${roomId}`);
        return response.data;
    } catch (error) {
        console.error("Error in Fecthing the room :", error.response?.data || error.message);
        return null;
    }
}

// Gets the last 10 messages of a room
export async function getRoomMessages(roomId) {
    // console.log(roomId); // for debugging purposes
    try {
        const response = await axios.get(`${API_EndPoint}/chat/rooms/${roomId}/messages`);
        // console.log(response.data); // for debugging purposes 
        return response.data;
    } catch (error) {
        console.error("Error while fetching messages :", error.response?.data || error.message);
        return [];
    }
}


/** 

** Centralized API request and error handling

async function handleApiRequest(request, fallback = null) {
    try {
        const response = await request();
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return fallback; // Returns the fallback value (null or empty array)
    }
}

// API Functions
export async function setUsername(username) {
    return handleApiRequest(() => axios.post(`${API_EndPoint}/chat/username`, { username }));
}

export async function getRooms() {
    return handleApiRequest(() => axios.get(`${API_EndPoint}/chat/rooms`), []); // Returns [] if API fails
}

export async function createRoom(roomName) {
    return handleApiRequest(() => axios.post(`${API_EndPoint}/chat/rooms`, { name: roomName }));
}

export async function getRoomMessages(roomId) {
    return handleApiRequest(() => axios.get(`${API_EndPoint}/chat/rooms/${roomId}/messages`), []); // Returns [] if API fails
}

 * 
*/