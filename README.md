# 🔥 HangOut Hub - Real-Time Group Chat App

HangOut Hub is a **real-time group chat application** built with **React Native (Expo)** and **WebSockets**, allowing users to **instantly connect, create chat rooms, and engage in seamless messaging**. Whether you want to start a new conversation or join an existing one, HangOut Hub provides a smooth, interactive, and real-time chat experience! 💬✨

---

## 🚀 **Key Features**

👉 **Set a Unique Username** – Users can register with a custom username to personalize their chat experience.\
👉 **Create Chat Rooms or Join Existing Ones** – Start a conversation or hop into an active discussion.\
👉 **Real-Time Messaging with WebSockets** – Messages are sent & received instantly without delays.\
👉 **System Messages for Join/Leave Events** – Get notified when users enter or exit a chat room.\
👉 **Auto-Scrolling Chat** – The chat automatically scrolls to the latest messages for better usability.\
👉 **Mobile-Friendly UI** – A clean and responsive interface optimized for a smooth user experience.

---

## 🛠 **Tech Stack**

- **React Native (Expo)** – Framework for building cross-platform mobile apps.
- **WebSockets** – Enables real-time communication between users.
- **Axios** – Handles API requests for user registration, room creation, and message retrieval.
- **React Native Navigation** – Manages screen transitions using **Native Stack Navigation**.

---

## 📚 **Installation & Setup**

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/thesartajalam/HangOutHub.git  
cd HangOutHub  
```

### 2️⃣ **Install Dependencies**

```sh
npm install  
```

### 3️⃣ **Start the App in Development Mode**

```sh
npx expo start  
```

🔹 **Press ****`a`** to run on an Android emulator.\
🔹 **Press ****`w`** to open in a web browser.

### 4️⃣ **Build the APK for Android** *(Optional)*

```sh
eas build -p android --profile preview  
```

🔹 Download the generated APK and install it on your device.

---

## 📸 **Screenshots**

### **1. Set Username Screen**
![SS1](https://github.com/user-attachments/assets/aaf42919-bf71-4b68-a11c-78226e583d14)
![SS2](https://github.com/user-attachments/assets/ce93c3c4-dffa-41f6-aa66-8b949de8fbe0)


### **2. Loading Spinner (During Username Creation)**
LoadingOverlay(Component made by using ActivityIndicator) is shown and once user is created it disappears 

![SS3](https://github.com/user-attachments/assets/fb9593d8-78d2-46a4-91d8-dd7d453cc043)


### **3. User Created Alert**
Alert Message showing user is created or registered and welcomes user 

![SS4](https://github.com/user-attachments/assets/1ff19284-eab1-4d91-aea3-c642da6dd48c)


### **4. Room Selection Screen**

Shows the available rooms and allows users to create a new one.
![SS5](https://github.com/user-attachments/assets/113a0b1d-3a79-441c-983a-d14a019e8ba3)



### **5. Create Room & Navigation to Chat Screen**

After creating room Screen we move to the newly created chat room and conversation is handled in ChatScreen

![SS6](https://github.com/user-attachments/assets/26d6a083-2554-4646-9913-4ef68c90bca5)
![SS7](https://github.com/user-attachments/assets/cd1a67fa-8b89-4b34-90a3-7c13c6bb12d8)

After Successful creation of a room showing Alert message
![SS8](https://github.com/user-attachments/assets/ef45ffbb-44b6-492b-95d9-bdd39eca020d)

then navigating to the newly created room
![SS9](https://github.com/user-attachments/assets/e47a3910-2497-4f5b-9d00-372b1e25833c)



### **6. Chat Screen**

#### **6.1 My Messages**

![SS10](https://github.com/user-attachments/assets/e9d5aeb2-88e3-461a-81e3-4885e251393c)
![SS11](https://github.com/user-attachments/assets/85863d2e-2e2e-4bc5-a3e4-49b05708bfa8)
![SS12](https://github.com/user-attachments/assets/c477d3b1-97b3-4685-8e02-441308cd15db)
![SS13](https://github.com/user-attachments/assets/59bfc258-8dd0-4f26-b72a-04fe78122267)
![SS14](https://github.com/user-attachments/assets/11223c14-a2c6-4373-b493-fca9d082984b)


#### **6.2 Other Users' Messages**

![SS15](https://github.com/user-attachments/assets/aaf2b04f-fd96-4e55-9628-82394e8d7058)
![SS16](https://github.com/user-attachments/assets/510912b4-23e1-48a5-9411-975e13993eb2)
![SS17](https://github.com/user-attachments/assets/411138ff-ed05-40c3-9792-9e3969c428a7)
![SS18](https://github.com/user-attachments/assets/5dc5e17c-f6a3-4908-844b-862a9c78ad9b)
![SS19](https://github.com/user-attachments/assets/0ba30b5c-48e0-49a3-b3c1-f457ffb0e3c8)


---

## 📚 **Project Structure**

```
/HangOutHub  
👉 /assets           # App icons & splash screen images  
👉 /components       # Reusable components(Room, MyMessage, Message) and Resusable UI (Buttons, Inputs, LoadingOverlay)  
👉 /screens          # App screens (SetUsername, Rooms, Create Room, Chat)  
👉 /store            # Context for user & room state management  
👉 /util             # API service functions (Axios requests)  
👉 App.js            # Main entry point with navigation setup  
👉 app.json          # Expo configuration  
👉 package.json      # Dependencies and scripts  
👉 README.md         # Project documentation (This file)  
```

## 🛡 **License**

This project **was created to showcase my skills in React Native development. Feel free to explore the code and learn from it.
**.

## 📩 **Contact**

📧 **Email**: [sartajalam565@gmail.com](mailto\:sartajalam565@gmail.com)\
📎 **GitHub:** [@thesartajalam](https://github.com/thesartajalam)

## **💡 Final Thoughts** &#x20;

HangOut Hub is designed to provide an \*\*efficient and user-friendly\*\* group chat experience. Whether for casual conversations or real-time discussions, it brings people together seamlessly! 🚀🔥 &#x20;
