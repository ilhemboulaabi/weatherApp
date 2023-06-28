import { shallow } from 'enzyme';
import { Line } from 'react-chartjs-2';
import Chart from './Chart';

describe('Chart', () => {
  const hourlyData = {
    time: ['2023-06-11 12:00', '2023-06-11 13:00', '2023-06-11 14:00'],
    temperature_2m: [25, 30, 28],
    windspeed_10m: [5, 10, 15],
    precipitation: [0, 0.5, 0.2],
  };
  const hourlyUnits = {
    time: 'iso8601',
    temperature_2m: '°C',
    windspeed_10m: 'km/h',
    precipitation: 'mm'
  }

  it('renders Chart component with temperature, windspeed, and precipitation', () => {
    const hourlyDataWithPrecipitation = { ...hourlyData };
    const wrapper = shallow(<Chart hourlyData={hourlyDataWithPrecipitation} hourlyUnits={hourlyUnits}/>);

    const lineComponent = wrapper.find(Line);
    expect(lineComponent).toHaveLength(1);
    expect(lineComponent.prop('data')).toEqual({
      labels: hourlyData.time,
      datasets: [
        {
          label: 'Temperature °C',
          data: hourlyData.temperature_2m,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'Windspeed km/h',
          data: hourlyData.windspeed_10m,
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1,
        },
        {
          label: 'Precipitation mm',
          data: hourlyData.precipitation,
          fill: false,
          borderColor: 'rgb(53, 162, 235)',
          tension: 0.1,
        },
      ],
    });
  });
});
