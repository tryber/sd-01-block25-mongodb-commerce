use commerce;
db.produtos.updateMany({tags: {$all:['ave']}},{$inc:{ avaliacao: 3}});
db.produtos.find();
