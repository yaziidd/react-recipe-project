import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'
import RecipeSearch from './components/RecipeSearch';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


 export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path = '/' component = {RecipeList}/>
                    <Route path = '/details' component = {RecipeDetails}/> 
                </Switch>
            </React.Fragment>
        )
    }

}




    // constructor(props){
    //     super(props);
    //     this.state = {
    //         url: `https://www.food2fork.com/api/search?key=6f9e144ab393cea00abc1be1a83a25ee`,
    //         search: '',
    //         query: '&q=',
    //         base_url:`https://www.food2fork.com/api/search?key=6f9e144ab393cea00abc1be1a83a25ee`,
    //         recipes: recipes,
    //         pageIndex:0,
    //         detail_id:'',
    //         error: ''
    //     }
    // }

    // componentDidMount(){
    //     this.getRecipes();
    // }

    // async getRecipes(){
    //     try{
    //         let data = await fetch(this.state.url);
    //         let jsonData = await data.json();
    //         if(jsonData.recipes.length === 0){
    //             this.setState(()=>{
    //                 return{
    //                     error: 'Your item could not be found'
    //                 }
    //             })
    //         }
    //         else{
    //             this.setState(()=>{
    //                 return{
    //                     recipes:jsonData.recipes,
    //                     error: ''
    //                 }
    //             })
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }

    // handleSubmit = (event)=>{
    //     event.preventDefault();
    //     const {base_url, query, search} = this.state;
    //     this.setState(()=>{
    //         return{
    //             url: `${base_url}${query}${search}`,
    //             search: ''
    //         }
    //     },
    //     ()=>{
    //         this.getRecipes();
    //     })
    // }

   
    // displayPage = (index)=>{
    //     switch(index){
    //         default: 
    //         case 0:
    //         return(
    //             <React.Fragment>
    //                <RecipeSearch value = {this.state.search}  handleInput = {this.handleInput} handleSubmit = {this.handleSubmit}/>
    //                <h1 style = {{"marginTop": "50px"}}>Recipe List</h1>
    //                <RecipeList error = {this.state.error} recipes = {this.state.recipes} goToDetails = {this.goToDetails}  />
    //             </React.Fragment>
    //         );
    //         case 1:
    //         return(
    //             <RecipeDetails id = {this.state.detail_id} goToIndex = {this.goToIndex}/>
    //         )
    //     }
    // }

    // handleInput = (event)=>{
    //     this.setState({search:event.target.value});
    // }

    // goToDetails = (id, index)=>{
    //     this.setState(()=>{
    //         return{
    //             detail_id: id,
    //             pageIndex: index
    //         }
    //     })
    // }

    // goToIndex = (index)=>{
    //     this.setState(()=>{
    //         return{
    //             pageIndex: index
    //         }
    //     })
    // }



//     render(){
//         return(
//             <React.Fragment>
//               <div className = 'text-center pt-3'>
//               {this.displayPage(this.state.pageIndex)}
//               </div>
//             </React.Fragment>
//         )
//     }
// }