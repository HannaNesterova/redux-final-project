// Filter.js
import { useDispatch } from "react-redux";
import Form from 'react-bootstrap/Form'; 
import { filterCategory } from "../../redux/filterSlice";

function Filter({ category }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='filter-selected'>
                <Form.Select onChange={(e) => dispatch(filterCategory(e.target.value))}>
                    <option disabled>What do you prefer?</option>
                    <option value="sweet">Sweet</option>
                    <option value="salt">Salt</option>
                    <option value="all">All</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default Filter;
