import React, { Component } from "react";
// import { Grid, Box } from "@mui/material";
import ChartistGraph from "react-chartist";
// import Chart from "react-apexcharts";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
//   import "bootstrap/dist/css/bootstrap.min.css";
//   import "../../../assets/css/animate.min.css";
//   import "../../../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
//   import "../../../assets/css/demo.css";
//   import "@fortawesome/fontawesome-free/css/all.min.css";

export default class color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["call taken", "New lead", "Total lead", "Total conversion"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };

    this.state = {
      graphs: [
        { labels: ["40%", "20%", "40%"], series: [40, 20, 40] },
        { labels: ["60%", "10%", "30%"], series: [60, 10, 30] },
        { labels: ["30%", "40%", "30%"], series: [30, 40, 30] },
        { labels: ["25%", "50%", "25%"], series: [25, 50, 25] },
        { labels: ["50%", "30%", "20%"], series: [50, 30, 20] },
        { labels: ["20%", "60%", "20%"], series: [20, 60, 20] },
        { labels: ["10%", "80%", "10%"], series: [10, 80, 10] },
        { labels: ["70%", "20%", "10%"], series: [70, 20, 10] },
        { labels: ["35%", "35%", "30%"], series: [35, 35, 30] },
        { labels: ["15%", "65%", "20%"], series: [15, 65, 20] },
      ],
      options: {
        chartPadding: 20,
        labelOffset: 50,
        labelDirection: "explode",
        labelInterpolationFnc: (value) => `${value}`,
        labelInterpolationFnc: (value) => `${value}`,
        sliceColors: ["#FFC107", "#9C27B0", "#00ACC1"],
        showLabel: false // set showLabel to false
      },
    };
  }

  render() {
    return (
      // <Grid>
      <Col md="4">
        {this.state.graphs.map((graph, index) => (
        <Card>
          <Card.Header>
            <Card.Title as="h4" style={{ textAlign: "center" }}>
              Kajal
            </Card.Title>
            {/* <p className="card-category">Last Campaign Performance</p> */}
          </Card.Header>
          <Card.Body>
            <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
              <div id="chart">
                {/* <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="pie"
                  /> */}
              </div>
              
              
                <ChartistGraph
                  key={index}
                  data={graph}
                  options={this.state.options}
                  type="Pie"
                  style={{ width: "200px", height: "200px" }}
                />
             
            </div>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Open <i className="fas fa-circle text-danger"></i>
              Bounce <i className="fas fa-circle text-warning"></i>
              Unsubscribe
            </div>
            <hr></hr>
            <div className="stats" style={{ alignItems: "justify" }}>
              <i className="far fa-clock"></i>
              {/* <button> */}
              <p className="card-category" style={{ textAlign: "justify" }}>
                {" "}
                ₹ 55555 /-{" "}
              </p>

              {/* </button> */}
            </div>
          </Card.Body>
        </Card>
         ))}
      </Col>
      // </Grid>
    );
  }
}
