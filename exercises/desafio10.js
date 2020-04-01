use commerce;
db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" }, 
  { $pop: { ingrediente: -1 } }
);
