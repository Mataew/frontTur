import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react';
import { GetByTur } from '../../../redux/features/turDesk';
import { useParams } from 'react-router-dom';

const Hotels = () => {
  const tur = useSelector((state) => state.byTurDesk.byTur);

  const id = useParams('id');

  const dispatch = useDispatch()
  const id = useParams('id');
  useEffect(() => {
    dispatch(GetByTur(id))
  },[dispatch, id])
  console.log(id,1111111)
  return (
    <div>
      1
    </div>
  );
};

export default Hotels;
