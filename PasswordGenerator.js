var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator() {
        // Security levels
        this.SL_LOWER_CASE = 0;
        this.SL_UPPER_CASE = 1;
        this.SL_NUMBERS = 2;
        this.SL_SPECIAL_CHARACTERS = 3;
        // Character sets
        this.LOWER_CASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
        this.UPPER_CASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.NUMBERS = "0123456789";
        this.SPECIAL_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        this.length = 8;
        this.securityLevel = 3;
    }
    PasswordGenerator.prototype.generate = function (length, securityLevel) {
        // If the length or securityLevel is provided, update the values
        if (length !== undefined && length > 0 && length !== "")
            this.length = length;
        if (securityLevel !== undefined && securityLevel > -1 && securityLevel !== "")
            this.securityLevel = securityLevel;
        // The charset is a string that contains all the characters that can be used in the password
        // The charset is built based on the security level
        // If the security level is 0, only lower case letters are used
        // If the security level is 1, upper case letters are used additionally to previous level
        // If the security level is 2, numbers are used additionally to previous levels
        // If the security level is 3, special characters are used additionally to previous levels
        var charset = "";
        if (this.securityLevel >= this.SL_LOWER_CASE) {
            charset += this.LOWER_CASE_LETTERS;
        }
        if (this.securityLevel >= this.SL_UPPER_CASE) {
            charset += this.UPPER_CASE_LETTERS;
        }
        if (this.securityLevel >= this.SL_NUMBERS) {
            charset += this.NUMBERS;
        }
        if (this.securityLevel >= this.SL_SPECIAL_CHARACTERS) {
            charset += this.SPECIAL_CHARACTERS;
        }
        // The password is built by randomly selecting characters from the charset
        var password = "";
        for (var i = 0; i < this.length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    };
    return PasswordGenerator;
}());
//# sourceMappingURL=PasswordGenerator.js.map