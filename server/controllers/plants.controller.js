import { Plant } from '../models/plants.model.js';
export const getPlants = (req, res) => {
  try {
    res.send('Hola');
  } catch (err) {
    res.send(err.message);
  }
};
export const addPlants = async (req, res) => {
  try {
    const { body } = req;
    const newPlant = await Plant.create(body);
    // const newPlant = new Plant(body);
    // await newPlant.save();
    res.status(201).send(newPlant);
  } catch (err) {
    res.send(err.message);
  }
};
