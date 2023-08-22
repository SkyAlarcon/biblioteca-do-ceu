const bcrypt = require("bcrypt");
const postersModel = require("../models/postersModel.js");
const script = require("./scripts.js");

const createPoster = async (req, res) => {
    try {
        const {
            alas,
            key,
            comment,
            admAlas,
            admKey
        } = req.body;
        const missingInfo = [];
        if (!alas) missingInfo.push("alas")
        if (!key) missingInfo.push("key")
        if (!admAlas) missingInfo.push("admAlas")
        if (!admKey) missingInfo.push("admKey")
        const REQUIRED_LENGTH = process.env.REQUIRED_LENGTH
        if ((missingInfo.length > 0) || (key.length != REQUIRED_LENGTH)) return res.status(400).json({message: "Please fill all fields with an * and correctly"});
        const adm = await postersModel.findOne({alas: admAlas});
        if (!adm) return res.status(400).json({message: "Please fill all fields with an * correctly"});
        const grantAccess = script.isAdmValid(adm, admKey);
        if (!grantAccess) return res.status(400).json({message: "Please fill all fields with an * correctly"});
        if (adm.clearance != ADM_CLEARANCE) return res.status(400).json({message: "Please fill all fields with an * correctly"});
        const hashedKey = bcrypt.hashSync(key, 10);
        const newPoster = new postersModel ({
            alas, key: hashedKey, comment
        });
        const savedPoster = await newPoster.save();
        res.status(201).json({message: `New permission added to ${savedPoster.alas}`});
    }
    catch {
        res.status(500).json(error.message);
    };
}