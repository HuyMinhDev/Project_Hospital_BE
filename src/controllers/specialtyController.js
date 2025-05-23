// const { Model } = require("sequelize/types");
import specialtyService from "../services/specialtyService";
let createSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.createSpecialty(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    // console.log(e);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter!",
    });
  }
};
module.exports = {
  createSpecialty: createSpecialty,
};
