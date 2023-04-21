const url = "https://gist.githubusercontent.com/SuecoMarcus/23bcf8a786725f1b8335ec2dc2d90779/raw/f33d1058b878a7fc95ef202763d0067e8b436e54/uruguay_gdp.json"
const ctx = document.querySelector("#my-chart");
let labelArray=[];
let dataArray=[];

fetch(url)
.then((data) => data.json())
.then ((data) => {
    for (items of data){
        labelArray.unshift (items.date);
        dataArray.unshift (items.value);
    }

const labels = labelArray;
const canvaData = {
    labels: labels,
    datasets: [{
      label: 'PBI Uruguay USD',
      data: dataArray,
      fill: true,
      borderColor: 'rgb(150, 150, 150)',
      tension: 0.1
    }]
  };

new Chart(ctx, {
  type: 'line',
  data: canvaData,
  options: {
    scales: {
      y: {
        stacked: true
      }
    }
  }
});

})