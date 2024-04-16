export declare class PasswordGenerator {
    length: number;
    securityLevel: number;
    SL_LOWER_CASE: number;
    SL_UPPER_CASE: number;
    SL_NUMBERS: number;
    SL_SPECIAL_CHARACTERS: number;
    LOWER_CASE_LETTERS: string;
    UPPER_CASE_LETTERS: string;
    NUMBERS: string;
    SPECIAL_CHARACTERS: string;
    constructor();
    generate(length?: number, securityLevel?: number): string;
}
