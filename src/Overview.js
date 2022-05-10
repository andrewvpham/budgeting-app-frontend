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
    //Income
    this.onChangePrimaryIncome = this.onChangePrimaryIncome.bind(this);
    this.onChangeSecondIncome = this.onChangeSecondIncome.bind(this);
    this.onChangeInvestments = this.onChangeInvestments.bind(this);
    this.onChangeExpenses = this.onChangeExpenses.bind(this);
    //Expenses
    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeHousing = this.onChangeHousing.bind(this);
    this.onChangeEntertainment = this.onChangeEntertainment.bind(this);
    this.onChangeTransportation = this.onChangeTransportation.bind(this);
    this.onChangeMisc = this.onChangeMisc.bind(this);
    this.state = {
      income: '',
      secondIncome: '',
      investments: '',
      food: '',
      housing: '',
      entertainment: '',
      transportation: '',
      misc: ''
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


  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('incomeStorage'));
    this.expensesData = JSON.parse(localStorage.getItem('expensesStorage')); //cookie for expenses

    if (localStorage.getItem('incomeStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            income: this.incomeData.income,
            secondIncome: this.incomeData.secondIncome,
            investments: this.incomeData.investments,
            food: this.expensesData.food,
            housing: this.expensesData.housing,
            entertainment: this.expensesData.entertainment,
            transportation: this.expensesData.transportation,
            misc: this.expensesData.misc
        })
    } else {
        this.setState({
          income: '',
          secondIncome: '',
          investments: '',
          food: '',
          housing: '',
          entertainment: '',
          transportation: '',
          misc: ''
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
            animate
            animationDuration={800}
            animationEasing="ease-out"
            center={[50, 50]}
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
            animate
            animationDuration={1000}
            animationEasing="ease-out"
            center={[50, 50]}
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
        
            <p className='text-end h6' data-toggle="tooltip" title="Annual Household Income">
              AHHI: ${(parseInt(this.state.income)+parseInt(this.state.secondIncome)+parseInt(this.state.investments)).toLocaleString()}
            </p>
            <p className='text-end h6 '>
            - Expenses: ${(parseInt(this.state.food)+parseInt(this.state.housing)+parseInt(this.state.entertainment)+parseInt(this.state.transportation)+parseInt(this.state.misc)).toLocaleString()}
            </p>
            <hr></hr>
            <p className='text-end h6 '>
            Available funds: ${((parseInt(this.state.income)+parseInt(this.state.secondIncome)+parseInt(this.state.investments))-(parseInt(this.state.food)+parseInt(this.state.housing)+parseInt(this.state.entertainment)+parseInt(this.state.transportation)+parseInt(this.state.misc))).toLocaleString()}
            </p>
            <small className='text-end d-block'>
            Note: You may need to refresh the page in order for the data charts to update
            </small>
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