use commerce;
db.produtos.updateMany(
  { },
  { $push: { valoresNutricionais.percentual: { $each: [], $sort: -1 } } }
)