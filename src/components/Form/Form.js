import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button/Button';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    event.currentTarget.reset();
    this.reset();
  }

  render() {
  return (
    <form className={css.form} onSubmit={this.handleSubmit}>
      <h2 className={css.title}>Name</h2>
      <input
        className={css.input}
        name="name"
        type="text"
        value={this.state.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        onChange={this.handleChange}
        id={this.nameId}
      ></input>
      <h2 className={css.title}>Number</h2>
      <input
        className={css.input}
        name="number"
        type="tel"
        value={this.state.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleChange}
        id={this.numberId}
      ></input>
      <Button text="Add Contact"/>
    </form>
  );
}};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
