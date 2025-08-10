import React, { useEffect } from 'react'
import Students from "../../assets/students.svg";
import Tests from "../../assets/assignment.svg";
import Time from "../../assets/time.svg";
import { getSclassStudents, getSubjectDetails } from '../../redux/sclassRelated/sclassHandle';
import { useDispatch, useSelector } from 'react-redux';

const TeacherHomePage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const classID = currentUser?.teachSclass?._id
  const subjectID = currentUser?.teachSubject?._id

  useEffect(() => {
    dispatch(getSubjectDetails(subjectID, "Subject"));
    dispatch(getSclassStudents(classID));
  }, [dispatch, subjectID, classID]);

  return (
    <div>Teacher Home</div>
  )
}

export default TeacherHomePage