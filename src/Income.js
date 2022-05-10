
import React, { Component } from 'react';
  


export default class Income extends Component {

  incomeData; //Variable that we'll store data in

  constructor(props) { //Constructor sets up properties for the income class
    super(props);
    this.onChangePrimaryIncome = this.onChangePrimaryIncome.bind(this);
    this.onChangeSecondIncome = this.onChangeSecondIncome.bind(this);
    this.onChangeInvestments = this.onChangeInvestments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        income: '',
        secondIncome: '',
        investments: ''
    }
  }

  // Form Events
  onChangePrimaryIncome(e) {
        this.setState({ income: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
    }
  onChangeSecondIncome(e) {
      this.setState({ secondIncome: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }
  onChangeInvestments(e) {
    this.setState({ investments: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }

    onSubmit(e) {
        e.preventDefault()
        this.setState({
            income: this.state.income
        })
    }

  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('incomeStorage'));
    if (localStorage.getItem('incomeStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            income: this.incomeData.income,
            secondIncome: this.incomeData.secondIncome,
            investments: this.incomeData.investments

        })
    } else {
        this.setState({
            income: '',
            secondIncome: ''
        })
    }
  }

  componentWillUpdate(nextProps, nextState) { //This triggers before the rendering happens and sets up the form state in local storage
    localStorage.setItem('incomeStorage', JSON.stringify(nextState));
  }



 render() {
        return (
          <div className="container rounded bg-light mb-5 mt-4 p-4">
          <p className="h2">Income <span class="bi bi-pencil-square h6"></span></p>
          <p className='h4'>Total annual income: $ {(parseInt(this.state.income)+parseInt(this.state.secondIncome)+parseInt(this.state.investments)).toLocaleString()}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <label>Enter primary income:</label>
                        <input type="number" className="form-control" value={this.state.income} onChange={this.onChangePrimaryIncome} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter secondary income:</label>
                        <input type="number" className="form-control" value={this.state.secondIncome} onChange={this.onChangeSecondIncome} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter investments:</label>
                        <input type="number" className="form-control" value={this.state.investments} onChange={this.onChangeInvestments} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}
