import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { GetByTur } from '../../../redux/features/turDesk';
import { useParams } from 'react-router-dom';

const Hotels = () => {
  const tur = useSelector((state) => state.byTurDesk.byTur);

  const id = useParams('id');

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetByTur(id))
  },[dispatch, id])
  console.log(id,1111111)
  return (
    <div>
      {toString(tur)}
    </div>
  );
};

export default Hotels;
