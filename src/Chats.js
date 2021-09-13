import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Sarah'
                message='hey how are you?'
                timestamp='40 seconds ago'
                profilePic='https://artifactconf.com/img/speakers/sarah-drasner.jpg'
            />
            <Chat
                name='Ellen'
                message='whats up??'
                timestamp='50 seconds ago'
                profilePic='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2000/Ellen-Degeneres-the-Beginning_19465049400_120883-MV._V336357413_SX1080_.jpg'
            />
            <Chat
                name='Sandra'
                message='Ola'
                timestamp='3days ago'
                profilePic='https://science.nasa.gov/files/science-pink/s3fs-public/thumbnails/image/Cauffman.jpg'
            />
            <Chat
                name='Natasha'
                message='Opps! there he is'
                timestamp='40 minutes ago'
                profilePic='https://www.bellnunnally.com/27F299/assets/images/attorneys/4/Natasha_Gandhi.jpg'
            />
        </div>
    );
};

export default Chats;