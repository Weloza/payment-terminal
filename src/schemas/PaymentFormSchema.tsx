import { z } from "zod";

const PHONE_REQUIRED_ERR_TEXT = 'Введите номер телефона';
const PHONE_LENGTH_ERR_TEXT = 'Неверный номер';
const SUM_REQUIRED_ERR_TEXT = 'Введите сумму от 1 до 1000 рублей';
const SUM_MIN_ERR_TEXT = 'Не менее 1 рубля';
const SUM_MAX_ERR_TEXT = 'Не более 1000 рублей';

export const PaymentFormSchema = z.object({
  phoneNumber: z
    .string({
      required_error: PHONE_REQUIRED_ERR_TEXT,
    })
    .min(15, { message: PHONE_LENGTH_ERR_TEXT }),
  sum: z
    .number({ message: SUM_REQUIRED_ERR_TEXT })
    .min(1, { message: SUM_MIN_ERR_TEXT })
    .max(1000, { message: SUM_MAX_ERR_TEXT })
});
