// 单元测试
const tools = require('../../index')
const expect = require('chai').expect
const path = require('path')
const funcname = path.parse(module.filename).name
let testFunc = tools[funcname]
describe(`单元测试：function ${funcname} 开始`, function() {
    it('[1,1,1,2,3,3.1,4,4.1,5]最大值为5', function() {
        expect(testFunc([1,1,1,2,3,3.1,4,4.1,5])).to.be.equal(5);
    });
    it('[1,1,1,2,6,3,3.1,4,4.1,5]最大值为6', function() {
        expect(testFunc([1,1,1,2,6,3,3.1,4,4.1,5])).to.be.equal(6);
    });
    it('[-1,1,0]最大值为1', function() {
        expect(testFunc([-1,1,0])).to.be.equal(1);
    });
});
