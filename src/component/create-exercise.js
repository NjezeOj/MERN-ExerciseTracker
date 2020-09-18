import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class ExerciseLog extends Component {
    constructor(props){
        super(props);

        this.state = {
            username:'',
            description:'',
            duration: 0,
            date: new Date(),
            users: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeToUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onChangeToDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onChangeToDuration = (e) => {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeToDate = (date) => {
        this.setState({
            date: date
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const exercise ={
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date           
        };

        console.log(exercise);

        axios.post('http://localhost:4000/exercises/add', exercise)
            .then(res => console.log(res.data));
        window.location = '/';
    }
    


    render() {
        return (
            <div>
                <h3>Create New Exercise-Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeToUserName}>
                            {
                            this.state.users.map(function (user) {
                                return <option
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeToDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes)</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeToDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <DatePicker
                            selected={this.state.date}
                            onchange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise-Log" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        );
    }
}