use commerce;
db.produtos.updateMany(
  { nome: { $nin: ['McChicken'] } },
  {
    $addToSet: {
      ingredientes: { $each: ['ketchup'] }
    }
  },
  { upsert: true }
);
