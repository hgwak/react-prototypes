import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component{
    state={
        movie:[]
    }
    componentDidMount(){
        const itunes='http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(itunes)
        .then((response)=>{
            this.setState({movie:response.data.feed.entry});
        });
    }
    render(){
        const movieList = this.state.movie.map((item, index)=>{
            return <Movie key={index} info={item}/>
        })
        return(
            <div>
                {movieList}
            </div>
        );
    }
}
export default MovieContainer;