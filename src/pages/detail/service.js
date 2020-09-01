
import taroRequest from '../../utils/request';

export function getSongDetailAction(data) {
  return taroRequest({
    url: '/songDetail',
    method: 'GET',
    data,
  })
}
