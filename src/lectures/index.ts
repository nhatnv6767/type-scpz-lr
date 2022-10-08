import {send} from "./mailer"

interface Pet {
    name: string;
}

interface Address {
    city: string;
}

interface Contact {
    name: string;
    phone: string;
    email?: string;
    pet?: Pet;
    addresses?: Address[];
}

const contacts: Contact[] = [];

const newContact: Contact = {
    name: "Nguyen A A",
    phone: "012333212",
    email: "nothing@gmail.com",
}

const otherContact: Contact = {
    name: "Nguyen A B",
    phone: "0123f33212",
}

contacts.push(newContact);
if (newContact.email) {
    send(newContact.email, "1", "2")
}

function getPetName(contact: Contact): string {
    return contact.pet?.name || "";
}

function getFirstAddress(contact: Contact) {
    return contact.addresses?.[0];
}
