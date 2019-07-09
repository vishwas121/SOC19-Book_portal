import React ,{Component} from 'react';
import axios from 'axios';


export default class Staff extends Component{
  constructor(props){
    super(props);
    this.state = {
      new_book : {
        title : "",
        author: "",
        barcode : "",
        status : true
      },
      newbook:[],
      activebook : []
    }
  }
  handleChange = e => {
    let { name , value } = e.target;
    if (e.target.type === "checkbox") {
          value = e.target.checked;
    }
    const xyz = { ...this.state.new_book , [name]:value };
    this.setState({new_book : xyz});
  }


  addBook = () => {
    const thing = this.state.new_book;
    var x =this.search(thing,true);
    if(x===1){
      if(thing.title===''){
        alert("no title");
      }
      else{
      axios
       .post("http://localhost:8000/api/catalogue/",thing)
       .then(res => this.getdata())
       .catch(err => alert("field missing or already there"));
      }
    }
    else{
      alert("already exists");
    }
  }

  deleteBook = () => {
    let item = this.state.new_book;
    var id = this.search(item,false);
    if ((id !==0) && (id !==-1)){
      var net = id.toString();
      var ur = "http://localhost:8000/api/catalogue/" + net;
      alert(ur);
      axios
      .delete(ur)
      .then(res => this.getdata());
    }
    else if(id ===0) {
      alert('no item found');
    } 
    else{
      alert("more than one item");
    }
    

  };
  search = (item,x) =>{
      const list = this.state.activebook;
      var is_present = false;
      const filter = item.title.toLowerCase();

      if(x){
      list.map(some => {
        var lis = some.title.toLowerCase();
        if(lis===filter)is_present = true;
        return 0 ;
        });
      if(is_present){return 0;}
      else return 1;
      }
      else{
            var filtered_item = list.filter(book => {
            const lc = book.title.toLowerCase();
            return lc.includes(filter);
      		} );
    

      		if(filtered_item.length ===1){
       		 	return filtered_item[0].id;
     	 	}
     		else if ( filtered_item.length === 0 ){
       			return 0;
     		}
      		else{
        		return -1;
      		}
		}
  }



  componentDidMount(){
    this.getdata();
  }
  getdata = () => {
      axios
          .get("api/catalogue/")
          .then(res => this.setState({ activebook: res.data}))
          .catch(err => console.log(err));
  }




  render(){
    return(
      <div>
        <h2>Add a new Book</h2>
        <button onClick={this.addBook} >Add new Book</button>
        <button onClick={this.deleteBook}>Delete book</button>
        <form>
          <input type="text" name="title" value={this.state.new_book.title} onChange={this.handleChange} placeholder="Title" />
          <input type="text" name="author" value={this.state.new_book.author} onChange={this.handleChange} placeholder="author" />
          <input type="text" name="barcode" value={this.state.new_book.barcode}  onChange={this.handleChange} placeholder="barcode" />
        </form>
        <table align='center'>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Barcode</th>
          </tr>
          {this.state.activebook.map(item =>(
             <tr>
             <td>{item.title}</td>
             <td>{item.author}</td>
             <td>{item.barcode}</td>
           </tr>
          ) )}
          </table>
      </div>
    )
  }


}
