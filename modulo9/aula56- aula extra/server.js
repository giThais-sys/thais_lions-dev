const app= require ('./src/app')
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/SASSAKI')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((erro) => console.error('Erro ao conectar ao MongoDB:', erro));

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});