// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('数字1不是对象', function() {
        expect(testFunc(1)).to.be.equal(false);
    });
    it('undefined不是对象', function() {
        expect(testFunc(undefined)).to.be.equal(false);
    });
    it('数组不是对象', function() {
        expect(testFunc([])).to.be.equal(false);
    });
});
