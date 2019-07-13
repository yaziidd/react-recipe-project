import React from 'react';
import {recipe} from '../tempDetails';
import {ProductContext} from '../context';

// state = {
//     recipe: {}
//   };
//   async componentDidMount() {
//     const id = this.props.id;
//     const url = `https://www.food2fork.com/api/get?key=${
//       process.env.REACT_APP_API_KEY
//     }&rId=${id}`;
//     try {
//       const data = await fetch(url);
//       const jsonData = await data.json();
//       this.setState(
//         (state, props) => {
//           return { recipe: jsonData.recipe };
//         },
//         () => {}
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   async componentDidMount(){
//       const i
//   }

class RecipeDetails extends React.Component{
    // state = { 
    //         recipe: {}
    //     }
    

    // async componentDidMount(){
    //     const url = `https://www.food2fork.com/api/get?key=6f9e144ab393cea00abc1be1a83a25ee&rId=35382`;
    //     try{
    //         let data = await fetch(url);
    //         let jsonData = await data.json();
    //         this.setState(()=>{
    //             return{
    //                 recipe: jsonData.recipe
    //             }
    //         },
    //         ()=>{})
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    static contextType = ProductContext;
    
    constructor(props){
        super(props);
        this.state = {
            
            recipe: {}
        }
    }

    async componentDidMount(){
        try{
            let {detail_id} = this.context;
            let url = `https://www.food2fork.com/api/get?key=Enter your api key &rId=${detail_id}`;
            let data = await fetch(url);
            let jsonData = await data.json();
            this.setState(()=>{
                return{
                    recipe: jsonData.recipe
                }
            },
            ()=>{})
        }
        catch(error){
            console.log(error);
        }
    }
   

    render(){
        const {image_url, publisher_url, source_url,title, ingredients} = this.state.recipe;
        if(!ingredients){
            return(
                <h1>Loading...</h1>
            )
        }
        else{
            
            return(
                <React.Fragment>
                    <div className = 'container-fluid'>
                        <div className = 'row'>
                            <div className = 'col-10 col-lg-6 text-center mx-auto'>
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-10 col-lg-6 text-center mx-auto'>
                                <img src = {image_url} alt = 'recipe'/>
                            </div>
                            <div className = 'col-10 col-lg-6 mx-auto'>
                                <button className = 'btn btn-outline-warning mx-3'>
                                    <a href = {publisher_url} rel = 'noopener noreferrer' target = "_blank">
                                        Publisher url
                                    </a>
                                </button>
                                <button className = 'btn btn-outline-danger my-5'>
                                    <a href = {source_url} rel = 'noopener noreferrer' target = "_blank">
                                        Source url
                                    </a>
                                </button>
                                <ul className = 'list-group'>
                                    <h3>Ingredients</h3>
                                    {
                                        ingredients.map(item =>{
                                            return(
                                                <li className = 'list-group-item'>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default RecipeDetails;