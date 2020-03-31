use commerce;
db.produtos.updateMany({}, { $set: { criadoPor: "Henrique Eyer" } });
db.produtos.find();
