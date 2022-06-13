import axios from "axios";

const instance = axios.create({
    baseURL: "https://62a6d79c97b6156bff8086f5.mockapi.io/"
});


export const getContacts = async () => {
    const { data } = await instance.get('/contacts');
    return data;
};
export const pushContact = async (contact) => {

    const { data } = await instance.post('/contacts', contact);
    return data;
};
export const deleteContact = async (id) => {
    await instance.delete(`/contacts/${id}`);
    return id;
};