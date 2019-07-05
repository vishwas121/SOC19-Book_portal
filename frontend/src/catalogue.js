import React ,{Component} from 'react';
import axios from 'axios';
import "./catalogue.css"
import SearchInput ,{createFilter} from 'react-search-input';


const  KEYS_TO_FILTERS = [ 'title','author','barcode'];



class Catalogue extends Component {
   constructor( props){
   super(props);

   this.state = {
     item :{
       title : "",
       author: "",
       barcode : "",
       status : false
     },
     book : [],
     searchTerm : '',
     search: []
   }
       this.searchUpdated = this.searchUpdated.bind(this)
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
  return item.map(book => (
    <tr class="row100 body" >
      <td class="cell100 column1" >{book.title}</td>
      <td class="cell100 column2">{book.author}</td>
      <td class="cell100 column3">{ book.barcode}</td>
		  <td class="cell100 column4">{book.status ? "no":"yes"}</td>
		  <td class="cell100 column5">{book.id} </td>
    </tr>
  ));
};


searchResult = () => {
  return this.state.search.map(book => (
    <tr class="row100 body" >
      <td class="cell100 column1" >{book.title}</td>
      <td class="cell100 column2">{book.author}</td>
      <td class="cell100 column3">{ book.barcode}</td>
		  <td class="cell100 column4">{book.status ? "no":"yes"}</td>
		  <td class="cell100 column5">{book.id} </td>
    </tr>
  ));
};
searchUpdated( term){
//  this.setState({searchTerm : term})
 const books = this.state.book
  const list = books.filter(createFilter(this.state.searchTerm,KEYS_TO_FILTERS))
//  this.setState({search: list})
}

           //    {(this.state.searchTerm.length === 0) ? this.renderbooks() : this.searchResult()}
  render(){
    return (
<div className="main_div">
      <div className="SearchBar">
        <SearchInput className="search-input" onChange={this.searchUpdated() , console.log("did")} placeholder="Search by name or author" />
      </div>
      <div class="table_of_content">
      <div class="limiter">
		    <div class="container-table100">
			     <div class="wrap-table100">
      <div class="table100 ver1 m-b-110">
          <div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">Book Title</th>
									<th class="cell100 column2">Author</th>
									<th class="cell100 column3">Barcode</th>
									<th class="cell100 column4">Available</th>
									<th class="cell100 column5">Nothing</th>
								</tr>
							</thead>
						</table>
			    </div>
          <div class="table100-body js-pscroll">
						<table>
							<tbody>
                  {this.searchResult()}

              </tbody>
						</table>
					</div>
      </div>
      </div>
      </div>
      </div></div></div>
    );
  }
}
export default Catalogue;
