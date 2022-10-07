import {send} from "./mailer"

interface Contact {
    name: string;
    phone: string;
    email: string;
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

send(newContact.email, "1", "2")