const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");
const contactsPath = path.join("./db/contact.json");
//console.log(contactsPath)

async function listContacts() {
  try {
    const listContact = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(listContact));
  } catch (err) {
    console.log(err.message);
  }
}

async function getContactById(contactId) {
  try {
    const listContact = await fs.readFile(contactsPath, "utf8");
    const contact = JSON.parse(listContact);
    const contactById = contact.find(({ id }) => id === contactId);
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const listContact = await fs.readFile(contactsPath, "utf8");
    const contact = JSON.parse(listContact);
    const idDeleteList = contact.filter(({ id }) => id !== contactId);
// contact.splice(idDelete, 1)
    const contactsList = JSON.stringify(idDeleteList);
     await fs.writeFile(
      contactsPath,
      contactsList
    );

  } catch (err) {
    console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const listContact = await fs.readFile(contactsPath, "utf8");
    const contact = JSON.parse(listContact);
    const contactNew = { id: shortid.generate(), name, email, phone };
    const contactsList = JSON.stringify([contactNew, ...contact], null, "\t");
    await fs.writeFile(contactsPath, contactsList);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
