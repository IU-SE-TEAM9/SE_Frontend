/* eslint-disable no-unused-vars */


import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
import {PrettyChatWindow} from 'react-chat-engine-pretty'
import { useAuth } from '../context/authContext';

// const ChatsPage = () => {
//     const chatProps = useMultiChatLogic('ffca2bc2-5e15-4026-ba1b-0ebb00c51daf', 'lavakumar', 'hello1234')

//     return (<div style={{height : '100vh'}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{height : "100%"}} />
//     </div>
//     )

// }

const ChatsPage = () => {
    const {token, authUser} = useAuth();
    let parsed = JSON.parse(authUser)
    let username = parsed.email
    let secret = parsed.userId
    return (
        <div style={{height : '100vh'}}>
            <PrettyChatWindow
                projectId='ffca2bc2-5e15-4026-ba1b-0ebb00c51daf'
                username={username} 
                secret='hello1234'
                style={{height : '100%'}}
            />
        </div>
    )
}

export default ChatsPage