import calculate from './calculate';
import operate from './operate';

// arrange
const mockState = {
  total: null,
  next: null,
  operation: null,
};

describe('CALCULATE TESTS\n', () => {
  test('should reset all state (AC)', () => {
    expect(calculate(mockState, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('should update number', () => {
    expect(calculate(mockState, '1')).toStrictEqual({
      total: null,
      next: '1',
    });
  });
  test('should add operation', () => {
    const numState = { ...mockState, next: '1' };
    expect(calculate(numState, '+')).toStrictEqual({
      operation: '+',
      total: '1',
      next: null,
    });
  });
});

// add test to the calculate function
describe('should return correct calculation', () => {
  test('should return null if the button name is AC', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
