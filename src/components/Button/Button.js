import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({
  text, onBtnClick
}) => {
  return (
    <button type="submit" onClick={onBtnClick} className={css.button}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func,
};
