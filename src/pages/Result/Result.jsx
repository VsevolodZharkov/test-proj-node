import { Chart } from 'components/Chart/Chart';
import useWindowDimensions from 'components/Chart/useWindowDimensions';
import { Line } from 'components/Line/Line';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAnswerResult } from 'redux/questions/questions-operations';
import { getAnswers, getResult } from 'redux/questions/questions-selectors';
import {
  clearAnswers,
  clearQuestions,
  clearResult,
  questionNumberReset,
} from 'redux/questions/questions-slice';
import amusedCat from '../../svg/cats/amusedCat.png';
import crushedCat from '../../svg/cats/crushedCat.png';
import happyCat from '../../svg/cats/happyCat.png';
import notBadCat from '../../svg/cats/notBadCat.png';
import s from './Result.module.css';

export const Result = () => {
  const { width } = useWindowDimensions();
  const answers = useSelector(getAnswers);
  const dispatch = useDispatch();

  useEffect(() => {
    answers.length === 12 && dispatch(getAnswerResult(answers));
  }, [answers, dispatch]);

  const resutl = useSelector(getResult);
  const themeOfTests = resutl.themeOfTests;
  const resSuccess =
    (resutl.rightAnswersQuantity / resutl.questionsQuantity) * 100;

  const wichResult = () => {
    if (resSuccess <= 10) {
      return {
        cat: crushedCat,
        title: 'WTF?',
        resume: "Maby, it's not your's, bro?",
      };
    }
    if (resSuccess > 10 && resSuccess <= 50) {
      return {
        cat: amusedCat,
        title: 'So so',
        resume: 'You need to learn a little bit more.',
      };
    }
    if (resSuccess > 50 && resSuccess <= 80) {
      return {
        cat: notBadCat,
        title: 'Not bad',
        resume: 'But you still need to learn some materials.',
      };
    }
    if (resSuccess > 80) {
      return {
        cat: happyCat,
        title: 'Exellent!',
        resume: 'You have learned the material well.',
      };
    }
  };

  function w() {
    let res = 120;

    if (width > 768 && resSuccess < 50) {
      res = 250;
    }

    if (width > 768 && resSuccess < 90 && resSuccess > 49) {
      res = 445 - resSuccess * 3.33;
    }

    if (width < 769 && resSuccess < 50) {
      res = 100;
    }
    if (width < 769 && resSuccess > 89) {
      res = 30;
    }
    if (width < 769 && resSuccess < 90 && resSuccess > 49) {
      res = 200 - resSuccess * 1.82;
    }

    return res;
  }
  function h() {
    let res = 28;

    if (width > 768 && resSuccess < 50) {
      res = 105;
    }

    if (width < 769 && resSuccess < 50) {
      res = 60;
    }

    if (width < 769 && resSuccess > 49) {
      res = 18;
    }

    return res;
  }

  const handleTryAgain = () => {
    dispatch(questionNumberReset());
    dispatch(clearAnswers());
    dispatch(clearQuestions());
    dispatch(clearResult());
  };

  return (
    <div className={s.resultWrapper}>
      <h1 className={s.title}>Results</h1>
      <h2 className={s.subTitle}>[testing {themeOfTests}_]</h2>
      <div className={s.chartContainer}>
        {resSuccess > 0 && (
          <Line
            width={w()}
            height={h()}
            top={width > 768 ? 65 : 34}
            right={width > 768 ? 150 : 61}
          />
        )}
        {resSuccess < 100 && (
          <Line
            width={width > 768 ? 120 : 30}
            height={width > 768 ? 28 : 18}
            top={width > 768 ? 120 : 64}
            right={width > 768 ? 150 : 61}
          />
        )}
        <Chart />
      </div>
      <div className={s.totalContainer}>
        <p className={s.totalTitle}>
          Correct answers - <b>{resutl.rightAnswersQuantity}</b>
        </p>
        <p>
          Total questions - <b>{resutl.questionsQuantity}</b>
        </p>
      </div>
      <img src={wichResult()?.cat} alt="" className={s.img} />
      <p className={s.imgTitle}>{wichResult()?.title}</p>
      <p className={s.imgInscription}>{wichResult()?.resume}</p>
      <Link to={'/home'} className={s.btn} onClick={handleTryAgain}>
        Try again
      </Link>
    </div>
  );
};
