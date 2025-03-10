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

# Примеры использования

_____________________________
[![asciicast](https://asciinema.org/a/vIdOVORLm6Ukuh6TIzNbSKG10.svg)](https://asciinema.org/a/vIdOVORLm6Ukuh6TIzNbSKG10)

[![asciicast](https://asciinema.org/a/odiVe53ikqUtj9jcCLJihbMxE.svg)](https://asciinema.org/a/odiVe53ikqUtj9jcCLJihbMxE)

[![asciicast](https://asciinema.org/a/VuFANAb9YhBMopS9KZMaPAST9.svg)](https://asciinema.org/a/VuFANAb9YhBMopS9KZMaPAST9)

[![asciicast](https://asciinema.org/a/Hdqx1CRO1Tq1RuNIkeD9ewsfE.svg)](https://asciinema.org/a/Hdqx1CRO1Tq1RuNIkeD9ewsfE)

[![asciicast](https://asciinema.org/a/8lhiilZzQaEoZecIq6HTXveNs.svg)](https://asciinema.org/a/8lhiilZzQaEoZecIq6HTXveNs)
## Возможности

- Поддержка различных форматов входных файлов: JSON, YAML
- Генерация отчета о различиях в разных форматах