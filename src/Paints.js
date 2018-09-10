import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import background from './paint-background.jpg';

class Paints extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active_modal: ""
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e, i) {
        e.preventDefault();
        this.setState({
            active_modal: i
        });
        document.getElementsByTagName('html')[0].setAttribute('class', 'is-clipped');
    }

    closeModal(e) {
        e.preventDefault();
        this.setState({
            active_modal: ""
        });
        document.getElementsByTagName('html')[0].removeAttribute("class");
    }

	render() {

		let paints = [];
        let paint_count = 16;
		for (let i = 0; i < paint_count; i++) {

            let active = "";
            if(this.state.active_modal === i) {
                active = "is-active";
            }

			paints.push(
				<div key={ i } className="column is-one-quarter has-text-centered">
                    <div className="box" onClick={ (e) => this.openModal(e, i) }>
                        <div class="image-cropper paint-img">
                            <img className="is-rounded" alt="paint background" src={ background } />
                        </div>
                        <h3 className="title is-5">Paint swirl {i}</h3>
                        <p>Add a bit about the paint colour here!</p>
                    </div>
                    <div className={"modal " + active}>
                        <div className="modal-background" onClick={ this.closeModal }></div>
                        <div className="modal-content">
                            <div className="box">
                                <div class="image-cropper paint-img">
                                    <img className="is-rounded" alt="paint background" src={ background } />
                                </div>
                                <h3 className="title is-3">Paint swirl {i}</h3>
                                <hr />
                                <div className="content has-text-left">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus tristique finibus. Etiam tempus feugiat leo. Nullam sollicitudin arcu quis euismod tempus. Sed id lectus neque. Mauris ultricies tellus at suscipit porttitor. Sed nec porttitor ligula. Nullam fermentum massa porta odio porttitor convallis.</p>
                                    <p>Duis at bibendum nulla. Nulla ac elementum arcu. Mauris mi erat, tempor eu consequat at, dignissim ut mauris. Donec neque tortor, fermentum id turpis a, congue consequat magna. Morbi posuere tortor eros, euismod tempor nulla vestibulum a. Aenean sagittis nibh nulla, quis ullamcorper ligula consequat vitae. Ut molestie nunc eget nulla ultrices posuere. Nunc vehicula tempor augue, et venenatis metus vestibulum sed. Sed sit amet nisl at dui ultricies semper quis sed nibh.</p>
                                </div>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={ this.closeModal }></button>
                    </div>
				</div>
			);
		}

		return (
			<div className="Paints">
                <Parallax
					bgImage={ background }
					bgImageAlt="paint background"
					strength={300}
					className="hero is-medium"
				>
                    <div className="hero-body">
                        <h1 className="title title-large has-text-centered has-text-white">Paints</h1>
                    </div>
                </Parallax>
                <div className="container">
                    <div className="section">
                        <div className="columns is-multiline">
                            { paints }
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default Paints;
