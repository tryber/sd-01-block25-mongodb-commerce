use commerce;
db.produtos.updateMany({ingredientes: 'cebola'}, {$pull: {ingredientes: 'cebola'}});
