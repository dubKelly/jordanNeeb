const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEmailInput(data) {
	let errors = {};

	data.subject = !isEmpty(data.subject) ? data.subject : '';
	data.text = !isEmpty(data.text) ? data.text : '';
	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';

	if (validator.isEmpty(data.subject)) {
		errors.subject = 'Subject Required';
	}

	if (validator.isEmpty(data.text)) {
		errors.text = 'Message Required';
	}

	if (validator.isEmpty(data.name)) {
		errors.name = 'Name Required';
	}

	if (!validator.isEmail(data.email)) {
		errors.email = 'Invalid Email';
	}

	if (validator.isEmpty(data.email)) {
		errors.email = 'Email Required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
