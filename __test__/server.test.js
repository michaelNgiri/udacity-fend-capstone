import { saveTripInfo, findTrip } from "../src/server/index"
// const payload = { destination: '', date: '', timezone: '', max_temp: '', min_temp: '' }
const destination = 'placeholder string', date = 'placeholder string', timezone = 'placeholder string', max_temp = 'placeholder string', min_temp = 'placeholder string'


describe("Testing the data saving to backend", () => {
    test("should return object", done => {
        expect(saveTripInfo(destination, date, timezone, max_temp, min_temp)).not.toBe('');
        done();
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
