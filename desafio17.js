/*
  Adicione o elemento `muito sódio`
  ao _array_ `tags`
  nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.
*/

/*
  use commerce;
  db.produtos.updateMany({ 'valoresNutricionais': { $elemMatch: { 'tipo': 'sódio', 'percentual': { $gte: 40 } } } }, { $push: { 'tags': 'muito sódio' } });
*/
