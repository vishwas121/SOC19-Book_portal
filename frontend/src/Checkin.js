import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import axios from 'axios';



export default class Check extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bar_checkin : "",
        date_checkin : "",
        card_checkout : "",
        bar_checkout : "",
        date_checkout: "",
        books: [],
        users:[]
      };
    
      this.checkin = this.checkin.bind(this);
      this.checkout= this.checkout.bind(this);
      this.search_barcode_in=this.search_barcode_in.bind(this);
      this.search_barcode_out=this.search_barcode_out.bind(this);
      this.handleBar_checkin= this.handleBar_checkin.bind(this);
      this.handleDate_checkin= this.handleDate_checkin.bind(this);
      this.handleCard_checkout= this.handleCard_checkout.bind(this);
      this.handleBar_checkout= this.handleBar_checkout.bind(this);
      this.handleDate_checkout= this.handleDate_checkout.bind(this);
      this.search_user = this.search_user.bind(this);
        }

    handleBar_checkin(e) {
        this.setState({bar_checkin: e.target.value});
    }
    handleDate_checkin(e) {
        this.setState({date_checkin: e.target.value});
    }
    handleCard_checkout(e) {
        this.setState({card_checkout: e.target.value});
    }
    handleBar_checkout(e) {
        this.setState({bar_checkout: e.target.value});
    }
    handleDate_checkout(e) {
        this.setState({date_checkout: e.target.value});
    }



    componentDidMount(){
    this.getdata();
    }

    getdata = () => {
        axios
              .get("api/catalogue/")
              .then(res => this.setState({ books: res.data}))
              .catch(err => console.log(err));
        axios
              .get("api/users/")
              .then(res => this.setState({ users: res.data}))
              .catch(err => console.log(err));
      }
    




    render() {
      return (

        <div className="content">
        <h1>Book Circulation</h1>
        <div align='right'><button onclick="logout()">logout</button> </div>
        <hr />
        <Container>
            <Row>
                <Col>
                <div align='center'>
                    <h2 align='center'> CHECKIN</h2>
                    <form name='check_in'>
                        Book Code <input type='text' name='bar_checkin' placeholder="Please enter book code" value={this.state.bar_checkin} onChange={this.handleBar_checkin} /><br/> <br/>
                        Date <input type='text' name='date_checkin' placeholder="" value={this.state.date_checkin} onChange={this.handleDate_checkin} /><br/> <br/>
                        <button type="button" onClick={this.checkin}>CHECKIN</button>
                        <br/><br/>
                        <br/><br/><br/>
                    </form>

                     </div>
                </Col>

                <Col>
                <div align='center'>
                    <h2 align='center'> CHECKOUT</h2>
                    <form name='checkout'>
                        Card No. <input type="text" name="card_checkout" placeholder="Enter card no." value={this.state.card_checkout} onChange={this.handleCard_checkout} /> <br/><br/>
                        Book Code <input type='text' name='bar_checkout' placeholder="Please enter book code" value={this.state.bar_checkout} onChange={this.handleBar_checkout} /><br/> <br/>
                        Date <input type='text' name='date_checkout' placeholder="dd/mm/yy" value={this.state.date_checkout} onChange={this.handleDate_checkout} /><br/> <br/>
                        <button type="button" onClick={this.checkout}>CHECKOUT</button>
                        <br/><br/>
                        <br/><br/><br/>
                    </form>
                    <table>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>barcode</th>
                        </tr>
                        {this.state.books.map(item => (
                            <tr >
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td >{item.barcode}</td>
                            </tr>
                        ))}
                    </table>
                     </div>

                </Col>


            </Row>









            </Container>

        </div>

      );
    }

    search_barcode_in(){
        const bar = this.state.bar_checkin.toLowerCase();

        const result = this.state.books.filter(item =>(
            item.barcode.toLowerCase().includes(bar)
        ));
        return result[0];

    }
    search_barcode_out(){
        const bar = this.state.bar_checkout.toLowerCase();

        const result = this.state.books.filter(item =>(
            item.barcode.toLowerCase().includes(bar)
        ));
        return result[0];

    }
    checkin(){
        var book = this.search_barcode_in();
        if(book.status){
            alert("Already checked in!");
        }
        else{
        book.status = true;
        book.issued_to = "";
        console.log(book);
        var url = "http://localhost:8000/api/catalogue/" + book.id + "/";
        console.log(url);
        axios
            .put(url,book)
            .then(res => alert(book.title+" checked in"))
            .catch(err=> console.log(err));
        }
    }
    search_user(roll){
        axios
            .get("/api/users/user_search",{params:{roll_no:roll}})
            .then(res => this.setState({work:res.data}))
            .catch(err => console.log(err));
    }
    checkout(){
        const book = this.search_barcode_out();
        book.status = false;
        book.issued_to = this.state.card_checkout;
        book.issue_date = new Date().getFullYear() + '-' + new Date().getMonth() + '-'+ new Date().getDate();
        var url = "http://localhost:8000/api/catalogue/" + book.id + "/";
        axios
            .put(url,book)
            .then(res => alert(book.title+" checked out"))
            .catch(err=> console.log(err));

        /*const user =this.search_user();
        user.circulation_history = {'title': book.title,'author':book.author,'barcode':book.barcode,'status':book.status};
        axios
            .put("http://localhost:8000/api/users/${user.id}/",user)
            .then(res => alert(book.title +"added to " + user.name))
            .catch(err => console.log(err));*/

    }



  }
