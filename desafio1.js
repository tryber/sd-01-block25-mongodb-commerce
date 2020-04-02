use commerce;
db.produtos.updateMany({}, { $set: { criadoPor: "Guilherme Luiz" } });
db.produtos.find();
