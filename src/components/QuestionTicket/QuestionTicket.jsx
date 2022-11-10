import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './QuestionTicket.module.css';
import {
  getAnswers,
  getQuestions,
  getResult,
  questionNumber,
} from 'redux/questions/questions-selectors';
import {
  addAnswers,
  clearAnswers,
  clearQuestions,
  clearResult,
  questionNumberDecrement,
  questionNumberIncrement,
  questionNumberReset,
  removeAnswer,
} from 'redux/questions/questions-slice';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import GlobeBack from 'components/Globe/GlobeBack';

export const QuestionTicket = () => {
  const [isDisabledBtn, setIsDisabledNextBtn] = useState(true);
  const dispatch = useDispatch();
  const index = useSelector(questionNumber);
  const randomQuestions = useSelector(getQuestions);
  const currentQuestion = randomQuestions[index];
  const answers = useSelector(getAnswers);
  const testName = randomQuestions[0]?.type;
  const { rightAnswers } = useSelector(getResult);

  useEffect(() => {
    if (!!document.querySelector('.checked')) {
      setIsDisabledNextBtn(false);
    } else {
      setIsDisabledNextBtn(true);
    }
  }, [index]);

  const handleCheckAnswer = e => {
    setIsDisabledNextBtn(false);
    const answerqwe = e.target.value;
    const answerObj = {
      id: currentQuestion._id,
      answer: answerqwe,
    };
    if (answers.find(el => el?.id === answerObj.id)) {
      dispatch(removeAnswer(answerObj.id));
    }
    dispatch(addAnswers(answerObj));
  };

  const handleBack = () => {
    dispatch(questionNumberDecrement());
  };

  const handleNext = () => {
    dispatch(questionNumberIncrement());
  };

  const handleFinishTest = () => {
    dispatch(questionNumberReset());
    dispatch(clearAnswers());
    dispatch(clearQuestions());
    dispatch(clearResult());
  };

  return (
    <div className={styles.testContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.subTitle}>
          [{testName === 'theory' ? 'Testing theory' : 'QA technical training'}
          _]
        </h2>
        <Link
          to="/home"
          name="finish"
          onClick={handleFinishTest}
          className={styles.endBtn}
        >
          Close test
        </Link>
      </div>
      {currentQuestion && (
        <div className={styles.ticketContainer}>
          <p className={styles.questionNumber}>
            Question
            <span className={styles.currentNumber}> {Number(index) + 1}</span>/
            {randomQuestions.length}
          </p>
          <p className={styles.questionTitle}>{currentQuestion.question}</p>
          <ul className={styles.radioList}>
            {currentQuestion.answers.map((answer, i) => {
              return (
                <li key={nanoid()} className={styles.radioItem}>
                  {answers.find(
                    el => el?.id === currentQuestion._id && el.answer === answer
                  ) ? (
                    <label className={styles.radio}>
                      <input
                        checked={true}
                        type="radio"
                        // className={({ result }) =>
                        //   'checked' + (result ? ' rightAnswer' : '')
                        // }
                        className={`checked`}
                        key={nanoid()}
                        value={answer}
                        onChange={handleCheckAnswer}
                      />
                      {rightAnswers?.find(
                        ({ rightAnswer, _id }) =>
                          currentQuestion._id === _id && rightAnswer === answer
                      ) ? (
                        <span style={{ color: '#0a900a', fontWeight: '700' }}>
                          {answer}
                        </span>
                      ) : (
                        <span>{answer}</span>
                      )}
                    </label>
                  ) : (
                    <label className={styles.radio}>
                      <input
                        type="radio"
                        className={`unchecked`}
                        key={nanoid()}
                        onChange={handleCheckAnswer}
                        value={answer}
                      />
                      {rightAnswers?.find(
                        ({ rightAnswer, _id }) =>
                          currentQuestion._id === _id && rightAnswer === answer
                      ) ? (
                        <span style={{ color: '#0a900a', fontWeight: '700' }}>
                          {answer}
                        </span>
                      ) : (
                        <span>{answer}</span>
                      )}
                      {/* <span>{answer}</span> */}
                    </label>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className={styles.btnContainer}>
        <button
          className={styles.btnBack}
          type="button"
          name="back"
          disabled={Number(index) === 0}
          onClick={handleBack}
        >
          <GlobeBack className={styles.svgBackArrow} />
          <span>Previous question</span>
        </button>
        {Number(index) + 1 < 12 ? (
          <button
            type="button"
            name="next"
            onClick={handleNext}
            className={styles.btnNext}
            disabled={isDisabledBtn}
          >
            {/* GlobeNext */}
            <span>Next question</span>
            <GlobeBack className={styles.svgNextArrow} />
          </button>
        ) : (
          <Link to="/result" name="exit">
            <button disabled={isDisabledBtn} className={styles.btnFinish}>
              <span>Finish test</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
