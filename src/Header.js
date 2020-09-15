import React from "react";
import "./Header.css";
import Person from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
import logo from "./tinder-logo.png";
import { Link, useHistory } from "react-router-dom";

function Header({ backBtn }) {
	const history = useHistory();
	return (
		<nav className='header'>
			{backBtn ? (
				<IconButton onClick={(e) => history.replace(backBtn)}>
					<ArrowBackIos fontSize='large' />
				</IconButton>
			) : (
				<IconButton>
					<Person fontSize='large' />
				</IconButton>
			)}
			<Link to='/'>
				<img className='header__logo' src={logo} alt='Logo' />
			</Link>
			<Link to='/chats'>
				<IconButton>
					<Forum fontSize='large' />
				</IconButton>
			</Link>
		</nav>
	);
}

export default Header;
