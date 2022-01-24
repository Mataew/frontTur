import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { GetByTur } from '../../../redux/features/turDesk';

const Hotels = () => {
  const tur = useSelector((state) => state.byTurDesk.byTur)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetByTur())
  },[dispatch])
  console.log(tur,1111111)
  return (
    <div>
      {toString(tur)}
    </div>
  );
};

export default Hotels;
