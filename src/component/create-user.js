import React, {Component} from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''            
        }
    }

    onChangeToUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
        };

        //console.log(newUser);


        axios.post('http://localhost:4000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            exe_username: ''
        });
        
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeToUserName}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}