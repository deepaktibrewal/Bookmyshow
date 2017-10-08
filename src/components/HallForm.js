import React, { Component } from 'react';
import App from './App';
import '../stylesheets/Moviehall.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Bookseats from './Bookseats';
import Seatbooking from './Seatbooking';

export class HallForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hallSeat: "",
      movie: "",
      au: "U",
      genre: "",
      format: "2d",
      hall: "",
      book: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      book:false
    });
  }

  handleSubmit= (event) =>{
    event.preventDefault();
    this.setState({book: true});
  }

  render(){
    return(
      <div>
      <div>
        <App />
      </div>

      <div className="container form">
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>
              Name:
            </label>
              <input className="form-control" name="movie" type="text" value={this.state.movie} required onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>
              A/U:
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" name="au" value={this.state.au} onChange={this.handleChange}>
                <option value="U">U</option>
                <option value="U/A">U/A</option>
                <option value="A">A</option>
                <option value="S">S</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>
              Genre:
            </label>
              <input className="form-control" name="genre" type="text" value={this.state.genre} required onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>
              Format:
              <select className="custom-select mb-2 mr-sm-2 mb-sm-0" name="format" value={this.state.format} onChange={this.handleChange}>
                <option value="2d">2D</option>
                <option value="3d">3D</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>
              HallName:
            </label>
              <input className="form-control" name="hall" type="text" value={this.state.hall} required onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>
              Showtime:
            </label>
              <input type="time" name="usr_time" defaultValue="13:30"/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div>
        {this.state.book ? <Seatbooking /> : null }
      </div>
      </div>
    )
  }
}
