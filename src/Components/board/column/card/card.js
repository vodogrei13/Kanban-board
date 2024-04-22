import css from './card.module.scss';
import {useNavigate} from 'react-router-dom';
import { IconDelete } from "../../../shared/icons/icon-delete";
import { Button } from '../../../shared/buttons/button/button';

export const Card = (props) => {
    
    const navigate = useNavigate();

    return (
        <div className={css.card} onClick={() => navigate(`/tasks/${props.id}`)}>
            <span>{props.name}</span>
            <Button className={css['button-remove']} onClick={
                (e) =>
                {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}>
                <IconDelete/>
            </Button>
        </div>   
    )
}