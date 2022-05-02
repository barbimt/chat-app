import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className="App">
    <ChatEngine 
      height="100vh"
      projectID="0d5168d2-784a-47d9-bfbc-37b0efd8248a"
      userName="barbi"
      userSecret="123"
      renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = {() =>new Audio('https://chat-engine-assets.s3.amazonws.com/click.mp3').play}
    />
    </div>
  );
}

export default App;
