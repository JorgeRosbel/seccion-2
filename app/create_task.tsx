import { TaskForm } from "../components/TaskForm"
import { UserTasks } from "../components/UserTasks"

const TaskContainer: React.FC = () => {

    return (
        <>
            <TaskForm />
            <UserTasks />
        </>
    )
}

export default TaskContainer;