import React, { useEffect, useState } from 'react'
import { getSclassStudents, getSubjectDetails } from '../../../redux/sclassRelated/sclassHandle';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BlueButton, GreenButton } from '../../../components/buttonStyles';

const ViewSubject = () => {
  const params = useParams();
  const subjectID = params.subid
  const classID = params.id
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { sclassStudents, subjectDetails, loading, subloading, error } = useSelector((state) => state.sclass);

  useEffect(() => {
    dispatch(getSubjectDetails(subjectID, "Subject"));
    dispatch(getSclassStudents(classID));
  }, [dispatch, subjectID, classID]);

  return (
    <div>
      {/* render subject and students */}
      <BlueButton onClick={() => navigate(-1)}>Back</BlueButton>
    </div>
  )
}

export default ViewSubject