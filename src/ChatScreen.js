import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';

const ChatScreen = () => {
    const [messages,setMessages] = useState([
        {
            name:'Ellen',
            image:'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2000/Ellen-Degeneres-the-Beginning_19465049400_120883-MV._V336357413_SX1080_.jpg',
            message:'whats up!!'
        },
        {
            name:'mark zukerberg',
            image:'https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102',
            message:'how it going'
        },
        {
            name:'jeff bezaz',
            image:'https://content.fortune.com/wp-content/uploads/2021/02/GettyImages-1036099056.jpg',
            message:'how it going?'
        }
    ]);
    return (
        <div className='chatScreen'>
           
            <p className='chatScreen__title'>YOU MATCHED ON ELLEN 10/10/20</p>
            {messages.map(message => (
                message.name ? (

                <div className='chatScreen__message'>
                    <Avatar className='chatScreen__image' alt={message.name} src={message.image}/>
                    <p className='chatScreen__text'>{message.message}</p>
                </div>

                ) : (
                    
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
                )
                
            ))}
        </div>
    );
};

export default ChatScreen;