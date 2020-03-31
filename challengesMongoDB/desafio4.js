use commerce;
db.produtos.count({tags:'bovino'});
db.produtos.update({tags:'bovino'}, {$inc: {avaliacao: 5}});
