import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";

function Chat({ image, text, name, time }) {
	return (
		<div className='chat'>
			<div className='chat__info'>
				<Avatar className='chat__avatar' src={image} alt={name} />
				<div className='chat__display'>
					<h3>{name}</h3>
					<p>{text}</p>
				</div>
			</div>
			<p className='chat__time'>{time}</p>
		</div>
	);
}

export default Chat;
