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
          .get("api/users/")
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
                                <td>{user.name}</td>
                                <td>{user.roll_no}</td>
                                <td>{user.password}</td>
                            </tr>
                        )
                    })}
                </table>
                <br/>
                <table>
                    <tr>
                        <th>Book name</th>
                        <th>Book author</th>
                        <th>Book barcode</th>
                    </tr>
                    {this.state.users.map(user =>{
                        return (
                            <tr>
                                <td>{user.circulation_history.title}</td>
                                <td>{user.circulation_history.author}</td>
                                <td>{user.circulation_history.barcode}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
