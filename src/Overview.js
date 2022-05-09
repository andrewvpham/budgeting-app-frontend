import { PieChart } from 'react-minimal-pie-chart';

function Overview() {


  return (
    <div className="container rounded bg-light mb-5 mt-4 p-4">
      <p className="h2">Overview component</p>
      <div className="col-lg-3 mx-auto mt-5">
      <PieChart
          data={[
            { title: 'One', value: 10, color: '#E38627'},
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}
        />
      </div>
    </div>
  );
}

export default Overview;
