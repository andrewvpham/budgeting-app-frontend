import React, { Component } from 'react';
  


export default class Expenses extends Component {

  incomeData; //Variable that we'll store data in

  constructor(props) { //Constructor sets up properties for the income class
    super(props);
    this.onChangeExpenses = this.onChangeExpenses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        expenses: ''
    }
  }

  // Form Events
  onChangeExpenses(e) {
        this.setState({ expenses: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({
            expenses: this.state.expenses
        })
    }

  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('expensesStorage'));
    if (localStorage.getItem('expensesStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            expenses: this.incomeData.expenses
        })
    } else {
        this.setState({
            expenses: ''
        })
    }
  }

// componentWillUpdate is apparently deprecated...need to figure out up to date method
  componentWillUpdate(nextProps, nextState) { //This triggers before the rendering happens and sets up the form state in local storage
    localStorage.setItem('expensesStorage', JSON.stringify(nextState));
  }



render() {
        return (
          <div className="container rounded bg-light mb-5 mt-4 p-4">
          <p className="h2">Expenses <span class="bi bi-pencil-square h6"></span></p>
          <p className='h4'>Total annual expenses: ${parseInt(this.state.expenses).toLocaleString()}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <label>Enter expenses:</label>
                        <input type="number" className="form-control" value={this.state.expenses} onChange={this.onChangeExpenses} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}



//Old code below
/*
function Expenses() {
  return (
    <div className="container rounded bg-light mb-5 mt-4 p-4">
      <p className="h2">Expenses component <span class="bi bi-pencil-square h4"></span></p>
    </div>
  );
}

export default Expenses; */
