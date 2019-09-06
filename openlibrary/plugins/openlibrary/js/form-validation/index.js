// jquery-validate#1.6 not on npm
import '../../../../../vendor/js/jquery-validate/jquery.validate.js';
import { validateEmail, validatePassword } from './account.js';
import initValidate from './validate';

function initFormValidation() {
    // register ol_validate
    initValidate($);
    // validate forms
    $('form.validate').ol_validate();
}

export { validateEmail, validatePassword, initFormValidation };
