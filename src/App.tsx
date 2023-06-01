import {useState} from "react";
import CodeDisplay from "./components/codeDisplay";
import MessagesDisplay from "./components/messagesDisplay";


interface ChatData {
  role: string,
  content:  string;
}
const App = () => {
  const [value,setValue] = useState<string>(""); // ["create table users (id int, name varchar(255), email varchar(255), password varchar(255))"
  const [chat,setChat] = useState<ChatData[]>([]); // ["create table users (id int, name varchar(255), email varchar(255), password varchar(255))"
  const getQuery = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      };

      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
      const UserMessage={
        role: 'user',
        content:value
      }
      setChat(oldChat=>[...oldChat,data, UserMessage])
    } catch (error) {
      console.error(error);
    }
  };
const clearChat = () => {
  setValue("")
  setChat([])
}

  const filteredUserMessages =chat.filter(message => message.role=== "user")
  const latestCode = chat.filter(message => message.role=== "assistant").pop()
  return (
    <div className="app">
      <MessagesDisplay userMessages={filteredUserMessages}/>
      <input value={value} onChange={e=>setValue(e.target.value)}/>
      <CodeDisplay text={latestCode?.content|| ""} />
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>
          Get Query!
        </button>
        <button id="clear-chat"onClick={clearChat}>Clear Chat</button>
      </div>
    </div>
  );
};

export default App;
