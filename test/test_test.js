/**
 * Created by Kevin Conner on 3/24/2017.
 */
let assert = require('assert');
describe('Array', function() {
    describe('value not in array', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });

    describe('value is in array',function () {
        it('should return the index of the value being sought',function () {
            assert.equal(1,[1,2,3].indexOf(2));
        })
    });
});