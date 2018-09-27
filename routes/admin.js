const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin');

// Register New Admin
router.post(
	'/register',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		Admin.findOne({ email: req.body.email }).then(admin => {
			if (admin) {
				return res.status(400).json({ email: 'email already exists' });
			} else {
				const newAdmin = new Admin({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newAdmin.password, salt, (err, hash) => {
						if (err) {
							throw err;
						}

						newAdmin.password = hash;
						newAdmin
							.save()
							.then(admin => {
								res.json(admin);
							})
							.catch(err => {
								console.log(err);
							});
					});
				});
			}
		});
	}
);
