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

console.log(getFirstAddress(newContact)?.city)


interface Button {
    label: string;
    onClick: () => void;
}

const button: Button = {
    label: "Submit",
    onClick: () => {
        console.log("Click")
    }
}

interface IconButton extends Button {
    icon: string;
}

const addToCartBtn: IconButton = {
    label: "Add to cart",
    onClick: () => {
        console.log("Click");
    },
    icon: "cart-icon",
}