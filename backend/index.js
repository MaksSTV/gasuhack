const dotenv = require('dotenv');
dotenv.config();
// const Application = require('./framework/Application');
// const userRouter = require('./src/user-router')
// const jsonParser = require('./framework/parseJson')
// const parseUrl = require('./framework/parseUrl')

const PORT = process.env.PORT || 5000;

// const app = new Application();

// app.use(jsonParser);
// app.use(parseUrl('http://localhost:5000'));
// app.addRouter(userRouter);

// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))


const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        try {
            await sequelize.authenticate()
            await sequelize.sync()
            console.log('Подключение к бд прошло успешно');
        } catch (e) {
            console.log('Подключение к бд сломалось', e)
        }    
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start()