import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getResult } from 'redux/questions/questions-selectors';
import useWindowDimensions from './useWindowDimensions';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () => {
  const { width } = useWindowDimensions();
  const resutl = useSelector(getResult);
  const resSuccess = Math.round(
    (resutl.rightAnswersQuantity / resutl.questionsQuantity) * 100
  );

  const resFail = 100 - resSuccess;
  const rotation = 90 + 1.8 * resFail;

  let options = {
    maintainAspectRatio: false,
    responsive: true,
    offset: width > 768 ? 20 : 10,
    plugins: {
      legend: {
        position: 'right',
        onClick: function () {},
        labels: {
          boxWidth: width > 768 ? 25 : 14,
          padding: width > 768 ? 32 : 16,
          boxHeight: width > 768 ? 25 : 14,
          font: {
            size: width > 768 ? 16 : 10,
            family: 'Montserrat',
          },
        },
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            return label;
          },
          labelPointStyle: function (context) {
            return {
              pointStyle: 'circle',
            };
          },
        },
      },
    },
    layout: {
      maxWidth: 300,
      padding: {
        top: width > 768 ? -100 : -60,
        right: width > 768 ? 0 : 0,
        left: width > 768 ? 180 : 70,
        bottom: width > 768 ? 0 : 0,
      },
    },
  };
  const correctLable = width > 768 ? 'Correct' : '';
  const incorrectLable = width > 768 ? 'Incorrect' : '';

  const data = {
    labels: [`${resSuccess}% ${correctLable}`, `${resFail}% ${incorrectLable}`],
    datasets: [
      {
        label: '',
        data: [resSuccess, resFail],
        backgroundColor: ['#FF6B01', '#D7D7D7'],
        borderColor: ['#FF6B01', '#D7D7D7'],
        borderWidth: 1,
        radius: width > 768 ? 132 : 72,
        rotation: rotation,
        margine: 0,
      },
    ],
  };

  return <Pie data={data} options={options} />;
};
