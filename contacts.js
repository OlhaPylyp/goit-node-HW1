
const fs = require("fs").promises;
const path = require("path");
const shortid = require('shortid')
const contactsPath = path.join("./db/contact.json");
//console.log(contactsPath)

async function listContacts() {
  try { const listContact = await fs.readFile(contactsPath, "utf8")
    
    return console.table(JSON.parse(listContact))
    }
    catch(err) {console.log(err.message)
    }} 

  async function getContactById(contactId) {
    try { const listContact = await fs.readFile(contactsPath, "utf8")
  const contact=JSON.parse(listContact)
  const contactById = contact.find(({id})=>id===contactId) 
console.log(contactById)
 
    }
    catch(err) {console.log(err.message)
    }
  }

  async function removeContact(contactId) {
    // ...твой код
  }

  async function addContact(name, email, phone) {
    try { const listContact = await fs.readFile(contactsPath, "utf8")
  const contact=JSON.parse(listContact)
  const contactNew = {id: shortid.generate(), name, email, phone }
  const contactsList = JSON.stringify([contactNew, ...contact], null, '\t')
  await fs.writeFile(contactsPath, contactsList, (err) => { if (err) console.error(err)})  
    }  catch(err) {console.log(err.message)
  }}


module.exports = {
  listContacts,
  getContactById,
  // removeContact,
  addContact  
};
