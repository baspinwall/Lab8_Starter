// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('(123) 123-1234', () => {
    expect(functions.isPhoneNumber('(123) 123-1234')).toBe(true);
});

test('(321) 123-1234', () => {
    expect(functions.isPhoneNumber('(321) 123-1234')).toBe(true);
});

test('1', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

test('(321231234', () => {
    expect(functions.isPhoneNumber('(321231234')).toBe(false);
});

test('a@a.com', () => {
    expect(functions.isEmail('a@a.com')).toBe(true);
});

test('b@a.com', () => {
    expect(functions.isEmail('b@a.com')).toBe(true);
});

test('aa.com', () => {
    expect(functions.isEmail('aa.com')).toBe(false);
});

test('bcom', () => {
    expect(functions.isEmail('bcom')).toBe(false);
});

test('aaaaa', () => {
    expect(functions.isStrongPassword('aaaaa')).toBe(true);
});

test('baaaa', () => {
    expect(functions.isStrongPassword('baaaa')).toBe(true);
});

test('aaa', () => {
    expect(functions.isStrongPassword('aaa')).toBe(false);
});

test('b', () => {
    expect(functions.isStrongPassword('b')).toBe(false);
});

test('11/11/1111', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
});

test('21/11/1111', () => {
    expect(functions.isDate('21/11/1111')).toBe(true);
});

test('1111/1111', () => {
    expect(functions.isDate('1111/1111')).toBe(false);
});

test('/11/1111', () => {
    expect(functions.isDate('/11/1111')).toBe(false);
});

test('#FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('#FFA', () => {
    expect(functions.isHexColor('#FFA')).toBe(true);
});

test('#FF', () => {
    expect(functions.isHexColor('#FF')).toBe(false);
});

test('#', () => {
    expect(functions.isHexColor('#')).toBe(false);
});