// import {
//   getAnswers,
//   questionNumber,
// } from '../../redux/questions/questions-selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import {
//   addAnswers,
//   questionNumberDecrement,
//   questionNumberIncrement,
// } from 'redux/questions/questions-slice';

// /*---------------------------------------------- */
// export default function QuestionResult({ answer }) {
//   const dispatch = useDispatch();
//   const index = useSelector(questionNumber);
//   const answers = useSelector(getAnswers);

//   const handleBack = () => {
//     dispatch(questionNumberDecrement());
//     console.log('answers', answers);
//   };

//   const handleNext = () => {
//     dispatch(questionNumberIncrement());
//     dispatch(addAnswers(answer));
//     console.log('answers', answers);
//   };

//   return (
//     <>
//       <div>
//         <b>Question {Number(index) + 1} / 12 </b>
//       </div>
//       <div>
//         <button
//           type="button"
//           name="back"
//           disabled={Number(index) === 0}
//           onClick={handleBack}
//         >
//           Back
//         </button>
//         {Number(index) + 1 < 12 ? (
//           <button type="button" name="next" onClick={handleNext}>
//             Next
//           </button>
//         ) : (
//           <Link
//             to="/result"
//             name="exit"
//             // onClick={getResult}
//           >
//             Finish test
//           </Link>
//         )}
//       </div>
//     </>
//   );
// }
