import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	render() {

        let colour = "white";
        if(this.props.colour) {
            colour = this.props.colour;
        }

        let logo = "https://bulma.io/images/bulma-logo.png";
        if(colour === "black") {
            logo = "https://bulma.io/images/bulma-logo-white.png";
        }

		return (
            <nav className={"navbar is-" + colour }>
                <div className="container">
                    <div className="navbar-brand">
                        <NavLink className="navbar-item" to="/">
                            <img src={ logo } alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </NavLink>
                        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div class="navbar-menu" id="navMenu">
                        <div className="navbar-end">
                            <div className="navbar-start">
                                <NavLink className="navbar-item" to="/">Home</NavLink>
                                <NavLink className="navbar-item" to="/paints">Paints</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
		);
	}
}

export default Nav;
