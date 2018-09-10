import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import background from './paint-background.jpg';
import Nav from './Nav';

class Homepage extends Component {
	render() {

		let paints = [];
		let paint_count = 4;
		if(window.innerHeight > 700) {
			paint_count = 8;
		}
		for (let i = 0; i < paint_count; i++) {
			paints.push(
				<div key={ i } className="column is-one-quarter homepage-column has-text-centered">
					<div class="image-cropper paint-img">
						<img className="is-rounded" alt="paint background" src={ background } />
					</div>
					<h3 className="title is-5">Paint swirl</h3>
					<p>Add a bit about the paint colour here!</p>
				</div>
			);
		}

		return (
			<div className="Homepage">
				<Parallax
					bgImage={ background }
					bgImageAlt="paint background"
					strength={300}
					className="hero is-fullheight"
				>
					<div className="page-content">
						<section className="section">
							<Nav />
							<section className="section">
								<h1 className="title is-1">Pick your favourite paint colour and build your perfect design</h1>
							</section>
							<div className="columns">
								<div className="column is-2 vertically_align">
									<h2 className="title is-5">See my favourites:</h2>
								</div>
								<div className="column vertically_align">
									<hr />
								</div>
								<div className="column is-2 vertically_align">
									<NavLink to="/paints" className="button">View all</NavLink>
								</div>
							</div>
							<section className="section">
								<div className="columns is-multiline is-variable is-8">
									{ paints }
								</div>
							</section>
						</section>
						<div className="triangle"></div>
					</div>
				</Parallax>
			</div>
		);
	}
}

export default Homepage;
