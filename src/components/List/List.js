import PropTypes from 'prop-types';
import css from './List.module.css';
import { Button } from 'components/Button/Button';

export const List = ({ data, onDelete }) => {
  return (
    <ul className={css.ul} >
      {data.map(({ id, name, number}) => {
        return (
          <li className={css.li} key={id}>{name}:<b>{number}</b>
          <Button text="Delete" onBtnClick={() => onDelete(id)}/>
          </li>
        );
      })}
    </ul>
    )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
