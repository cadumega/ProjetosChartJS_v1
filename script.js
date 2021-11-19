var canvas = document.getElementById("pieChart");
var ctx = canvas.getContext('2d');

 Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["Candidato A ", "Canditado B"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                'royalblue',
                'lightpink'],
            data: [25, 75],

            borderColor:	['black', 'black'],
            borderWidth: [1,1],
            formatter: function (value) {
                return value + "%";
                
            }
        }
    ]
};

var options = {
        title: {
                  display: true,
                  text: 'Pesquisa de intenção de voto.',
                  position: 'top'
              },
        rotation: -1.2 * Math.PI,
        
};

var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

//Example 2
var densityCanvas = document.getElementById("teste2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Density of Planets (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: 'rgba(0, 23, 68, 0.6)',
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData],
  }
});

// Example 3
var densityCanvas = document.getElementById("densidadeChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Density of Planet (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: 'rgba(0, 99, 132, 0.6)',
  borderWidth: 0,
  yAxisID: "y-axis-density"
};

var gravityData = {
  label: 'Gravity of Planet (m/s2)',
  data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
  backgroundColor: 'rgba(99, 132, 0, 0.6)',
  borderWidth: 0,
  yAxisID: "y-axis-gravity"
};

var planetData = {
  labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
  datasets: [densityData, gravityData]
};

var chartOptions = {
  scales: {
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],
    yAxes: [{
      id: "y-axis-density"
    }, {
      id: "y-axis-gravity"
    }]
  }
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: planetData,
  options: chartOptions
});

// Example 4
var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Density of Planets (kg/m3)',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};

var chartOptions = {
  scales: {
    yAxes: [{
      barPercentage: 0.5
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    }
  }
};

var barChart = new Chart(densityCanvas, {
  type: 'horizontalBar',
  data: {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData],
  },
  options: chartOptions
});

// Example 5
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    backgroundColor: [
        "royalblue",
    ]
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black',
      
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

// Example 6
var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  
  var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var config = {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: chartColors.red,
        borderColor: chartColors.red,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
        fill: false,
      }, {
        label: "My Second dataset",
        fill: false,
        backgroundColor: chartColors.blue,
        borderColor: chartColors.blue,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ],
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
      tooltips: {
        mode: 'label',
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
  };
  
  
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
  
  