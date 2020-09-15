import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
	const [messages, setMessages] = useState([
		{ name: "sarah", text: "Hey, how are you?" },
		{ name: "sarah", text: "What are you up to?" },
		{ text: "Hi! am good, how about you??" },
	]);
	const [input, setInput] = useState("");

	const addMessage = (e) => {
		e.preventDefault();
		const newMsg = { text: input };
		setMessages([...messages, newMsg]);
		setInput("");
	};
	return (
		<div className='chatScreen'>
			<p>YOU MATCHED WITH SARAH ON 10/09/20</p>
			{messages.map((message) =>
				message.name ? (
					<div className='message'>
						<Avatar className='avatar' alt={message.name} />
						<div className='textMessage'>
							<p>{message.text}</p>
						</div>
					</div>
				) : (
					<div className='message'>
						<div className='textUser'>
							<p>{message.text}</p>
						</div>
					</div>
				)
			)}
			<form className='inputArea'>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type='text'
					placeholder='Type a message...'
				/>
				<button onClick={addMessage}>Send</button>
			</form>
		</div>
	);
}

export default ChatScreen;
