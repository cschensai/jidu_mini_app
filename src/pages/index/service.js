import taroRequest from '../../utils/request'

export function getSongsAction(data) {
  return taroRequest({
    url: '/songs',
    method: 'GET',
    data,
  })
}
