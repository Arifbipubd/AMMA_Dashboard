/** @format */

function getChartColorsArray(r) {
  if (null !== document.getElementById(r)) {
    var r = document.getElementById(r).getAttribute("data-colors");
    return (r = JSON.parse(r)).map(function (r) {
      var o = r.replace(" ", "");
      if (-1 === o.indexOf(",")) {
        var a = getComputedStyle(document.documentElement).getPropertyValue(o);
        return a || o;
      }
      r = r.split(",");
      return 2 != r.length
        ? o
        : "rgba(" +
            getComputedStyle(document.documentElement).getPropertyValue(r[0]) +
            "," +
            r[1] +
            ")";
    });
  }
}
(Chart.defaults.borderColor = "rgba(133, 141, 152, 0.1)"),
  (Chart.defaults.color = "#858d98");
var islinechart = document.getElementById("lineChart");
(lineChartColor = getChartColorsArray("lineChart")),
  islinechart.setAttribute("width", islinechart.parentElement.offsetWidth);
var lineChart = new Chart(islinechart, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    datasets: [
      {
        label: "Sales Analytics",
        fill: !0,
        lineTension: 0.5,
        backgroundColor: lineChartColor[0],
        borderColor: lineChartColor[1],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: lineChartColor[1],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: lineChartColor[1],
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80],
      },
      {
        label: "Monthly Earnings",
        fill: !0,
        lineTension: 0.5,
        backgroundColor: lineChartColor[2],
        borderColor: lineChartColor[3],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: lineChartColor[3],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: lineChartColor[3],
        pointHoverBorderColor: "#eef0f2",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36],
      },
    ],
  },
  options: {
    x: { ticks: { font: { family: "Poppins" } } },
    y: { ticks: { font: { family: "Poppins" } } },
    plugins: { legend: { labels: { font: { family: "Poppins" } } } },
  },
});

var isbarchart = document.getElementById("bar");
(barChartColor = getChartColorsArray("bar")),
  isbarchart.setAttribute("width", isbarchart.parentElement.offsetWidth);
var barChart = new Chart(isbarchart, {
  type: "bar",
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Dhaka",
        backgroundColor: "#68D4CD",
        borderColor: "#68D4CD",
        borderWidth: 1,
        hoverBackgroundColor: "#68D4CD",
        hoverBorderColor: "#68D4CD",
        data: [20, 25, 17, 21, 30, 20, 24, 27],
      },
      {
        label: "Barishal",
        backgroundColor: "#CFF67B",
        borderColor: "#CFF67B",
        borderWidth: 1,
        hoverBackgroundColor: "#CFF67B",
        hoverBorderColor: "#CFF67B",
        data: [19, 32, 25, 37, 21, 28, 30, 24],
      },
      {
        label: "Chattogram",
        backgroundColor: "#94DAFB",
        borderColor: "#94DAFB",
        borderWidth: 1,
        hoverBackgroundColor: "#94DAFB",
        hoverBorderColor: "#94DAFB",
        data: [31, 37, 27, 19, 23, 31, 20, 27],
      },
      {
        label: "Khulna",
        backgroundColor: "#FD8080",
        borderColor: "#FD8080",
        borderWidth: 1,
        hoverBackgroundColor: "#FD8080",
        hoverBorderColor: "#FD8080",
        data: [21, 23, 31, 25, 15, 27, 32, 24],
      },
      {
        label: "Rajshahi",
        backgroundColor: "#6D848E",
        borderColor: "#6D848E",
        borderWidth: 1,
        hoverBackgroundColor: "#6D848E",
        hoverBorderColor: "#6D848E",
        data: [39, 21, 34, 29, 31, 25, 22, 32],
      },
      {
        label: "Rangpur",
        backgroundColor: "#26A0FC",
        borderColor: "#26A0FC",
        borderWidth: 1,
        hoverBackgroundColor: "#26A0FC",
        hoverBorderColor: "#26A0FC",
        data: [35, 19, 21, 25, 26, 30, 40, 26],
      },
      {
        label: "Mymenshing",
        backgroundColor: "#26E7A6",
        borderColor: "#26E7A6",
        borderWidth: 1,
        hoverBackgroundColor: "#26E7A6",
        hoverBorderColor: "#26E7A6",
        data: [23, 39, 21, 25, 36, 40, 27, 29],
      },
      {
        label: "Sylhet",
        backgroundColor: "#8B75D7",
        borderColor: "#8B75D7",
        borderWidth: 1,
        hoverBackgroundColor: "#8B75D7",
        hoverBorderColor: "#8B75D7",
        data: [32, 25, 31, 28, 24, 19, 27, 36],
      },
    ],
  },
  options: {
    x: { ticks: { font: { family: "Poppins" } } },
    y: { ticks: { font: { family: "Poppins" } } },
    plugins: { legend: { labels: { font: { family: "Poppins" } } } },
  },
});

var isbarchart = document.getElementById("bar2");
(barChartColor = getChartColorsArray("bar")),
  isbarchart.setAttribute("width", isbarchart.parentElement.offsetWidth);
var barChart = new Chart(isbarchart, {
    type: "bar",
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Dhaka",
          backgroundColor: "#b33dc6",
          borderColor: "#b33dc6",
          borderWidth: 1,
          hoverBackgroundColor: "#b33dc6",
          hoverBorderColor: "#b33dc6",
          data: [10, 15, 17, 11, 13, 10, 4, 7],
        },
        {
          label: "Barishal",
          backgroundColor: "#f46a9b",
          borderColor: "#f46a9b",
          borderWidth: 1,
          hoverBackgroundColor: "#f46a9b",
          hoverBorderColor: "#f46a9b",
          data: [19, 12, 25, 17, 21, 20, 10, 24],
        },
        {
          label: "Chattogram",
          backgroundColor: "#ef9b20",
          borderColor: "#ef9b20",
          borderWidth: 1,
          hoverBackgroundColor: "#ef9b20",
          hoverBorderColor: "#ef9b20",
          data: [21, 17, 7, 15, 13, 21, 20, 7],
        },
        {
          label: "Khulna",
          backgroundColor: "#edbf33",
          borderColor: "#edbf33",
          borderWidth: 1,
          hoverBackgroundColor: "#edbf33",
          hoverBorderColor: "#edbf33",
          data: [21, 23, 11, 25, 15, 17, 12, 24],
        },
        {
          label: "Rajshahi",
          backgroundColor: "#ede15b",
          borderColor: "#ede15b",
          borderWidth: 1,
          hoverBackgroundColor: "#ede15b",
          hoverBorderColor: "#ede15b",
          data: [19, 21, 14, 19, 21, 25, 12, 13],
        },
        {
          label: "Rangpur",
          backgroundColor: "#bdcf32",
          borderColor: "#bdcf32",
          borderWidth: 1,
          hoverBackgroundColor: "#bdcf32",
          hoverBorderColor: "#bdcf32",
          data: [15, 19, 21, 25, 16, 10, 13, 16],
        },
        {
          label: "Mymenshing",
          backgroundColor: "#87bc45",
          borderColor: "#87bc45",
          borderWidth: 1,
          hoverBackgroundColor: "#87bc45",
          hoverBorderColor: "#87bc45",
          data: [23, 19, 21, 25, 16, 10, 17, 19],
        },
        {
          label: "Sylhet",
          backgroundColor: "#27aeef",
          borderColor: "#27aeef",
          borderWidth: 1,
          hoverBackgroundColor: "#27aeef",
          hoverBorderColor: "#27aeef",
          data: [12, 25, 11, 18, 14, 19, 7, 6],
        },
      ],
    },
    options: {
      x: { ticks: { font: { family: "Poppins" } } },
      y: { ticks: { font: { family: "Poppins" } } },
      plugins: { legend: { labels: { font: { family: "Poppins" } } } },
    },
  }),
  ispiechart = document.getElementById("pieChart");
pieChartColors = getChartColorsArray("pieChart");
var pieChart = new Chart(ispiechart, {
    type: "pie",
    data: {
      labels: ["Desktops", "Tablets"],
      datasets: [
        {
          data: [300, 180],
          backgroundColor: pieChartColors,
          hoverBackgroundColor: pieChartColors,
          hoverBorderColor: "#fff",
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { font: { family: "Poppins" } } } },
    },
  }),
  isdoughnutchart = document.getElementById("doughnut");
doughnutChartColors = getChartColorsArray("doughnut");
var lineChart = new Chart(isdoughnutchart, {
    type: "doughnut",
    data: {
      labels: ["Desktops", "Tablets"],
      datasets: [
        {
          data: [300, 210],
          backgroundColor: doughnutChartColors,
          hoverBackgroundColor: doughnutChartColors,
          hoverBorderColor: "#fff",
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { font: { family: "Poppins" } } } },
    },
  }),
  ispolarAreachart = document.getElementById("polarArea");
polarAreaChartColors = getChartColorsArray("polarArea");
var lineChart = new Chart(ispolarAreachart, {
    type: "polarArea",
    data: {
      labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
      datasets: [
        {
          data: [11, 16, 7, 18],
          backgroundColor: polarAreaChartColors,
          label: "My dataset",
          hoverBorderColor: "#fff",
        },
      ],
    },
    options: {
      plugins: { legend: { labels: { font: { family: "Poppins" } } } },
    },
  }),
  isradarchart = document.getElementById("radar");
radarChartColors = getChartColorsArray("radar");
lineChart = new Chart(isradarchart, {
  type: "radar",
  data: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "Desktops",
        backgroundColor: radarChartColors[0],
        borderColor: radarChartColors[1],
        pointBackgroundColor: radarChartColors[1],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[1],
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Tablets",
        backgroundColor: radarChartColors[2],
        borderColor: radarChartColors[3],
        pointBackgroundColor: radarChartColors[3],
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: radarChartColors[3],
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  },
  options: { plugins: { legend: { labels: { font: { family: "Poppins" } } } } },
});
