import { validateURL, nameIsValid, validateInputs } from "../src/client/js/functions"
import { saveTripInfo, findTrip } from "../src/server/index"

const payload = { destination: '', date: '', timezone: '', max_temp: '', min_temp: '' }
const testDate = new Date();
const testDestination = "Texas";
const emptyDate = '';
const emptyDestination = '';
const destination = 'placeholder string', date = 'placeholder string', timezone = 'placeholder string', max_temp = 'placeholder string', min_temp = 'placeholder string'

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


describe("Testing the data saving to backend", () => {
    test("should return object", () => {
        expect(saveTripInfo(destination, date, timezone, max_temp, min_temp)).not.toBe('');
    })
    test("should also not be undefined", () => {
        expect(saveTripInfo(destination, date, timezone, max_temp, min_temp)).not.toBe(undefined);
    })
});

describe("Testing the data retrieval from backend", () => {
    test("should return object", () => {
        expect(findTrip()).not.toBe('');
    })
    test("The returned data should not be undefined", () => {
        expect(findTrip()).not.toBe(undefined);
    })
});

