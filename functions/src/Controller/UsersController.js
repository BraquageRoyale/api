const express = require("express");
const router = express.Router();
const userService = require("../../Services/Users/users.services");
const Http_response = require('../../Utils/http-response');

// routes -> /users/

router.get("/", getAllUsers);
function getAllUsers(req, res, next) {
    userService
        .getAllUsers(req, res)
        .then((users) => res.send(users))
        .catch((err) => next(err));
}
