// use commerce;
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "timestamp" }
    },
    $set: {
      valorUnitario: NumberDecimal("16.90")
    }
  }
);
