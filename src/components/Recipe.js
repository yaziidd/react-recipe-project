import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Recipe extends React.Component{
    render(){
        const {image_url, publisher_url, title,publisher, recipe_id} = this.props.items;
        
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (context) =>{
                            const {goToDetails} = context;
                            return(
                                <div className = 'dib mx-3 my-5'>
                                    <div className = 'card' style = {{"width": "18rem"}}>
                                        <div className = 'card-body image-container' style = {{'height': "24rem"}}>
                                            <img src = {image_url} alt = 'recipe' style = {{"height":"14rem"}} className = 'mainImage '/>
                                            <p>{title}</p>
                                            <p>{publisher}</p>
                                        </div>
                                        <div className = 'card-footer d-flex justify-content-between'>
                                            <Link to = '/details'>
                                                <button onClick = {()=>goToDetails(recipe_id)} className = 'btn btn-success'>
                                                    Details
                                                </button>
                                            </Link>
                                            <button className = 'btn btn-primary text-white'>
                                                <a href = {publisher_url} className = 'text-white' rel = 'noopener noreferrer' target = '_blank'>Publisher</a>
                                            </button>
                                        </div>
                                    </div>                
                                 </div>
                            )
                        }
                    }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

export default Recipe;