import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import startingContacts from '../data/contacts.json';
import { useState, useEffect } from 'react';


export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? startingContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (!contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toString().toLowerCase()
      )
    ) {
      setContacts(prevState => [...prevState, contact])
      } else {
      return Notify.warning(`${contact.name} is already in contacts!`);
    }

  };

  const removeContact = ID => {
    setContacts(prevState =>
      prevState.filter(prevState => prevState.id !== ID)
    );
  };

  const onXBtnClick = () => {
    setFilter('');
  };

  const filterChange = (event) => {
    setFilter(event.target.value);
  };

  const showFilteredContacts = () => {
    const standardFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(standardFilter)
    );
  };

    const filteredContacts = showFilteredContacts();

    return(
      <>
      <Section title="Phonebook">
        <Form onSubmit={addContact}></Form>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onClear={onXBtnClick} onChange={filterChange}></Filter>
        <List data={filteredContacts} onDelete={removeContact}></List>
      </Section>
      </>
    )
  };

