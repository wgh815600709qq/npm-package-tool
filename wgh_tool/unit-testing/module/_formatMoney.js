// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('123.456', function() {
        expect(testFunc('123.456')).to.be.equal(`123.46`);
    });
    it('123', function() {
        expect(testFunc('123')).to.be.equal('123.00');
    });
    it('123456789', function() {
        expect(testFunc('123456789')).to.be.equal('123,456,789.00');
    });
    it('0.0123', function() {
        expect(testFunc(0.0123)).to.be.equal('0.01');
    });
});
