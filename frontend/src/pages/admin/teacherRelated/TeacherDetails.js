import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeacherDetail } from '../../../redux/teacherRelated/teacherHandle';

const TeacherDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const teacherID = params.id;

  useEffect(() => {
    dispatch(getTeacherDetail(teacherID));
  }, [dispatch, teacherID]);

  return (
    <div>Teacher Details</div>
  )
}

export default TeacherDetails