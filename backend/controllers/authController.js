import jwt from "jsonwebtoken";
import User from "../models/User.js";

const signToken = (id) => 
    jwt.sign({ id } , process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_IN || "30d",
    });