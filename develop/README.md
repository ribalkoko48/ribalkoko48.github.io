MFR.ProductCatalog.Editor

## Настройка окружения:
1. Установить Node.js (https://nodejs.org/en/download/)
2. Установить менеджер yarn по ссылке: https://yarnpkg.com/en/docs/install
3. Открыть папку "/product-catalog-editor" в консоле
4. выполнить команду "yarn install"

Работа над приложением:
1. выполнить команду в консоле "yarn run start", находясь в папке "/product-catalog-editor"
2. Должен открыться браузер на странице localhost:3000 и должна отображаться страница приложения

P.S. При редактировании .js файлов страница будет автоматически перезагружаться, так что не нужно при каждом изменении вводить "yarn run start"
Для того чтобы установить новый пакет\зависимость\библиотеку, нужно остановить приложение (если запущено, то в консоле нажать Ctrl+C) и выполнить команду "yarn add [название_библиотеки]"

Выпуск дистрибутива для публикации на сервере:
1. выполнить команду в консоле "yarn run build", находясь в папке "/product-catalog-editor"
2. дистрибутив располагается в подпапке "dist"

В проекте используется MobX, про него можно почитать вот эту статью https://habr.com/ru/post/471048/, и советую еще посмотреть вот этот ролик https://www.youtube.com/watch?v=9rZeCNLfeuk
Также используется Bootstrap (https://react-bootstrap.github.io/) и MaterialUI(https://material-ui.com/)

Для запуска тестов нужно в консоли выполнить команду npm test. Для тестирования компонентов react используется библиотека jest. Подробности вот здесь
https://ru.reactjs.org/docs/testing.html

## Настройка IIS
добавляем в корень web.config с настройками

настройка шрифтов с расширением .woff2
- https://stackoverflow.com/questions/25796609/font-face-isnt-working-in-iis-8-0

настройка react-router
- https://coderoad.ru/51755370/React-Router-iis-%D0%9A%D0%B0%D0%BA-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D1%8C-%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8E

- плагин для IIS rewrite_amd64_ru-RU.msi лежит в папке public
