const express = require("express");
const router = express.Router();
const contacts = [
  { id: "1", username: "Felix", surname: "Brown", email: "felix@test.com" },
  { id: "2", username: "Sonya", surname: "Redhead", email: "sonya@test.com" },
  { id: "3", username: "Conan", surname: "Barbarian", email: "conan@test.com" },
];

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json(contacts);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const contact = contacts.find((contact) => contact.id === id);
  res.json(contact);
});
module.exports = router;
