const stateShowCountOfTasksView = async (taskCount) => {
    debug(`stateShowCountOfTasksView()`)

    const page = `<span>COUST TASKER:<span id="span-task-count">( ${taskCount} )</span></span>`
    return page
}

