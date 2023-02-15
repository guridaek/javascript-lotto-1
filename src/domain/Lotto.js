import { ERROR_MESSAGE, LOTTO_CONSTANT } from '../data/constants';
import Validator from '../utils/Validator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if (!Validator.isInteger(number))
        throw new Error(ERROR_MESSAGE.NOT_INTEGER(LOTTO_CONSTANT.LOTTO_NUMBER));
      if (
        LOTTO_CONSTANT.MIN_NUMBER > number ||
        LOTTO_CONSTANT.MAX_NUMBER < number
      )
        throw new Error(
          ERROR_MESSAGE.LOTTO_NUMBER_RANGE(LOTTO_CONSTANT.LOTTO_NUMBER)
        );
    });
    if (Validator.isDuplicated(numbers))
      throw new Error(
        ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE(LOTTO_CONSTANT.LOTTO_NUMBER)
      );
  }

  includes(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
