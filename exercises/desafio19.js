use commerce;
db.produtos.find({ nome: { $regex: /mc$/ } }).count();
