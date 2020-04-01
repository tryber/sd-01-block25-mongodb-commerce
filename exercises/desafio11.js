use commerce;
db.produtos.updateMany(
  { nome: "Cheddar Mcmelt" }, 
  { $pop: { ingrediente: 1 } }
);
