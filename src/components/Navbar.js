import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className = 'navbar navbar-expand-md navbar-dark bg-dark mb-3'>
                    <a href = 'home' className = 'navbar-brand'>RecipeList</a>
                    <button className = 'navbar-toggler btn btn-dark' type = 'button' data-target = "#navContainer" data-toggle = 'collapse'>
                        <span className = 'navbar-toggler-icon'></span>
                    </button>
                    <div className = 'collapse navbar-collapse' id = 'navContainer'>
                        <ul className = 'navbar-nav'>
                            <li className = 'nav-item'>
                                <Link to = '/' className = 'nav-link'>
                                Home
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;