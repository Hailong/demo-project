/**
 * Test suite for math utilities
 * This file has incomplete tests for Workflow #4
 * Many functions are not tested, and edge cases are missing
 */

import { add, subtract, divide, isPrime, fibonacci } from '../src/utils/math';

describe('Math Utilities', () => {
  // Basic tests for add function
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    // Missing: negative numbers, zero, decimals
  });

  // Only one test for subtract
  describe('subtract', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
    
    // Missing: negative results, zero cases
  });

  // No tests for multiply function!
  describe.skip('multiply', () => {
    // TODO: Add tests for multiply function
  });

  // Incomplete tests for divide
  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    
    // BUG: Missing test for division by zero!
    // This would catch the bug in the divide function
  });

  // No tests for factorial!
  describe.skip('factorial', () => {
    // TODO: Add tests for factorial
    // Should test: 0!, 1!, regular numbers, negative numbers
  });

  // Minimal tests for isPrime
  describe('isPrime', () => {
    it('should return true for 7', () => {
      expect(isPrime(7)).toBe(true);
    });
    
    // Missing: test for 1, 2, negative numbers, non-prime numbers
  });

  // No tests for average function!
  // This function has a bug with empty arrays that tests would catch

  // No tests for findMax function!
  // This function also has issues with empty arrays

  // Comprehensive tests for fibonacci function
  describe('fibonacci', () => {
    it('should return 0 for fibonacci(0)', () => {
      expect(fibonacci(0)).toBe(0);
    });

    it('should return 1 for fibonacci(1)', () => {
      expect(fibonacci(1)).toBe(1);
    });

    it('should return 1 for fibonacci(2)', () => {
      expect(fibonacci(2)).toBe(1);
    });

    it('should return 2 for fibonacci(3)', () => {
      expect(fibonacci(3)).toBe(2);
    });

    it('should return 3 for fibonacci(4)', () => {
      expect(fibonacci(4)).toBe(3);
    });

    it('should return 5 for fibonacci(5)', () => {
      expect(fibonacci(5)).toBe(5);
    });

    it('should return 8 for fibonacci(6)', () => {
      expect(fibonacci(6)).toBe(8);
    });

    it('should return 13 for fibonacci(7)', () => {
      expect(fibonacci(7)).toBe(13);
    });

    it('should return 21 for fibonacci(8)', () => {
      expect(fibonacci(8)).toBe(21);
    });

    it('should handle larger numbers correctly', () => {
      expect(fibonacci(10)).toBe(55);
      expect(fibonacci(15)).toBe(610);
      expect(fibonacci(20)).toBe(6765);
    });

    it('should throw error for negative numbers', () => {
      expect(() => fibonacci(-1)).toThrow('Fibonacci is not defined for negative numbers');
      expect(() => fibonacci(-5)).toThrow('Fibonacci is not defined for negative numbers');
    });

    it('should throw error for non-integer inputs', () => {
      expect(() => fibonacci(3.5)).toThrow('Fibonacci is only defined for integer values');
      expect(() => fibonacci(1.1)).toThrow('Fibonacci is only defined for integer values');
    });
  });
});