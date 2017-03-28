const assert = require('assert');
describe('asana-submitter', function () {
    var asanaSubmitter = require('../controls/asana-submitter');
    describe('settings population', function () {
        it('should return "test" as settings.workspace', function () {
            assert.equal('test', asanaSubmitter.asanaSettings.workspace);
        });
    });
});