
const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join("./db/contact.json");
//console.log(contactsPath)

async function listContacts() {
  try { const listContact = await fs.readFile(contactsPath, "utf8")
    
    return console.log(JSON.parse(listContact))
    }
    catch(err) {console.log(err.message)
    }} 

  async function getContactById(contactId) {
    try { const listContact = await fs.readFile(contactsPath, "utf8")
  const contact=JSON.parse(listContact)
  const contactById = contact.find(({id})=>id===contactId) 
 return console.log(contactById)
 
    }
    catch(err) {console.log(err.message)
    }
  }

//   function removeContact(contactId) {
//     // ...твой код
//   }

  async function addContact(name, email, phone) {


    try { const listContact = await fs.readFile(contactsPath, "utf8")
    const contact=JSON.parse(listContact)
    const contactById = contact.find(({id})=>id===contactId) 
   return console.log(contactById)
   
      }
  }
module.exports = {
  listContacts,
  getContactById,
  // removeContact,
  // addContact
};
