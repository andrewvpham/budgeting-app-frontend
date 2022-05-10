import React, { Component } from 'react';
  


export default class Expenses extends Component {

  incomeData; //Variable that we'll store data in

  constructor(props) { //Constructor sets up properties for the income class
    super(props);
    this.onChangeExpenses = this.onChangeExpenses.bind(this);
    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeHousing = this.onChangeHousing.bind(this);
    this.onChangeEntertainment = this.onChangeEntertainment.bind(this);
    this.onChangeTransportation = this.onChangeTransportation.bind(this);
    this.onChangeMisc = this.onChangeMisc.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        expenses: '',
        food: '',
        housing: '',
        entertainment: '',
        transportation: '',
        misc: '',
    }
  }

  // Form Events
  onChangeExpenses(e) {
        this.setState({ expenses: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }
    onChangeFood(e) {
      this.setState({ food: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }
  onChangeHousing(e) {
    this.setState({ housing: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
}
onChangeEntertainment(e) {
  this.setState({ entertainment: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
}
onChangeTransportation(e) {
  this.setState({ transportation: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
}
onChangeMisc(e) {
  this.setState({ misc: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
}


    onSubmit(e) {
        e.preventDefault()
        this.setState({
            expenses: this.state.expenses,
            food: this.state.food,
            housing: this.state.housing,
            entertainment: this.state.entertainment,
            transportation: this.state.transportation,
            misc: this.state.misc
        })
    }

  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('expensesStorage'));
    if (localStorage.getItem('expensesStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            expenses: this.incomeData.expenses,
            food: this.incomeData.food,
            housing: this.incomeData.housing,
            entertainment: this.incomeData.entertainment,
            transportation: this.incomeData.transportation,
            misc: this.incomeData.misc
        })
    } else {
        this.setState({
            expenses: '',
            food: '',
            housing: '',
            entertainment: '',
            transportation: '',
            misc: '',
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
          <p className='h4'>Total annual expenses: ${(parseInt(this.state.food)+parseInt(this.state.housing)+parseInt(this.state.entertainment)+parseInt(this.state.transportation)+parseInt(this.state.misc)).toLocaleString()}</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <label>Enter food expenses:</label>
                        <input type="number" className="form-control" value={this.state.food} onChange={this.onChangeFood} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter housing expenses:</label>
                        <input type="number" className="form-control" value={this.state.housing} onChange={this.onChangeHousing} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter entertainment expenses:</label>
                        <input type="number" className="form-control" value={this.state.entertainment} onChange={this.onChangeEntertainment} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter transportation expenses:</label>
                        <input type="number" className="form-control" value={this.state.transportation} onChange={this.onChangeTransportation} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Enter miscellaneous expenses:</label>
                        <input type="number" className="form-control" value={this.state.misc} onChange={this.onChangeMisc} />
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
