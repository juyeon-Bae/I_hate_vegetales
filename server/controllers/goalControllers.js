const Goal = require('../models/Goal');

const goalController = {
    saveGoal: async (req, res) => {
        const { content } = req.body;
        try {
            const newGoal = new Goal({ content });
            await newGoal.save();
            res.status(201).json(newGoal);
        } catch (error) {
            res.status(500).json({ message: '목표 저장 실패', error });
        }
    },

    getSaveGoal: async (req, res) => {
        try {
            const goals = await Goal.find();
            res.json(goals);
        } catch (error) {
            res.status(500).json({ message: '목표 불러오기 실패', error });
        }
    },

    deleteGoal: async (req, res) => {
        try {
            const deleted = await Goal.findByIdAndDelete(req.params.id);
            if (!deleted) return res.status(404).json({ message: "목표를 찾을 수 없습니다." });
            res.status(200).json({ message: "삭제 완료" });
        } catch (err) {
            res.status(500).json({ message: "삭제 실패", error: err.message });
        }
    }
}
module.exports = goalController;
