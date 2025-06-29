export const ERROR_MESSAGES = {
  account_locked: 'Аккаунт заблокирован',
  already_confirmed: 'Электронная почта уже подтверждена',
  bank_account_exists: 'Банковский счёт уже указан',
  bank_account_invalid: 'Неверные реквизиты счёта',
  bank_account_locked: 'Банковский счёт заблокирован',
  bank_account_not_found: 'Банковский счёт не найден',
  bank_not_found: 'Банк не найден',
  country_not_found: 'Страна не найдена',
  document_type_not_found: 'Тип документа не найден',
  email_exists: 'Email уже зарегистрирован',
  inn_exists: 'ИНН уже зарегистрирован',
  inn_not_found: 'ИНН не найден',
  invalid_code: 'Неверный код',
  invalid_credentials: 'Неверные учётные данные',
  invalid_passport: 'Неверные данные паспорта',
  invalid_token: 'Некорректный или истёкший токен',
  invalid_token_type: 'Некорректный тип токена',
  missing_token: 'Отсутствует токен авторизации',
  passport_exists: 'Паспорт уже добавлен',
  passport_not_found: 'Паспорт не найден',
  phone_exists: 'Телефон уже зарегистрирован',
  role_not_found: 'Роль не найдена',
  snils_exists: 'СНИЛС уже зарегистрирован',
  snils_not_found: 'СНИЛС не найден',
  status_not_found: 'Статус не найден',
  status_required: 'Не указан статус',
  taxation_not_found: 'Налоговый статус не найден',
  user_exists: 'Пользователь уже существует',
  user_not_found: 'Пользователь не найден',
  not_found: 'Не найдено'
};

export function translateError(code) {
  if (!code) return '';
  return ERROR_MESSAGES[code] || code;
}
