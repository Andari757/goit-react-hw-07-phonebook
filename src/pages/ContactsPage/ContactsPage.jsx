import { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from "components/Filter/Filter";
import { getContacts, getLoading } from 'redux/contacts/contacts-selectors';
import {
    fetchContacts,
    removeContact as removeContactAction,
    addContact as addContactAction,
} from "redux/contacts/contacts-operations";
import s from "./style.module.css"
import { TailSpin } from 'react-loader-spinner';
export default function ContactsPage() {

    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector(getLoading)
    const contacts = useSelector(getContacts)
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    const addContact = (data) => {
        // if (contacts.find(contact => contact.name === data.name)) {
        //     alert(`${data.name} already exists`)
        //     return;
        // }
        dispatch(addContactAction(data));
    }

    function getFilteredContacts() {
        if (!filter) {
            return contacts;
        }
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    }




    const handleFilter = (e) => {
        setFilter(e.target.value)
    };

    const remove = (data) => {
        dispatch(removeContactAction(data));
    }

    const data = getFilteredContacts()
    return (
        <div className={s.page}>

            <div className={s.phoneBook}>
                <h1>Phonebook</h1>
                <ContactForm
                    onSubmit={addContact}
                />
                <h2>Contacts</h2>

                <Filter
                    onChange={handleFilter}
                    value={filter} />
                {loading && <div className={s.loader}>
                    <TailSpin color="#708090" height={80} width={80} />
                </div >}
                <ContactList
                    contacts={data}
                    onClick={remove}
                />
            </div>

        </div >
    );

}
