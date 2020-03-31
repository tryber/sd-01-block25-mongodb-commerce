use commerce;
db.produtos.count({tags: ['bovino','pão']});
db.produtos.updateOne({tags: ['bovino','pão']}, {$inc: {'vendasPorDia.6': 120}});
