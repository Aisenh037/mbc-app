import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import { getAllSubjects } from '../../redux/sclassRelated/sclassHandle';

const StudentHomePage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const classID = currentUser?.sclassName?._id

  useEffect(() => {
    dispatch(getUserDetails(currentUser._id, "Student"));
    dispatch(getAllSubjects(classID, "ClassSubjects"));
  }, [dispatch, currentUser._id, classID]);

  return (
    <div>Student Home</div>
  )
}

export default StudentHomePage