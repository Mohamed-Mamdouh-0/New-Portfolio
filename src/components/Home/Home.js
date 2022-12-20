import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='home-container'>
			<div className='home-firstSentence'>Hi, my name is </div>{' '}
			<div className='home-secondSentence'>
				<span className='multiColourText'>Mohamed</span> Mamdouh.{' '}
			</div>
			<div className='home-thirdSentence'>Front End Web Developer </div>
			<div className='home-fourthSentence'>
				Ambitious Web Developer seeking growth.Experienced in React and React
				native, experienced with famous libraries like Yup.js, redux and many
				more. you can find some of my projects in the navbar above.
			</div>
		</div>
	);
}

export default Home;
