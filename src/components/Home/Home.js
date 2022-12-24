import { Avatar } from '@mui/material';
import React from 'react';
import './Home.css';
import bootstrapImg from '../../Assets/Bootstrap.svg';
import ReactImg from '../../Assets/React.png';
import MUIImg from '../../Assets/Mui.png';
import GraphQlImg from '../../Assets/Graphql.png';
import ReduxImg from '../../Assets/Redux.png';

function Home() {
	return (
		<div>
			<div className='home-container'>
				<div>
					<div className='home-firstSentence'>Hi, my name is </div>{' '}
					<div className='home-secondSentence'>
						<span className='multiColourText'>Mohamed</span> Mamdouh.{' '}
					</div>
					<div className='home-thirdSentence'>Front End Web Developer </div>
					<div className='home-fourthSentence'>
						Ambitious Web Developer seeking growth.Experienced in React and
						React native, experienced with famous libraries like Yup.js, redux
						and many more. you can find some of my projects in the navbar above.
					</div>
				</div>
				<div className='images-container'>
					<div className='img-border'>
						<img
							alt='Bootstrap'
							src={bootstrapImg}
							width={150}
							height={150}
							className='img-style'
						/>
						<div className='img-title'>Bootstrap</div>
					</div>

					<div className='img-border'>
						<img
							alt='React'
							src={ReactImg}
							className='img-style'
							width={100}
							height={100}
						/>
						<div className='img-title'>React</div>
					</div>
					<div className='img-border'>
						<img
							alt='React'
							src={ReactImg}
							className='img-style'
							width={150}
							height={150}
						/>
						<div className='img-title'>React Native</div>
					</div>
					<div className='img-border'>
						<img
							alt='Material UI'
							src={MUIImg}
							className='img-style'
							width={150}
							height={150}
						/>
						<div className='img-title'>Material UI</div>
					</div>
					<div className='img-border'>
						<img
							alt='Graph QL'
							src={GraphQlImg}
							className='img-style'
							width={150}
							height={150}
						/>
						<div className='img-title'>Graph QL</div>
					</div>
					<div className='img-border'>
						<img
							alt='Redux'
							src={ReduxImg}
							className='img-style'
							width={150}
							height={150}
						/>
						<div className='img-title'>Redux</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
