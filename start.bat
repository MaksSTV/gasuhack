@echo off
REM Переход в директорию backend
cd gasuhack/backend

REM Запуск сервера разработки бэкенда
start npm run dev

REM Возвращение в корневую директорию (предполагается, что /backend находится на один уровень вложенности от корня)
cd ..

REM Переход в директорию frontend
cd ./frontend

REM Запуск клиентской части
start npm run start

REM Открытие браузера по умолчанию с приложением
REM start http://localhost:3000/

REM Возвращение в корневую директорию
cd ..
