import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="e13369ff-79b6-45d3-b486-a15e49de56db"
            userName="ksacbibi"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;