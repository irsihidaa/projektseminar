const getTasks = (req, res)=> {
    res.status(200).json({message: 'Get all tasks'});
};

const setTasks = (req, res)=> {
    res.status(200).json({message: 'Create task'});
}

const updateTasks =  (req, res)=> {
    res.status(200).json({message: `Task ${req.params.id} updated.`});
}

const deleteTasks =  (req, res)=> {
    res.status(200).json({message: `Task ${req.params.id} deleted.`});
};

module.exports={getTasks, setTasks, updateTasks, deleteTasks};