/**
 * @description test dome
 * @author sskaps
 */

function sum(a, b) {
    return a + b
}

test('测试10 + 20', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})