import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContacts, pushContact, deleteContact } from 'shared/contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getContacts();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (data, { rejectWithValue }) => {
//         try {
//             const contact = await pushContact(data);
//             return contact;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     },
//     {
//         condition: (data, { getContacts }) => {
//             console.log(data)
//             const contacts = getContacts();
//             console.log(contacts)
//             const dublicate = contacts.find(item => item.name === data.name);
//             if (dublicate) {
//                 alert(`${data.name} already exist`);
//                 return false;
//             }
//             return data;
//         }
//     }
// );

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, { rejectWithValue }) => {
        try {
            const newContact = pushContact(data);
            return newContact;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            const dublicate = contacts.items.find(item => item.name === data.name);
            if (dublicate) {
                alert(`${data.name}  already exist`);
                return false;
            }
            return data;
        },
    }
)


export const removeContact = createAsyncThunk(
    'contacts/removeContact',
    async (data, { rejectWithValue }) => {
        try {
            const contact = await deleteContact(data);
            return contact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);