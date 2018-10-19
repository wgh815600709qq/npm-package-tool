// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('数字1不等于字符1', function() {
        expect(testFunc(1, '1')).to.be.equal(false);
    });
    it(`[1] 不等于 ['1']`, function() {
        expect(testFunc([1], ['1'])).to.be.equal(false);
    });
    it('{a: 1}等于{a:1}', function() {
        expect(testFunc({a: 1}, {a: 1})).to.be.equal(true);
    });
    it(`{a: [1]} 不等于 {a: ['1']}`, function() {
        expect(testFunc({a: [1]}, {a: ['1']})).to.be.equal(false);
    });
    it(`{a: {a: {a: {a: {a: {a: {a:1}}}}}}} 等于 {a: {a: {a: {a: {a: {a: {a:1}}}}}}}`, function() {
        expect(testFunc({a: {a: {a: {a: {a: {a: {a:1}}}}}}}, {a: {a: {a: {a: {a: {a: {a:1}}}}}}})).to.be.equal(true);
    });
});

