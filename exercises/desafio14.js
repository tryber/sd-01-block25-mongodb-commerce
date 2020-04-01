use commerce;
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"]} },
  { $push: { vendasPorDia: 120 }}
);
