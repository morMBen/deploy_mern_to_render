export const getPlants = (req, res) => {
  try {
    res.send('Hola');
  } catch (err) {
    res.send(err.message);
  }
};
