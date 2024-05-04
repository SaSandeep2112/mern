const express =  require('express');
const router =  express.Router();
const {getContact} = require('../controllers/contactController.js')
const {createContact} = require('../controllers/contactController.js');
const {getContacts} = require('../controllers/contactController.js');
const {updateContacts} = require('../controllers/contactController.js');
const {removeContacts} = require('../controllers/contactController.js');
router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getContacts).put(updateContacts).delete(removeContacts);


module.exports = router;