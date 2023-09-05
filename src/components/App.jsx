import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import startingContacts from '../data/contacts.json';


export class App extends Component {
  state = {
    contacts: startingContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      !this.state.contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      return Notify.warning(`${contact.name} is already in contacts!`);
    }

  };

  removeContact = ID => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== ID),
    });
  };

  clickOnBtn = () => {
    console.log("click bbb");
  };

  onXBtnClick = () => {
    this.setState({ filter: '' });
  };

  filterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  showFilteredContacts = () => {
    const standardFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(standardFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.showFilteredContacts();

    return(
      <>
      <Section title="Phonebook">
        <Form onSubmit={this.addContact}></Form>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onClear={this.onXBtnClick} onChange={this.filterChange}></Filter>
        <List data={filteredContacts} onDelete={this.removeContact}></List>
      </Section>
      </>
    )
  };
};
