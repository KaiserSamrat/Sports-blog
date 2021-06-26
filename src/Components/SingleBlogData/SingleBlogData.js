import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleBlogData = (props) => {
    const { _id, title, description } = props.job;
    const history = useHistory();
    const handleDelete = () => {
        fetch(`https://sleepy-falls-46675.herokuapp.com/deleteJob/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert('Registration is successfully deleted')
                history.replace('/')
            });
    }
    return (
        <tr>
        <td>{title}</td>
       <td>{description}</td>
        <td><button className="btn btn-danger" onClick={handleDelete}>Delete</button></td>

        {/* <td><button  onClick={handleDelete} className="btn btn-danger">Delete</button></td> */}
    </tr>

    );
};

export default SingleBlogData;