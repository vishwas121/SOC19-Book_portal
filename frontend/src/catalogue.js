import React ,{Component} from 'react';
import axios from 'axios';

class Catalogue extends Component {
   constructor( props){
   super(props);

   this.state = {
     item :{
       title : "",
       author: "",
       barcode : "",
       status : false,
       issue_date:"",
       issued_to:''
     },
     book : [],
   }
  }

  componentDidMount(){
    this.getdata();

  }
  /*
  setdate = ()=>{
      this.state.book.map(item => (
          date = item.date;
          date.setDate( date + 7);
          this.setState(dates:date);
      ))
  }
  */


  getdata = () => {
    axios
          .get("api/catalogue/")
          .then(res => this.setState({ book: res.data}))
          .catch(err => console.log(err));
  }



  render(){
    return (
          <div>
                <List items={this.state.book} delete={this.removeItem} />
          </div>
    );
  };
}
class List extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          filtered: []
      };
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  this.setState({
    filtered: this.props.items
  });
}

componentWillReceiveProps(nextProps) {
  this.setState({
    filtered: nextProps.items
  });
}

  handleChange(e) {
      // Variable to hold the original version of the list
  let currentList = [];
      // Variable to hold the filtered list before putting into state
  let newList = [];

      // If the search bar isn't empty
  if (e.target.value !== "") {
          // Assign the original list to currentList
    currentList = this.props.items;

          // Use .filter() to determine which items should be displayed
          // based on the search terms
    newList = currentList.filter(item => {
      const newstr = item.title + item.author + item.barcode;
              // change current item to lowercase
      const lc = newstr.toLowerCase();
              // change search term to lowercase
      const filter = e.target.value.toLowerCase();
              // check to see if the current list item includes the search term
              // If it does, it will be added to newList. Using lowercase eliminates
              // issues with capitalization in search terms and search content
      return lc.includes(filter);
    });
  } else {
          // If the search bar is empty, set newList to original task list
    newList = this.props.items;
  }
      // Set the filtered state based on what our rules added to newList
  this.setState({
    filtered: newList
  });
}
render() {
    return (
        <div>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
            						<table>
            								<tr>
            									<th>Book Title</th>
            									<th >Author</th>
            									<th>Barcode</th>
            									<th>Available</th>
                              <th>Issued to</th>
                              <th>Due date</th>
            								</tr>
                    {this.state.filtered.map(item => (
                            <tr >
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td >{item.barcode}</td>
          		                  <td>{item.status ? "yes":"no"}</td>
                                 <td>{item.status ? "": item.issued_to}</td>
                                 <td>{item.status ?"": item.issue_date }</td>
                            </tr>
                    ))}
                  </table>
                </div>
    )
}
}






export default Catalogue;
