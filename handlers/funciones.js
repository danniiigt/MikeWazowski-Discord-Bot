const asegurar = async (schema, id, id2, objeto) => {
  let data = await schema.findOne({ id: id2 });
  if (!data) {
    console.log(`NO HABIA DB CREADA, CREANDO UNA...`);
    data = await new schema(objeto);
    await data.save();
  }

  return data;
};

module.exports = {
  asegurar,
};
