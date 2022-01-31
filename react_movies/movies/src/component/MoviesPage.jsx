import React, { Component } from 'react'
import {getMovies} from '../temp/MovieService.js'

export default class MoviesPage extends Component {
    
    state = {
        movies:getMovies()
    }
    deleteMovie =(cid)=>{
        let filteredMovies = this.state.movies.filter((moviesObj)=>{
            return cid!==moviesObj._id;
        })
        this.setState({
            movies:filteredMovies
        })
    }
    handleFilter=()=>{

    }
    sortByRate = (e)=>{
        let className = e.target.className;
        let sortedMovies;
        let {movies} = this.state;
        if(className==="fas fa-sort-up"){
            sortedMovies = movies.sort((movieObjA,movieObjB)=>{
                return movieObjA.dailyRentalRate-movieObjB.dailyRentalRate;
            })
        }
        else{
            sortedMovies = movies.sort((movieObjA,movieObjB)=>{
                return movieObjB.dailyRentalRate-movieObjA.dailyRentalRate;
            })
        }

        this.setState({
            movies: sortedMovies
        })
    }
    sortByStock = (e)=>{
        let className = e.target.className;
        let sortedMovies;
        let {movies} = this.state;
        if(className=="fas fa-sort-up"){
            sortedMovies = movies.sort((movieObjA,movieObjB)=>{
                return movieObjA.numberInStock-movieObjB.numberInStock;
            })
        }
        else{
            sortedMovies = movies.sort((movieObjA,movieObjB)=>{
                return movieObjB.numberInStock-movieObjA.numberInStock;
            })
        }

        this.setState({
            movies: sortedMovies
        })
    }
    render() {
        let {movies} = this.state;
        return (
            <div className="container">
            <div className="row">    
                <div className="col-md-3">hello</div>
                <div className="col-9">
                <input className="input-box" onClick={()=>{this.handleFilter()}}></input>
                <input className="pageNumber" value={currSearchText} onChange={this.setCurrentText}></input>
            <div className="movie-table">
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">
                            <i class="fas fa-sort-up" onClick={this.sortByStock}></i>
                            Stock
                            <i class="fas fa-sort-down" onClick={this.sortByStock}></i>
                        </th>
                        <th scope="col">
                            <i class="fas fa-sort-up" onClick={this.sortByRate}></i>
                            Rate
                            <i class="fas fa-sort-down" onClick={this.sortByRate}></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {movies.map((moviesObj)=>{
                            return(
                                <tr key={moviesObj._id}>
                                    {/* <th scope="row">1</th> */}
                                    {/* <tr scope="row" key={moviesObj._id}></tr> */}
                                    <td>{moviesObj.title}</td>
                                    <td>{moviesObj.genre.name}</td>
                                    <td>{moviesObj.numberInStock}</td>
                                    <td>{moviesObj.dailyRentalRate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={()=>{this.deleteMovie(moviesObj._id)}}>Delete</button></td>
                                </tr>   
                            )
                        })}
                    </tbody>
                    </table>
            </div>
                </div>   
            </div>
            </div>
        )
    }
}
