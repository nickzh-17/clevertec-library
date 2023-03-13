const checkId = (str) => {
  const hasNotSymbols = (value) => !/[^A-Za-z0-9]/.test(value);
  const hasNumbers = (value) => /[0-9]/.test(value);
  const hasLetters = (value) => /[A-Za-z]/.test(value);

  if (hasLetters(str) && hasNumbers(str) && hasNotSymbols(str)) return true;

  if (!hasLetters(str) && !hasNotSymbols(str) && hasNumbers(str)) return 'letters';
  if (!hasLetters(str) && !hasNotSymbols(str) && !hasNumbers(str)) return 'letters numbers';
  if (hasNumbers(str) && hasNotSymbols(str) && !hasLetters(str)) return 'letters';
  if (!hasNumbers(str) && hasNotSymbols(str) && hasLetters(str)) return 'numbers';
  return true;
};

const checkPassword = (str) => {
  const minLength = (value) => value.length >= 8;
  const hasUpperLetter = (value) => /[А-ЯЁA-Z]/.test(value);
  const hasNumber = (value) => /[0-9]/.test(value);

  if (minLength(str) && hasUpperLetter(str) && hasNumber(str)) return true;

  const res = [];
  if (!minLength(str)) res.push('minLength');
  if (!hasUpperLetter(str)) res.push('upperLetter');
  if (!hasNumber(str)) res.push('number');
  return res.join(' ');
};

export const formData = [
  {
    step: 1,
    id: 'auth_input_1',
    name: 'username',
    type: 'text',
    title: 'Придумайте логин для входа',
    defaultHint: 'Используйте для логина латинский алфавит и цифры',
    hasMultipleHints: true,
    keywords: [
      { key: 'letters', string: 'латинский алфавит' },
      { key: 'numbers', string: 'цифры' },
    ],
    errorTips: [{ type: 'required', message: 'Поле не может быть пустым' }],
    validationSchema: {
      required: true,
      validate: (value) => checkId(value),
    },
  },
  {
    step: 1,
    id: 'auth_input_2',
    name: 'password',
    type: 'password',
    hasCheckIcon: true,
    title: 'Пароль',
    defaultHint: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    hasMultipleHints: true,
    keywords: [
      { key: 'minLength', string: 'не менее 8 символов' },
      { key: 'upperLetter', string: 'заглавной буквой' },
      { key: 'number', string: 'цифрой' },
    ],
    errorTips: [
      { type: 'required', message: 'Поле не может быть пустым' },
      { type: 'minLength', message: 'Поле не может быть пустым' },
    ],
    validationSchema: {
      required: true,
      validate: (value) => checkPassword(value),
    },
  },
  {
    step: 2,
    id: 'auth_input_3',
    name: 'firstName',
    type: 'text',
    title: 'Имя',
    errorTips: [{ type: 'required', message: 'Поле не может быть пустым' }],
    validationSchema: {
      required: true,
    },
  },
  {
    step: 2,
    id: 'auth_input_4',
    name: 'lastName',
    type: 'text',
    title: 'Фамилия',
    errorTips: [{ type: 'required', message: 'Поле не может быть пустым' }],
    validationSchema: {
      required: true,
    },
  },
  {
    step: 3,
    id: 'auth_input_5',
    name: 'phone',
    type: 'tel',
    title: 'Номер телефона',

    errorTips: [
      { type: 'required', message: 'Поле не может быть пустым' },
      { type: 'pattern', message: 'В формате +375 (хх) ххх-хх-хх' },
    ],
    validationSchema: {
      required: true,
      pattern: /[123]/,
    },
  },
  {
    step: 3,
    id: 'auth_input_6',
    name: 'email',
    type: 'email',
    title: 'E-mail',
    keywords: [
      { key: 'minLength', string: 'не менее 8 символов' },
      { key: 'upperLetter', string: 'заглавной буквой' },
      { key: 'number', string: 'цифрой' },
    ],
    errorTips: [
      { type: 'required', message: 'Поле не может быть пустым' },
      { type: 'pattern', message: 'Введите корректный e-mail' },
    ],
    validationSchema: {
      required: true,
      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
  },
];
