use commerce;
db.produtos.updateMany({nome: {$in:['Big Mac','Quarteirão com Queijo']}},{$push:{ ingredientes: ['bacon']}});
db.produtos.find();
