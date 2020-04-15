use commerce;
db.produtos.updateMany(
  {},
  {
    $push:
    {
      tags:
      {
        $each: ['combo', 'tasty'],
        $sort: { score: 1 },

      }
    }
  }
);
