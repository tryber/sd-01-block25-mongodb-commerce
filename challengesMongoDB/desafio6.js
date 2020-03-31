use commerce;
db.produtos.update({nome: 'Big Mac'}, {$set: {valorUnitario: NumberDecimal('16.90')}, $currentDate: {ultimaModificacao: true}});
