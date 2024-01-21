// Filter.js
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form'; 
import { filterCategory, getSelectedCategory } from "../../redux/searchSlice";

function Filter({ category }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='filter-selected'>
                <Form.Select onChange={(e) => dispatch(filterCategory(e.target.value))}>
                    <option>What do you prefer?</option>
                    <option value="sweet">Sweet</option>
                    <option value="sold">Sold</option>
                    <option value="all">All</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default Filter;
