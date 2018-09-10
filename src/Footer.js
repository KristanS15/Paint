import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column">
                                <div class="content">
                                    <p>
                                        <strong>Paints</strong> by <a href="https://github.com/KristanS15" target="_blank" rel="noopener noreferrer">Kristan Sirett</a>.<br />
                                        Other repositories <a href="https://github.com/KristanS15?tab=repositories" target="_blank" rel="noopener noreferrer">here</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="column">
                                <nav className="navbar is-white">
                                    <div className="navbar-end">
                                        <NavLink className="navbar-item" to="/">Home</NavLink>
                                        <NavLink className="navbar-item" to="/paints">Paints</NavLink>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
