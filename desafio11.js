use commerce;
db.produtos.update({nome:'Cheddar McMelt'},{$pop :{ ingredientes: 1 }});
db.produtos.find();
