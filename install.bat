@echo off

REM Клонирование проекта
git clone https://github.com/MaksSTV/gasuhack.git

REM Переход в директорию backend
cd .\gasuhack\backend

REM Создание файла .env и запись в него
echo PORT=5000 > .\.env
echo NODE_ENV=development >> .\.env
echo DB_NAME='studboard_db' >> .\.env
echo DB_ADMIN='studboard_db_admin' >> .\.env
echo DB_ADMIN_PASSWORD='studboard_strong_password' >> .\.env
echo HOST='195.133.49.27' >> .\.env
echo DB_PORT='5432' >> .\.env
echo. >> .\.env
echo JWT_ACCESS_SECRET=jwt-secret-key >> .\.env
echo JWT_REFRESH_SECRET=jwt-refresh-secret-key >> .\.env
echo. >> .\.env
echo SMTP_HOST="smtp.gmail.com" >> .\.env
echo SMTP_PORT=587 >> .\.env
echo SMTP_USER="studboard.spbgasu@gmail.com" >> .\.env
echo SMTP_PASSWORD="mvnb gioh dgsp ddyr" >> .\.env
echo. >> .\.env
echo API_URL="http://localhost:5000" >> .\.env
echo CLIENT_URL="http://localhost:3000" >> .\.env
echo. >> .\.env
echo S3_REGION="ru-central1" >> .\.env
echo S3_ENDPOINT="https://storage.yandexcloud.net" >> .\.env
echo. >> .\.env
echo S3_KEY_ID="YCAJEXyMZNiN1e-Ag5J6oT3Ww" >> .\.env
echo S3_SECRET_KEY="YCOxd4OshmUVP2p0VN_poBDwuculuJquoeb41hO7" >> .\.env
echo. >> .\.env
echo # логин и пароль пользователя с правами администратора: >> .\.env
echo # { >> .\.env
echo #    "email": "studboard.spbgasu@gmail.com", >> .\.env
echo #    "password": "studboard" >> .\.env
echo # } >> .\.env

REM Предполагается, что .env файл уже скопирован в буфер обмена.
REM В bat-файлах нет прямой поддержки для вставки из буфера обмена, поэтому необходимо вручную переместить .env файл в директорию.

REM Установка node_modules
start npm install

REM Возвращение в корневую директорию (предполагается, что /backend находится на один уровень вложенности от корня)
cd ..

REM Переход в директорию frontend
cd ./frontend

REM Установка node_modules
start npm install

REM Возвращение в корневую директорию
cd ..
