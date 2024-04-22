import { Column } from "./column/column"
import css from './board.module.scss'
import { useTasks } from "../../hooks/task/use-task";

export const Board = () => {
    const {states} = useTasks();
    return (
        <div className={css.board}>
            {states.map(
                (state) =>
                <Column key={state.id} name={state.name} state={state.state}/>
            )}
        </div>
    )
}


