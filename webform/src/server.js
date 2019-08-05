import express from 'express';
import Nodemailer from 'nodemailer';

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
