import React from "react";
import Chat from "./Chat";
import "./Chats.css";
import { Link } from "react-router-dom";

function Chats() {
	return (
		<div className='chats'>
			<Link to='/chats/sarah' className='chats__message'>
				<Chat
					image='https://www.nme.com/wp-content/uploads/2018/09/margot-696x442.png'
					name='Harley'
					text='Hey how are you?'
					time='35 minutes ago'
				/>
			</Link>
			<Link to='/chats/sarah' className='chats__message'>
				<Chat
					image='https://media.vanityfair.com/photos/5c4ddf0fba532c6650dedf67/2:3/w_887,h_1331,c_limit/wonder-woman-3-modern.jpg'
					name='Wonder Woman'
					text='Nice to meet you too.'
					time='2 days ago'
				/>
			</Link>
			<Link to='/chats/sarah' className='chats__message'>
				<Chat
					image='https://vignette.wikia.nocookie.net/marveldatabase/images/5/59/Fantastic-Four-Rise-Silver-Surfer-6.jpg/revision/latest/top-crop/width/360/height/450?cb=20131026071901'
					name='Susan'
					text='I will be in town today.'
					time='1 hour ago'
				/>
			</Link>
		</div>
	);
}

export default Chats;
