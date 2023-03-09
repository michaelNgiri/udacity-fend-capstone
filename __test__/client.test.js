import { validateURL, validateInputs } from "../src/client/js/functions"
const testDate = new Date();
const testDestination = "Texas";
const emptyDate = '';
const emptyDestination = '';


describe("Testing the validate url function", () => {
    test("A valid url should pass the test", () => {
        expect(validateURL("www.udacity.com")).toBe(true);
    })
    test("A bad url should fail the tes", () => {
        expect(validateURL("random text")).toBe(false);
    })
});

// describe("Testing the namechecker", () => {
//     test("should fail if the name field is vacant", () => {
//         expect(nameIsValid("")).toBe(false);
//     })
//     test("should pass if their is a valid name passed", () => {
//         expect(nameIsValid("myname")).toBe(true);
//     })
// });

describe("Testing the input validation function", () => {
    test("should fail if either of the inputs are vacant", () => {
        expect(validateInputs(emptyDate, emptyDestination)).toBe(false);
    })
    test("should pass if the inputs are valid", () => {
        expect(validateInputs(testDate, testDestination)).toBe(true);
    })
});

