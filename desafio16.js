/*
  Ordene os elementos do _array_ `valoresNutricionais`
  pelo campo `percentual`
  de forma descendente.
  Dica: mesmo sem adicionar nenhum novo elemento,
  para essa operação é necessário utilizar também o modificador `$each`.
*/

/*
  use commerce;
  db.produtos.updateMany({}, { $push: { 'valoresNutricionais': { $each: [], $sort: { 'percentual': -1 } } } });
*/
