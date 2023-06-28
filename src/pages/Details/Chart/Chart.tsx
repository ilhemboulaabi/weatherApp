import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { IHourlyData, IHourlyUnits } from '../../../types';
import dayjs from 'dayjs';

const HourlyWeather = ({ hourlyData, hourlyUnits }: { hourlyData: IHourlyData, hourlyUnits: IHourlyUnits }) => {
  const timeArray = hourlyData.time.map(timestamp => dayjs(timestamp).format('YYYY-MM-DD HH:mm'));;
  const temperatureArray = hourlyData.temperature_2m;
  const windspeedArray = hourlyData.windspeed_10m;
  const precipitationArray = hourlyData.precipitation;

  const datasets = [
    {
      label: `Temperature ${hourlyUnits.temperature_2m}`,
      data: temperatureArray,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }
  ]
  windspeedArray && datasets.push(
    {
      label: `Windspeed ${hourlyUnits.windspeed_10m}`,
      data: windspeedArray,
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    });
  precipitationArray && datasets.push(
    {
      label: `Precipitation ${hourlyUnits.precipitation}`,
      data: precipitationArray,
      fill: false,
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.1,
    }
  );

  const chartData = {
    labels: timeArray,
    datasets
  };

  return (
    <Line data={chartData} />
  );
};

export default HourlyWeather;
