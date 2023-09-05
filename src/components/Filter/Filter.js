import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { Button } from 'components/Button/Button';

export const Filter = ({ filter, onClear, onChange }) => {
  return (
    <label className={css.label}>
      <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Find contacts by name"
      />
      <Button text="X" onBtnClick={() => onClear()}/>
    </label>
    )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
