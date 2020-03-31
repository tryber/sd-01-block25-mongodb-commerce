use commerce;
db.produtos.count({valoresNutricionais: {$elemMatch: {tipo: 'sódio', percentual: {$gte: 40}}}})
db.produtos.updateOne({valoresNutricionais: {$elemMatch: {tipo: 'sódio', percentual: {$gte: 20, $lte: 40}}}}, {$push: {tags: 'contém sódio'}})
