import React ,{Component} from 'react';
import axios from 'axios';
class App extends Component{
 constructor( props){
   super(props);
   this.state = {
     item :{
       title : "",
       author: "",
       barcode : "",
       status : false
     },
     book : []
   }
  }
componentDidMount(){
   this.getdata();
}
getdata = () => {
  axios
          .get("api/catalogue/") 
          .then(res => this.setState({ book: res.data}))
          .catch(err => console.log(err));
}
renderbooks = () => {
  const item = this.state.book;
  return item.map(func => (
    <tr>
    <td>{ func.id }</td>
    <td>{func.title}</td>
</tr>
  ));
};
  render(){
    return (
      <div className='home'>
        <table>
          <tr>
            <th>Name</th>
            <th>Author</th>
          </tr>
          { this.renderbooks() }
        </table>
   
      </div>
    );
  }
}
export default App;



