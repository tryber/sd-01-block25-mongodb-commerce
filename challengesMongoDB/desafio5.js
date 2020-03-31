use commerce;
db.produtos.count({tags:'ave'});
db.produtos.updateMany({tags: 'ave'}, {$inc: {avaliacao: 3}});
