import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAllSubjects } from '../../../redux/sclassRelated/sclassHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { BlueButton, GreenButton } from '../../../components/buttonStyles'

const ShowSubjects = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { subjectsList, loading, error, response } = useSelector((state) => state.sclass);

    useEffect(() => {
        dispatch(getAllSubjects(currentUser._id, "AllSubjects"));
    }, [currentUser._id, dispatch]);

    const deleteHandler = (deleteID, address) => {
        // dispatch(deleteUser(deleteID, address))
        //     .then(() => {
        //         dispatch(getAllSubjects(currentUser._id, "AllSubjects"));
        //     })
    }

    return (
        <div className="subjectList">
            <span className="subjectTitle">Subjects List</span>
            <div className="subjectListContainer">
                {subjectsList && subjectsList.map((subject, index) => (
                    <div key={index} className="subjectItem">
                        <span>{subject.subName}</span>
                        <div>
                            <GreenButton onClick={() => navigate(`/Admin/Subject/${subject._id}`)}>View</GreenButton>
                            <BlueButton onClick={() => navigate(`/Admin/SubjectCreate/${subject._id}`)} startIcon={<PostAddIcon />}>Add</BlueButton>
                            {/* <RedButton onClick={() => deleteHandler(subject._id, "Subject")} startIcon={<DeleteIcon />}>Delete</RedButton> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowSubjects