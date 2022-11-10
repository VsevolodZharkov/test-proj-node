import GlobeButton from 'components/Globe/GlobeButton';
import { useDispatch, useSelector } from 'react-redux';

import styles from './QuestionButton.module.css';
import { Link } from 'react-router-dom';
import { getRandomQuestions } from 'redux/questions/questions-operations';

import { getQuestions } from 'redux/questions/questions-selectors';

import {
  clearAnswers,
  clearResult,
  questionNumberReset,
} from 'redux/questions/questions-slice';

const options = [
  {
    name: 'tech',
    title: 'QA technical training',
    id: 'tech',
  },
  {
    name: 'theory',
    title: 'Testing theory',
    id: 'theory',
  },
];

const QuestionButton = () => {
  const dispatch = useDispatch();
  let type = null;

  const randomQuestions = useSelector(getQuestions);

  const handleChange = event => {
    const { name } = event.target;
    switch (name) {
      case 'tech':
        type = 'tech';
        break;

      case 'theory':
        type = 'theory';
        break;

      default:
        return;
    }

    if (randomQuestions.length === 0) {
      dispatch(getRandomQuestions(type));
      dispatch(clearResult());
      return;
    }

    if (randomQuestions[0].type !== type) {
      dispatch(clearAnswers());
      dispatch(questionNumberReset());
      dispatch(getRandomQuestions(type));
      dispatch(clearResult());
      return;
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        {options.map(item => (
          <Link
            className={styles.button}
            onClick={handleChange}
            name={item.name}
            id={item.id}
            key={item.id}
            to="/test"
          >
            {item.title}
            <GlobeButton className={styles.arrow} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuestionButton;
