use commerce;
db.produtos.update({nome: 'Big Mac'}, {$inc: {'vendasPorDia.3': 60}});
