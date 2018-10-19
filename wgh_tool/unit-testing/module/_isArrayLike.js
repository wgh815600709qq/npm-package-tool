// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it(`{'0':'a', '1':'b', '2':'c', length:3}是类数组`, function() {
        expect(testFunc({'0':'a', '1':'b', '2':'c', length:3})).to.be.equal(true);
    });
    it(`{'1':2}不是类数组`, function() {
        expect(testFunc({'1':2})).to.be.equal(false);
    });
});
