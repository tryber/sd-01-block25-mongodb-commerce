use commerce;
db.produtos.updateMany(
  {valorUnitario: {$exists: false}},
  { $set: { valorUnitario: 'Douglas Eduardo' } }
);
