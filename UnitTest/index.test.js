// describe：编写更复杂的测试套件来组织测试用例，以便更好地管理和描述测试。
function add(a, b) {
    return a + b;
}
describe('基础运算测试', () => {
    test('两个正数相加', () => {
        // expect(add(2, 3)).toBe(5);
        expect(add(2, 3)).toEqual(5);

    });
});

// toBe or toEqual
// 这两者的区别在于，toBe 是相等，即 ===，而 toEqual 是内容相同，即深度相等。我们建议基础类型用 toBe，复杂类型用 toEqual。


