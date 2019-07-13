import React from 'react';
import {recipes} from './tempList';
import {recipe} from './tempDetails';

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: `https://www.food2fork.com/api/search?key=Enter your api Key`,
            search: '',
            query: '&q=',
            base_url:`https://www.food2fork.com/api/search?key=Enter your api key`,
            recipes: recipes,
            pageIndex:0,
            detail_id:'',
            error: ''
        }
    }

    
    componentDidMount(){
        this.getRecipes();
    }

    async getRecipes(){
        try{
            let data = await fetch(this.state.url);
            let jsonData = await data.json();
            if(jsonData.recipes.length === 0){
                this.setState(()=>{
                    return{
                        error: 'Your item could not be found'
                    }
                })
            }
            else{
                this.setState(()=>{
                    return{
                        recipes:jsonData.recipes,
                        error: ''
                    }
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }



    handleSubmit = (event)=>{
        event.preventDefault();
        const {base_url, query, search} = this.state;
        this.setState(()=>{
            return{
                url: `${base_url}${query}${search}`,
                search: ''
            }
        },
        ()=>{
            this.getRecipes();
        })
    }

    handleInput = (event)=>{
        this.setState({search:event.target.value});
    }

    goToDetails = (id)=>{
        this.setState(()=>{
            return{
                detail_id: id,
               
            }
        })
    }


    render(){
       return(
        <ProductContext.Provider value = {{
            ...this.state,
            handleInput: this.handleInput,
            handleSubmit: this.handleSubmit,
            goToDetails: this.goToDetails,
            goToIndex: this.goToIndex,
            getDetails: this.getDetails

        }}>
            {this.props.children}
        </ProductContext.Provider>
       )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer, ProductContext};