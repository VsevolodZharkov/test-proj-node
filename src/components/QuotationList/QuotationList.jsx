import PropTypes from 'prop-types';
import { QuotationListItem } from 'components/QuotationListItem/QuotationListItem';
import styles from './QuotationList.module.css';
import quotations from '../data/quotations.json';

export function QuotationList() {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const quoteId = randomIntFromInterval(1, quotations.length);

  const { id, author, quotation, description } = quotations.find(
    ({ id }) => Number(id) === Number(quoteId)
  );

  return (
    <div className={styles.wrap}>
      <QuotationListItem
        key={id}
        id={id}
        author={author}
        quotation={quotation}
        description={description}
      />
    </div>
  );
}

QuotationList.propTypes = {
  QuotationListItem: PropTypes.arrayOf(
    PropTypes.shape({
      quotation: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};
