import React from 'react';
import './inputlabel.css';
import {ProductConsumer} from '../context';

class RecipeSearch extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (context)=>{
                            const {handleInput, handleSubmit, value} = context;
                            return(
                                <div className = 'container-fluid d-flex justify-content-center'>
                                <div className = 'col-6 col-lg-6 mx-auto inputlabel '>
                                    <form onSubmit = {handleSubmit}>               
                                            <div className = 'input-group'>
                                                <input onChange = {handleInput} value = {value} placeholder="Enter the search for your recipe here..." type = 'text' className = 'form-control'/>
                                                <div className = 'input-group-append'>
                                                    <span type = 'submit' className = 'input-group-text'>
                                                        <i className = 'fas fa-search'/>
                                                    </span>
                                                </div>
                                            </div>
                                    
                                    </form>
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
export default RecipeSearch;