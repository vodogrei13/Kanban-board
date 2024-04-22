import { useTasks } from '../../hooks/task/use-task';
import css from './footer.module.scss';

export const Footer = () => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <div className={css.footer_container}>
            <span>Active tasks: {getActiveTaskCount()}</span>
            <span>Finished tasks: {getFinishedTaskCount()}</span>
            </div>
            <div>Kanban board by Vodogrei, Year 2024.</div>
        </footer>
    )
}