import CodeDisplay from "./components/codeDisplay";
import MessagesDisplay from "./components/messagesDisplay";

const  App=()=> {
  return (
    <div className="app">\
      <MessagesDisplay/> 
      <input/>
      <CodeDisplay/>
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-chat">Clear Chat</button>

      </div>
    </div>
  )
}

export default App;
