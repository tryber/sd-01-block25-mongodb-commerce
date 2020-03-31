use commerce;
show collections;
db.produtos.updateMany({}, {$set: {criadoPor: 'Coruja'}});
