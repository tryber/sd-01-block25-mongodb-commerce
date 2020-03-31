// use commerce;
db.produtos.updateMany(
  { nome: { $in: ['Big Mac', 'Quarteirão com Queijo'] } },
  {
    $addToSet: {
      ingredientes: { $each: ['bacon'] }
    }
  },
);
