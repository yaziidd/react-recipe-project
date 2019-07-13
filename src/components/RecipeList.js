import React from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import { ProductConsumer } from '../context';


class RecipeList extends React.Component{
    render(){       
        return(
            <React.Fragment>
                <div className = 'text-center'>
                <ProductConsumer>
                    {
                        (context)=>{
                            const {recipes, goToDetails, value,  handleSubmit, handleChange,error} = context;
                            return(
                                <div>
                                     <RecipeSearch value = {value} />
                                     <h1 style = {{"marginTop": "50px"}}>Recipe List</h1>
                                {
                                    (error) ?
                                    (<h1>{error}</h1>)
                                    :
                                    (
                                        recipes.map(item =>{
                                            return(
                                                <Recipe key = {item.recipe_id} goToDetails = {goToDetails} items = {item}/>
                                            )
                                        })

                                    )
                                    
                                }


                                </div>

                            )
                        }
                    }
                </ProductConsumer>
               
                </div>

            </React.Fragment>
        )
    }
}

export default RecipeList;
