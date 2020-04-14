/*
  Inclua
  o campo `valorUnitario`
  em todos os documentos em que esse campo não existe
  e atribua a ele o valor `0.00`,
  com o tipo `NumberDecimal`.
*/

/*
use commerce;
db.produtos.updateMany({ 'valorUnitario': { $exists: 0 } }, { $set: { 'valorUnitario': NumberDecimal('0.00') } });
*/
