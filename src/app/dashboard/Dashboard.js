import React, { Component } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import Card from "./Card";

export class Dashboard extends Component {

  transactionHistoryData =  {
    labels: ["Home Room", "Gymnasium","Cafeteria", "Atrium", "Remaining"],
    datasets: [{
        data: [146, 397, 27, 67, 163],
        backgroundColor: [
          "#00d25b", "#0090e7", "#8f5fe8", "#ffab00", "#111111"
        ]
      }
    ]
  };

  weeklyHistoryData =  {
    labels: ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"],
    datasets: [{
        label: "",
        data: [324, 137, 112, 76, 56, 243, 378],
        backgroundColor: [
          "#0090e7"//"#00d25b"//, "#0090e7", "#8f5fe8", "#ffab00", "#111111"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
          borderWidth: 0
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  render () {
    return (
      <div>
        <div className="row">
          <Card title="Home Room" value="146"max="200" />
          <Card title="Gymnasium" value="397" max="400" />
          <Card title="Cafeteria" value="27" max="150" />
          <Card title="Atrium" value="67" max="50" />
        </div>

        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Total Users</h4>
                <div className="aligner-wrapper">
                    <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">800</h5>
                    <p className="text-small text-muted text-center mb-0">Total Capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Users by Day</h4>
                <div className="aligner-wrapper">
                  <Line data={this.weeklyHistoryData} options={this.transactionHistoryOptions} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
