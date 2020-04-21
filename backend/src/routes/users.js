const {Router} = require('express');

const router = Router();


const { getUsers,createUser,deleteUsers } = require('../controllers/users.controllers');
// desde nuestro enrutador que escuche una ruta
router.route('/')
    .get(getUsers)
    .post(createUser)

    // http://localhost:4000/api/users/1
router.route('/:id')
     .delete(deleteUsers)

module.exports = router;


