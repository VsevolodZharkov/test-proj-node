import PropTypes from 'prop-types';
import styles from './QuotationListItem.module.css';

export function QuotationListItem({ author, quotation, description }) {
  return (
    <li className={styles.item}>
      <h3 className={styles.quotation}>{quotation}</h3>

      <h2 className={styles.author}>{author}</h2>

      <p className={styles.desc}>{description}</p>
    </li>
  );
}
QuotationListItem.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
};
