const express = require('express');
const router = express.Router();
const goalControllers = require('../controllers/goalControllers')

// 목표 저장  
router.post('/', goalControllers.saveGoal);

// 작성한 목표 가져오기  
router.get('/', goalControllers.getSaveGoal);

// 목표 삭제 
router.delete("/:id", goalControllers.deleteGoal);


module.exports = router;
