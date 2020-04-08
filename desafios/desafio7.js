use commerce;
db.produtos.updateMany(
  { nome: { $nin: ['McChicken'] } },
  {
    $addToSet: {
      ingredientes: 'ketchup'
    }
  },
  { upsert: true }
);
