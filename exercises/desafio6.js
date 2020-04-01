use commerce;
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { valorUnitario: NumberDecimal("16.90") },
  $currentDate: { ultimaModificacao: true } }
);