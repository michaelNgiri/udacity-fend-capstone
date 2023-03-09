import { validateURL } from "../src/client/js/formHandler";
import {nameIsValid} from "../src/client/js/nameChecker"


describe("Testing the validate url function", () => {
    test("A valid url should pass the test", () => {
        expect(validateURL("www.udacity.com")).toBe(true);
    })
    test("A bad url should fail the tes", () => {
        expect(validateURL("random text")).toBe(false);
    })
});

describe("Testing the namechecker", () => {
    test("should fail if the name field is vacant", () => {
        expect(nameIsValid("")).toBe(false);
    })
    test("should pass if their is a valid name passed", () => {
        expect(nameIsValid("myname")).toBe(true);
    })
});
