const dotenv = require('dotenv');
const Application = require('./framework/Application');
dotenv.config();
const userRouter = require('./src/user-router')

const PORT = process.env.PORT || 5000;

const app = new Application();

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))