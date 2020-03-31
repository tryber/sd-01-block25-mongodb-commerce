use commerce;
db.produtos.updateMany({nome: {$inc:['Big Mac','Quarteirão com Queijo']}},{$push:{ ingredientes: 'bacon'}});
db.produtos.find();
