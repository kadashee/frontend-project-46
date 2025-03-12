### Hexlet tests and linter status:

[![Actions Status](https://github.com/kadashee/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kadashee/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/43cce3b342d7100009c5/maintainability)](https://codeclimate.com/github/kadashee/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/43cce3b342d7100009c5/test_coverage)](https://codeclimate.com/github/kadashee/frontend-project-46/test_coverage)
[![CI](https://github.com/kadashee/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/kadashee/frontend-project-46/actions/workflows/ci.yml)

# Вычислитель отличий

________________

Утилита командной строки для поиска отличий между конфигурационными файлами.

## Требования

_______________________________________

- Node.js >= 14.0.0

## Установка

________________________________

```
git clone https://github.com/kadashee/frontend-project-46.git

cd frontend-project-46

make install
```

# Возможности

___________________________

- Поддержка форматов входных файлов:
    - JSON
    - YAML/YML
- Форматы вывода различий:
    - stylish (древовидная структура, по умолчанию)
    - plain (текстовое описание различий)
    - json (результат в JSON формате)
- Сравнение как плоских, так и вложенных структур
- Вызов справки: `gendiff -h`
- Возможно установки как зависимость в любом другом NPM-пакете

# Примеры использования

_____________________________

### Сравнение плоских JSON файлов (формат stylish)

Cравнение двух JSON файлов с простой структурой. Вывод в формате по умолчанию.

[![asciicast](https://asciinema.org/a/EebwDLzo6aSaeg7p6uLRx155X.svg)](https://asciinema.org/a/EebwDLzo6aSaeg7p6uLRx155X)

### Сравнение плоских YAML файлов (формат stylish)

Демонстрация работы с YAML файлами. Вывод в формате по умолчанию.

[![asciicast](https://asciinema.org/a/f3sMpuBQUFHGR6wl1RzWf5mCB.svg)](https://asciinema.org/a/f3sMpuBQUFHGR6wl1RzWf5mCB)

### Рекурсивное сравнение (формат stylish)

Сравнение вложенных структур с отображением изменений на всех уровнях вложенности.

[![asciicast](https://asciinema.org/a/PDQCGPV8BIZwm2IyvtRFawaYS.svg)](https://asciinema.org/a/PDQCGPV8BIZwm2IyvtRFawaYS)

### Вывод в формате plain

Текстовый формат вывода, показывающий изменения в виде описаний: что добавлено, удалено или изменено.

[![asciicast](https://asciinema.org/a/QeJrtnXnw5ZYdJmFRgYP5ZUh7.svg)](https://asciinema.org/a/QeJrtnXnw5ZYdJmFRgYP5ZUh7)

### Вывод в формате JSON

Вывод различий в формате JSON.

[![asciicast](https://asciinema.org/a/mrRZ6O5Ud8EwP51awDacFAS3J.svg)](https://asciinema.org/a/mrRZ6O5Ud8EwP51awDacFAS3J)

## Использование в качестве импортируемой функции

_____________________________

```javascript
import genDiff from '@hexlet/code';

const diff = genDiff('file1.json', 'file2.json');
console.log(diff);

// С указанием формата
const plainDiff = genDiff('file1.yml', 'file2.yml', 'plain');
console.log(plainDiff);
