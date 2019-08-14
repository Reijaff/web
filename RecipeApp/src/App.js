import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.js';
import Recipes from './components/Recipes.js';

const API_KEY = 'd0ae089bd87a6d72fc26c3c3db52a2d7';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };
        this.getRecipe = this.getRecipe.bind(this);
    }
    async getRecipe(e) {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(
            `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`,
        );
        const data = await api_call.json();
        this.setState({recipes: data.recipes});
        console.log(this.state.recipes);
    }
    componentDidMount() {
        const json = localStorage.getItem('recipes');
        const recipes = JSON.parse(json);
        this.setState({recipes: recipes});
    }
    componentDidUpdate() {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem('recipes', recipes);
    }

    render() {
        return (
            /*jshint ignore:start*/
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>
                </header>

                <Form getRecipe={this.getRecipe} />
                <Recipes recipes={this.state.recipes} />
            </div>
            /*jshint ignore:end*/
        );
    }
}

export default App;
