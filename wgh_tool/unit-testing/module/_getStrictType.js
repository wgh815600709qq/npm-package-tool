// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('1380013800字符', function() {
        expect(testFunc('1380013800')).to.be.equal(`[object String]`);
    });
    it('12345678910数字', function() {
        expect(testFunc(12345678910)).to.be.equal('[object Number]');
    });
    it('[1]数组', function() {
        expect(testFunc([1])).to.be.equal('[object Array]');
    });
    it('{a:1}对象', function() {
        expect(testFunc({a:1})).to.be.equal('[object Object]');
    });
});
