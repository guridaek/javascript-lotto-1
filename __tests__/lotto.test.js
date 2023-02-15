/* eslint-disable no-undef */
import { ERROR_MESSAGE, LOTTO_STRING } from '../src/data/constants';
import Lotto from '../src/domain/Lotto';

test('로또 만들기 ', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const lotto = new Lotto(numbers);

  expect(lotto.numbers).toBe(numbers);
});

test('로또 번호는 숫자이다', () => {
  const numbers = [1, '가', 3, 4, 5, 6];

  expect(() => {
    Lotto(numbers);
  }).toThrow(ERROR_MESSAGE.NOT_INTEGER(LOTTO_STRING.LOTTO_NUMBER));
});

test('로또 번호는 1~45 사이의 수이다', () => {
  const numbers = [1, 2, 3, 4, 5, 60];

  expect(() => {
    Lotto(numbers);
  }).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_RANGE(LOTTO_STRING.LOTTO_NUMBER));
});

test('로또 번호는 중복될 수 없다', () => {
  const numbers = [1, 1, 2, 3, 3, 4];

  expect(() => {
    Lotto(numbers);
  }).toThrow(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE(LOTTO_STRING.LOTTO_NUMBER));
});

test('로또 번호는 오름차순 정렬한다', () => {
  const numbers = [6, 5, 4, 3, 2, 1];
  const sortedNumbers = [1, 2, 3, 4, 5, 6];
  const lotto = new Lotto(numbers);
  expect(lotto.numbers).toEqual(sortedNumbers);
});
