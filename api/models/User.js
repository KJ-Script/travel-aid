const express = require("express");
const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
{
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}
)

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;