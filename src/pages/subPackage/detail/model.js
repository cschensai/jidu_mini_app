
import {getSongDetailAction} from './service';

export default {
  namespace: 'detail',
  state: {
    detailInfo: {},
  },

  effects: {
    *getSongDetail({ payload, cb }, { call, put }) {
      const res = yield call(getSongDetailAction, payload);
      const { code, data = {} } = res || {};
      if (code === 0) {
        cb && cb();
        yield put({
          type: 'updateState',
          payload: {
            detailInfo: data,
          },
        })
      }
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}
