import express from 'express';
import { Accusation } from '../model/Accusation';
import { AccusationAdd, AccusationDelete, AccusationGetAll, AccusationUpdate } from '../services/AccusationService';

const router = express.Router();

exports.saveAccusation = async (req : any, res : any) => {
  const accusation = req.body;
  console.log("Accusation: ", accusation);

  try {
    const addAccusation = await AccusationAdd(accusation);
    res.send(200).json(addAccusation);
  } catch (error) {
    console.error("Erro Adding Accusation: ", error);
  }
};

exports.updateAccusation = async (req : any, res : any) => {
  const id  = Number(req.params.id);
  console.log("Accusation Id For Update: ", id);
  const accusation : Accusation = req.body;

  try {
    await AccusationUpdate(id, accusation);
    res.send("Accusation Updated");
  } catch (error) {
    console.log("Error Update Accusation: ", error);
  }
};

exports.deleteAccusation = async (req : any, res : any) => {
  const id = Number(req.params.id);

  try {
    await AccusationDelete(id);
    res.send("Accusation Deleted");
  } catch (error) {
    console.log("Error Delete Accusation", error);
  }
};

exports.getAllAccusation = async (req : any, res : any) => {
  try {
    const accusation = await AccusationGetAll();
    console.log(res.json(accusation));
  } catch (error) {
    console.log("Error Getting Accusation", error);
  }
};

export default router;