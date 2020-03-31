use commerce;
db.produtos.updateMany(
  { tags: { $all: ['ave'] } },
  { $set: { avaliacao: 5 } },
);
