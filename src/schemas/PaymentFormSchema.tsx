import { z } from "zod";

const PaymentFormSchema = z.object({
  phoneNumber: z
    .string({
      required_error: 'Введите номер телефона',
    })
    .min(15, { message: 'Неверный номер'}),
  sum: z
    .number({ message: 'Введите сумму от 1 до 1000 рублей'})
    .min(1, { message: 'Не менее 1 рубля'})
    .max(1000, { message: 'Не более 1000 рублей'})
});

export default PaymentFormSchema;