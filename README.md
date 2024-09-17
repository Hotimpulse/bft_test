# BFT task

### Структура данных для реализации задачи:

**Для более динамичного и переиспользуемого подхода, можно выделить два интерфейса:**

```
export interface IOption {
  value: string;
  country?: string;
}

export interface ISelectors {
    label: string;
    options: IOption[];
    value: string;
}
```

**Данные могут выглядеть следующим образом:**

```
export const data = {
  countryList: [
    {
      id: '1',
      name: 'Республика Беларусь',
      cities: ['Минск', 'Гомель'],
      accommodation: ['Общежития', 'Не интересует'],
    },
    {
      id: '2',
      name: 'Российская Федерация',
      cities: ['Москва', 'Сочи'],
      accommodation: ['Общежития', 'Аренда', 'Не интересует', 'Общежития + Аренда'],
    },
  ],
  univeristyField: ['Технический', 'Гуманитарный'],
};

```

**В проекте использованы:**

- Vite
- Cypress (E2E tests)

**В проекте настроены:**

- Eslint
- Prettier
- Husky (pre-commit/pre-push formatting and testing)
