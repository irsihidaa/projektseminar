const express=require('express');
const { getTasks, setTasks, deleteTasks, updateTasks } = require('../controllers/taskControllers');
const router= express.Router();

router.get('/', getTasks);

router.post('/', setTasks);

router.put('/:id', updateTasks);

router.delete('/:id', deleteTasks);


module.exports=router;