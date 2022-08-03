var express = require('express');
var router = express.Router();


const usersController = {
    users: (req, res) => {
        res.render('user', { title: 'USUARIO' })
    }
}

module.exports = usersController;