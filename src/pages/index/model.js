import { getSongsAction } from "./service";

function formatData(data = {}) {
  const tempArr = [];
  for (const key in data) {
    const keyArr = data[key] || [];
    const items = keyArr.map(ele => ({ name: `${ele.label}-${ele.value}`, value: ele.value }))
    const item = {
      title: key,
      key,
      items,
    }
    tempArr.push(item);
  }
  return tempArr;
}

export default {
  namespace: 'index',
  state: {
    data: [],
  },

  effects: {
    * getSongs({ payload, cb }, { call, put }) {
      const res = yield call(getSongsAction, payload);
      const { code, data = {} } = res || {};
      if (code === 0) {
        const tempArr = formatData(data);
        cb && cb();
        yield put({
          type: 'updateState',
          payload: {
            data: tempArr,
          }
        })
      }
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}