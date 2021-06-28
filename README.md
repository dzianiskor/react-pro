# React PRO
***
Нужно иметь глобально yarn, node, webpack

`npm install -g yarn`
`yarn -v`
`node -v`
***
Переходим в папку проекта и набираем

`yarn init`
`yarn add react react-dom`
`yarn add -D webpack@4.44.2 webpack-cli@3.3.12`
`yarn add -D typescript@4.0.3 ts-loader@8.2.0`
***
Добавляем `.gitignore`
***
Создаем webpack.config.js
***
Теперь мы хотим проинициилизировать TS настройки. Для этого добавим глобальный пакет и создадим файл настроек. Немного его поправим.

`npm install -g typescript tsc`
`tsc -v`
`tsc --init`
***
Теперь ставим глобально webpack на компьютер и пробуем собрать проект. 
После чего билдим проект.
`webpack --config webpack.config.js`
***
Ставим плагин для подтягивания в нужную папку HTML файлов
`yarn add -D html-webpack-plugin@4.5.0`
Теперь у нас билдится проект в папку dist.
***
Для поднятия локального сервера ставим пакет
`yarn add -D webpack-dev-server@3.11.0`
***
Теперь он поднимается командой `webpack-dev-server`, но мы пропишем скрипты и будем по итогу поднимать командой
`yarn start`
***
Подключим стили. Для этого добавим лоадеры которые научат вебпак работать с файлами стилей.
`yarn add -D css-loader@5.0.0 style-loader@2.0.0 sass-loader@10.0.4`
`yarn add -D sass-loader node-sass`
`yarn add classnames`

***
Для работы с TS поставим нужные пакеты
`yarn add -D @types/react @types/react-dom`
`yarn add -D @types/classnames`
***
Добавим в проект и поправим в конфиге вебпака лоадер
`yarn add -D css-modules-typescript-loader`

***
Установим ESLINT
`yarn add -D eslint@7.12.1 eslint-config-airbnb@18.2.0 eslint-config-react-app@6.0.0 eslint-import-resolver-webpack@0.13.0 eslint-plugin-flowtype@5.2.0 eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.21.5 eslint-plugin-react-hooks@4.2.0 @typescript-eslint/eslint-plugin@4.6.0 @typescript-eslint/parser@4.6.0`
***

Далее в корне создадим файл `.eslintrc.js`

`module.exports = {
env: {
browser: true,
},
extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier', 'prettier/react'],
parser: '@typescript-eslint/parser',
parserOptions: {
ecmaFeatures: {
jsx: true,
},
ecmaVersion: 12,
sourceType: 'module',
},
plugins: ['prettier', 'react', '@typescript-eslint'],
rules: {
'@typescript-eslint/no-unused-vars': 'error',
'no-console': 'error',
'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
'import/extensions': [
'error',
'ignorePackages',
{
ts: 'never',
tsx: 'never',
js: 'never',
jsx: 'never',
},
],
},
settings: {
'import/resolver': {
webpack: {
config: 'webpack.config.js',
},
},
},
};`
***
Для prettier установим
`yarn add -D prettier@2.1.2 pretty-quick@3.1.0 eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.1.4`

В корне создадим файл `.prettierrc`
`{
"printWidth": 120,
"tabWidth": 2,
"useTabs": false,
"semi": true,
"singleQuote": true,
"trailingComma": "all",
"bracketSpacing": true,
"jsxBracketSameLine": true,
"fluid": false,
"arrowParens": "always"
}`
***
Для автоматической проверки и форматирование при коммите добавим две либы и пару строк в `package.json`
`yarn add -D husky@4.3.0 lint-staged@10.5.1`
`"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"src/**/*.{js,jsx,ts,tsx,json,css}": [
"pretty-quick --staged",
"eslint ./src"
]
}`

***
Для работы с svg мы поставим еще разу пакетов и допишем лоадеры в вебпаке
`yarn add -D @svgr/webpack url-loader`
***
Для загрузки картинок создадим шаблон
src/custom.d.ts
declare module '*.svg' {
import React = require('react');

export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
const src: string;
export default src;
}

declare module '*.png' {
const content: any;
export default content;
}

***
Для подключения шрифта идем в гугл фонтс, выделяем, копируем импорт и просто вставляем в index.css, далее указываем шрифт в боди.
Для кастомных шрифтов ставим
`yarn add -D file-loader`
и правим вебпак
***
Установим библиотеку HookRouter
`yarn add hookrouter@1.2.3`
`yarn add -D @types/hookrouter`
Что бы наш вебпак работал с роутами нужно добавить
`devServer: {
port: 3000,
open: true,
hot: true,
historyApiFallback: true,
},`
А в index.html добавить `<base href="/">`
***
Либа для сборки урлов
`yarn add url`
***

Для тестов затянем следующие библиотеки
`yarn add -D jest ts-jest @types/jest`
Создадим конфиг файл
`npx ts-jest config:init`
Запускаются тесты
`npx jest --watch`
Что бы при тестировании не выдавало ошибок из за css модулей нужно добавить либу и поправить конфиг
`yarn add -D identity-obj-proxy`
***

Для SSR мы будем использовать node.js фреймворк Hapi
`yarn add @hapi/hapi`
Создадим два отдельных webpack файла и свяжем их в общий.
Что бы вебпак в server.js не собирал лишние зависимости установим пакет
`yarn add -D webpack-node-externals`
И добавить вызов функции nodeExternals в webpack.server
***
Для вписывания в html нашего js кода воспользуемся либой
`yarn add handlebars`
***
Для указания hapi как считывать файл main.js мы поставим либу
`yarn add @hapi/inert`
***

Для сборки в продакшен
`yarn build:prod`
`node dist/server.js`
***
Есть что улучшить
`yarn add -D mini-css-extract-plugin`
