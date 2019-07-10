import React ,{Component} from 'react';
import axios from 'axios';

export default class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata = () => {
        axios
          .get("api/v1/users/")
          .then(res => this.setState({ users: res.data}))
          .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Passsword</th>
                    </tr>
                    {this.state.users.map(user =>{
                        return (
                            <tr>
                                <td>{user.Username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        )
                    })}
                </table>
                <br/>
                
            </div>
        )
    }
}
