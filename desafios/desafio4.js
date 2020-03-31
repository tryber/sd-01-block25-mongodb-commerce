// use commerce;
db.produtos.updateMany(
  { tags: { $all: ['bovino'] } },
  { $set: { avaliacao: 5 } },
);
