const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
const helmet = require('helmet')

const routerAPI = require('./routes/bookRoots');

const app = express();

app.use(morgan('tiny'));
app.use(helmet());

app.use('/api/v1', routerAPI);


app.use (function (req, res) {
    res.status(404).send ('Recurso não encontrado.')
})

// Inicializa o servidor HTTP na porta 3000
app.listen (3000, function () {
    console.log ('Servidor rodando na porta 3000')
});
