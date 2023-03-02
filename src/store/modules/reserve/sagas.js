import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserve } from './actions';
import api from '../../../services/api';

function* addToReserve({ id }){
  const tripExists = yield select(
    state => state.reverse.find(trip => trip.id  === id)
  );
  if(tripExists){
    const amount = tripExists.amount + 1;

    yield put(updateAmountReserve(id, amount));


  }else{
    const response = yield call(api.get, `trips/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addReserveSuccess(data))
  }

}

export default all ([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])