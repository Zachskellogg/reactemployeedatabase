import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Row from "../components/Row"
import Container from "../components/Container"
import Column from "../components/Column"
import "./styles.css";


class AllEmp extends Component {
  state = {
    allResults: [],
    allResultsParsed: [],
    results: [],
  };

  componentDidMount() {
    API.findPeople().then(res => {
      this.setState({
        allResults: res.data.results,
        allResultsParsed: res.data.results,
        results: res.data.results
      });
    });
  }

  handelSearchFN = (event) => {
    const queryFN = event.target.value;
    this.sortPeopleFN(queryFN);
  }
  handelSearchLN = (event) => {
    const queryLN = event.target.value;
    this.sortPeopleLN(queryLN);
  }

  sortPeopleLN = (value) => {
    let searchResults = this.state.allResults.filter((x) => { 
      return x.name.last.toLowerCase().includes(value)
    }) 
    this.setState({
      allResultsParsed: searchResults
    })
  }
  sortPeopleFN = (value) => {
    let searchResults = this.state.allResults.filter((x) => { 
      return x.name.first.toLowerCase().includes(value);
    }) 
    this.setState({
      allResultsParsed: searchResults
    })
  }
  render() {
    const results = this.state.allResultsParsed;
    return (
      <div>
        <h1 className="text-center">Employees</h1>
        <form className="search-form form-inline">
          <div>
            <input className = "employeeSearch" placeholder="Search by Employee's First Name. "  onChange = {this.handelSearchFN} />
            <input className = "employeeSearch" placeholder="Search by Employee's Last Name. "  onChange = {this.handelSearchLN} />
          </div>
        </form>
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    fullname = {employees.name.first + employees.name.last}
                    age={employees.dob.age}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                    ssn={employees.id.value}
                  />
                </Column>
              ))
            }
          </Row>
        </Container>

      </div>
    );
  }
}

export default AllEmp;