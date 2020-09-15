import React from "react";
import TinderCards from "./TinderCards";
import Replay from "@material-ui/icons/Replay";
import Clear from "@material-ui/icons/Clear";
import StarRate from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import FlashOn from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
import "./Home.css";

function Home() {
	return (
		<div className='home'>
			<TinderCards />
			<div className='home__buttons'>
				<IconButton className='home__btn'>
					<Replay className='replay' fontSize='large' />
				</IconButton>
				<IconButton className='home__btn'>
					<Clear className='clear' fontSize='large' />
				</IconButton>
				<IconButton className='home__btn'>
					<StarRate className='starRate' fontSize='large' />
				</IconButton>
				<IconButton className='home__btn'>
					<Favorite className='favorite' fontSize='large' />
				</IconButton>
				<IconButton className='home__btn'>
					<FlashOn className='flashOn' fontSize='large' />
				</IconButton>
			</div>
		</div>
	);
}

export default Home;
