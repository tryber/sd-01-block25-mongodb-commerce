use commerce;
db.produtos.updateMany(
  { },
  {
    $pull: {
      ingrediente: "cebola"
    }
  }
);