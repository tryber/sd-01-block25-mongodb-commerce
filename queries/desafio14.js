use commerce;
db.produtos.updateMany({ tags: ["bovino", "pão"] }, { $inc: { "vendasPorDia.5": 120 }});
