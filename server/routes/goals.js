const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// 목표 저장  
router.post('/', async (req, res) => {
    const { content } = req.body;
    try {
        const newGoal = new Goal({ content });
        await newGoal.save();
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(500).json({ message: '목표 저장 실패', error });
    }
});

// 작성한 목표 가져오기  
router.get('/', async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (error) {
        res.status(500).json({ message: '목표 불러오기 실패', error });
    }
});

module.exports = router;
