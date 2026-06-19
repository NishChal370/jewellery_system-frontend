const REGEX = {
      // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
      PASSWORD: new RegExp(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])(?!.*[\\'"`]).{8,}$/
      ),
};

export default REGEX;
