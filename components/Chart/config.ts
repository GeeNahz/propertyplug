import { TDataset } from "../common/type";

export function getConfig(datasets: TDataset[], COLORS: string[]) {
    var config = {
      type: "line",
      data: {
        labels: datasets[0].data.map((item) => item.label),
        datasets: datasets.map((data, index) => {
          let dataset = {
            label: data.label,
            backgroundColor: COLORS[index],
            borderColor: COLORS[index],
            fill: false,
            data: data.data.map((dt) => dt.value)
          }
          return dataset
        }),
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts!",
          fontColor: "black",
        },
        legend: {
          display: false,
          labels: {
            fontColor: "gray",
          },
          align: "end",
          position: "top",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(12,40,49,1)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: true,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(133,147,152,0.7)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(12,40,49,1)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(133,147,152,0.7)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };

    return config
}
