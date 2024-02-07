let express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const app = express();

conectarDB();

//para pdoer usar archivos json
app.use(express.json());

app.use(cors());
app.use('/productos', require('./routes/producto'))

app.listen(4000, () => {
    console.log("El servidor está corriendo exitosamente")
})

app.get('/', (req, res)=>{
    res.send('Hola mundo')
});
