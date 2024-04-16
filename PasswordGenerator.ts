class PasswordGenerator {
    length: number;
    securityLevel: number;

    // Security levels
    SL_LOWER_CASE = 0;
    SL_UPPER_CASE = 1;
    SL_NUMBERS = 2;
    SL_SPECIAL_CHARACTERS = 3;

    // Character sets
    LOWER_CASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
    UPPER_CASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    NUMBERS = "0123456789";
    SPECIAL_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    constructor() {
        this.length = 8;
        this.securityLevel = 3;
    }

    generate(length?:number, securityLevel?:number): string {
        // If the length or securityLevel is provided, update the values
        if(length !== undefined && length > 0) this.length = length;
        if(securityLevel !== undefined && securityLevel > -1) this.securityLevel = securityLevel;

        // The charset is a string that contains all the characters that can be used in the password
        // The charset is built based on the security level
        // If the security level is 0, only lower case letters are used
        // If the security level is 1, upper case letters are used additionally to previous level
        // If the security level is 2, numbers are used additionally to previous levels
        // If the security level is 3, special characters are used additionally to previous levels
        let charset = "";
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
        let password = "";
        for (let i = 0; i < this.length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }
}