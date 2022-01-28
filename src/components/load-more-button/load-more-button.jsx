import { useDispatch } from "react-redux";
import {ACTIONS} from '../../store';
import './load-more-button.scss';

const LoadMoreButton = () => {
    const dispatch = useDispatch();
    return ( 
        <div>
            <button className='loadMore_btn' onClick={() => dispatch({type: ACTIONS.PAGE_INCREAMENT})}>Load More</button>
        </div>
     );
}
 
export default LoadMoreButton;