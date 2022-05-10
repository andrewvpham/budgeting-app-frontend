import { PieChart } from 'react-minimal-pie-chart';
import {onSubmit} from './Income';


import React, { Component } from 'react';
  
const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
  fill: 'white',
};


export default class Overview extends Component {



  incomeData; //Variable that we'll store data in

  constructor(props) { //Constructor sets up properties for the income class
    super(props);
    this.onChangePrimaryIncome = this.onChangePrimaryIncome.bind(this);
    this.onChangeSecondIncome = this.onChangeSecondIncome.bind(this);
    this.onChangeInvestments = this.onChangeInvestments.bind(this);
    this.onChangeExpenses = this.onChangeExpenses.bind(this);
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
  onChangeExpenses(e) {
      this.setState({ expenses: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }


  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('incomeStorage'));
    this.expensesData = JSON.parse(localStorage.getItem('expensesStorage'));
    this.setState({
      expenses: this.expensesData.expenses
    })
    if (localStorage.getItem('incomeStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            income: this.incomeData.income,
            secondIncome: this.incomeData.secondIncome,
            investments: this.incomeData.investments,
        })
    } else {
        this.setState({
            income: '',
            secondIncome: '',
            investments: '',
            expenses: ''
        })
    }
  }

  componentWillUpdate(nextProps, nextState) { //This triggers before the rendering happens and sets up the form state in local storage
    localStorage.setItem('incomeStorage', JSON.stringify(nextState));
  }



 render() {

  console.log(typeof this.state.income);
  return (
    //Expenses
      <div className="container rounded bg-light mb-5 mt-4 p-4 pb-5">
        <p className="h2">Overview</p>
        <div className="row">
        <div className="col-lg-2 mt-3">
        <p class="lead mb-0">Income Data Chart</p>
        <PieChart
            data={[
              { title: 'Primary Income', value: parseInt(this.state.income), color: '#bc5090'},
              { title: 'Secondary Income', value: parseInt(this.state.secondIncome), color: '#ff6361' },
              { title: 'Investments', value: parseInt(this.state.investments), color: '#ffa600' },
            ]}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              ...defaultLabelStyle,
            }}
          />
        </div>
        <div className="col-lg-2 mt-3 ">
        <p class="lead mb-0">Expenses Data Chart</p>
        <PieChart
            data={[
              { title: 'Entertainment', value: 10, color: '#004c6d'},
              { title: 'Food', value: 15, color: '#7aa6c2' },
              { title: 'Housing', value: 20, color: '#c1e7ff' },
            ]}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              ...defaultLabelStyle,
            }}
          />
        </div>
        <div className='col-lg-2 mt-3 '>
        <p class="lead mb-0 text-end">Net Profit Margin</p>
        
            <p className='text-end h6'>
              AHHI: ${(parseInt(this.state.income)+parseInt(this.state.secondIncome)+parseInt(this.state.investments))}
            </p>
            <p className='text-end h6 '>
            - Expenses: ${(parseInt(this.state.expenses))}
            </p>
            <hr></hr>
            <p className='text-end h6 '>
            Available funds: ${parseInt(this.state.income)+parseInt(this.state.secondIncome)+parseInt(this.state.investments)-(parseInt(this.state.expenses))}
            </p>
        </div>

        </div>
        
      </div>
    )
  }
}


/*
function Overview() {

  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
    fill: 'white',
  };

  return (
    <div className="container rounded bg-light mb-5 mt-4 p-4">
      <p className="h2">Overview component</p>
      <div className="col-lg-3 mx-auto mt-5">
      <PieChart
          data={[
            { title: 'Available spending', value: 10, color: '#E38627'},
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
      </div>
    </div>
  );
}

export default Overview;
*/