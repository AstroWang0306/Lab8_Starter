// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber
test('Valid phone number should return true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  
  test('Invalid phone number should return false', () => {
    expect(functions.isPhoneNumber('123--8901')).toBe(false);
  });
  
  test('Valid phone number with parentheses should return true', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  
  test('Invalid phone number with incorrect format should return false', () => {
    expect(functions.isPhoneNumber('123-45-67890')).toBe(false);
  });
  
  // isEmail
  test('Valid email should return true', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });
  
  test('Invalid email should return false', () => {
    expect(functions.isEmail('test.example.com')).toBe(false);
  });
  
  test('Valid email with underscore should return true', () => {
    expect(functions.isEmail('test_user@example.com')).toBe(true);
  });
  
  test('Invalid email with missing domain should return false', () => {
    expect(functions.isEmail('test@example')).toBe(false);
  });
  
  // isStrongPassword
  test('Valid strong password should return true', () => {
    expect(functions.isStrongPassword('Abc123_')).toBe(true);
  });
  
  test('Invalid weak password should return false', () => {
    expect(functions.isStrongPassword('pas')).toBe(false);
  });
  
  test('Valid strong password with maximum length should return true', () => {
    expect(functions.isStrongPassword('Abcdefghijklmno')).toBe(true);
  });
  
  test('Invalid strong password with special characters should return false', () => {
    expect(functions.isStrongPassword('Abc@123')).toBe(false);
  });
  
  // isDate
  test('Valid date should return true', () => {
    expect(functions.isDate('12/31/2022')).toBe(true);
  });
  
  test('Invalid date with incorrect format should return false', () => {
    expect(functions.isDate('12-31-2022')).toBe(false);
  });
  
  test('Valid date with single-digit day and month should return true', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
  });
  
  test('Invalid date with missing year should return false', () => {
    expect(functions.isDate('12/31')).toBe(false);
  });
  
  // isHexColor
  test('Valid hex color should return true', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
  });
  
  test('Invalid hex color with incorrect format should return false', () => {
    expect(functions.isHexColor('##F0000')).toBe(false);
  });
  
  test('Valid hex color with lowercase letters should return true', () => {
    expect(functions.isHexColor('#ff00aa')).toBe(true);
  });
  
  test('Invalid hex color with extra characters should return false', () => {
    expect(functions.isHexColor('#FF0000AA')).toBe(false);
  });