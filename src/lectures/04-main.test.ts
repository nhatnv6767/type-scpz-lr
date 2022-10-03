import {isPositive} from "./04-main";

describe('isPositive()', () => {
    it('should return true when n > 0', function () {
        expect(isPositive(1)).toBe(true)
        expect(isPositive(2)).toBe(true)
        expect(isPositive(3)).toBe(true)
    });
    it('should return false when n == 0', function () {
        expect(isPositive(0)).toBe(false)
    });
    it('should return false when n < 0', function () {
        expect(isPositive(-1)).toBe(false)
        expect(isPositive(-2)).toBe(false)
        expect(isPositive(-5)).toBe(false)
    });
});