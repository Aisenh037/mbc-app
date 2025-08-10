import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from '../redux/noticeRelated/noticeHandle';
import { Paper } from '@mui/material';
import TableViewTemplate from './TableViewTemplate';

const SeeNotice = () => {
  const dispatch = useDispatch();
  const { currentUser, currentRole } = useSelector((state) => state.user);
  const { noticesList, loading, error, response } = useSelector((state) => state.notice);

  useEffect(() => {
    if (currentRole === "Admin") {
      dispatch(getNotices(currentUser._id, "Notice"));
    } else {
      dispatch(getNotices(currentUser.school._id, "Notice"));
    }
  }, [dispatch]);

  return (
    <div>See Notice</div>
  )
}

export default SeeNotice