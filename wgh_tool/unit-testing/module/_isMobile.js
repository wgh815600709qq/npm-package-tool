// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('1380013800不合法', function() {
        expect(testFunc('1380013800')).to.be.equal(false);
    });
    it('12345678910不合法', function() {
        expect(testFunc('12345678910')).to.be.equal(false);
    });
    it('13631469158合法', function() {
        expect(testFunc('13631469158')).to.be.equal(true);
    });
});
