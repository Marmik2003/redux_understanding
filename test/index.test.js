const store = require('../index')
const assert = require('assert');

describe('Simple Test', () => {
    it('Should return accounting balance as 190', () => {
        assert.equal(store.accounting, 190)
    });
    it('Should return claimsHistory length as 1', () => {
        assert.equal(store.claimsHistory.length, 1)
    });
    it('Should return policies length as 2', () => {
        assert.equal(store.policies.length, 2)
    });
})