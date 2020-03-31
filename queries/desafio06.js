use commerce;
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: { ultimaModificacao: { $type: "date" }},
    $set: { valorUnitario: 16.90 }
  }
);
