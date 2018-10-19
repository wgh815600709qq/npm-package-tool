// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it(`{'0':'a', '1':'b', '2':'c', length:3}是类数组,返回数组['a','b','c']`, function() {
        expect(
            testFunc({'0':'a', '1':'b', '2':'c', length:3}).toString()
        ).to.be.equal(['a','b','c'].toString());
    });
    it(`{'1':2}不是类数组,返回[]`, function() {
        expect(testFunc({'1':2}).toString()).to.be.equal([].toString());
    });
    it(`['1', 2]是数组返回原样['1', 2]`, function() {
        expect(testFunc(['1', 2]).toString()).to.be.equal(['1', 2].toString());
    });
});
