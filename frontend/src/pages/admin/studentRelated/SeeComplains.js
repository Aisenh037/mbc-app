import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getComplains } from '../../../redux/complainRelated/complainHandle';
import TableTemplate from '../../../components/TableTemplate';
import { Paper, Box, Checkbox } from '@mui/material';

const SeeComplains = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { loading, error, response, complainsList } = useSelector((state) => state.complain);

  useEffect(() => {
    dispatch(getComplains(currentUser._id, "Complain"));
  }, [currentUser._id, dispatch]);

  return (
    <div>See Complains</div>
  )
}

export default SeeComplains