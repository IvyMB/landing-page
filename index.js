(async () => {
const db = require (".../model/model");

const clientes = await db.selectClients();
console.log(clientes);
}) ();