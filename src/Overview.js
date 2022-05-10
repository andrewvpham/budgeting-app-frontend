import { PieChart } from 'react-minimal-pie-chart';


import React, { Component } from 'react';
  
const defaultLabelStyle = {
  fontSize: '5px',
  fontFamily: 'sans-serif',
  fill: 'white',
};

var incomeOverview = "";

export default class Overview extends Component {



  incomeData; //Variable that we'll store data in

  constructor(props) { //Constructor sets up properties for the income class
    super(props);
    this.onChangePrimaryIncome = this.onChangePrimaryIncome.bind(this);
    this.onChangeExpenses = this.onChangeExpenses.bind(this);
    this.state = {
        income: '',
        expenses:''
    }
  }

  // Form Events
  onChangePrimaryIncome(e) {
        this.setState({ income: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
    }
  onChangeExpenses(e) {
      this.setState({ expenses: e.target.value }) //e.target.value retrieves the value of that element (input field for example) which is Name
  }


  // React Life Cycle
  componentDidMount() {
    this.incomeData = JSON.parse(localStorage.getItem('incomeStorage'));
    if (localStorage.getItem('incomeStorage')) { //Searches local storage in browser for item "user" and assigns the data retrieved from the form events
        this.setState({
            income: this.incomeData.income
        })
    } else {
        this.setState({
            income: ''
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
    <div className="container rounded bg-light mb-5 mt-4 p-4">
      <p className="h2">Overview component</p>
      <div className="row">
      <div className="col-lg-3 mt-3">
      <PieChart
          data={[
            { title: 'Primary Income', value: parseInt(this.state.income), color: '#E38627'},
            { title: 'Secondary Income', value: 15, color: '#C13C37' },
            { title: 'Investments', value: 20, color: '#6A2135' },
          ]}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
      </div>
      <div className="col-lg-3 mt-3">
      <PieChart
          data={[
            { title: 'Entertainment', value: 10, color: '#E38627'},
            { title: 'Food', value: 15, color: '#C13C37' },
            { title: 'Housing', value: 20, color: '#6A2135' },
          ]}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
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