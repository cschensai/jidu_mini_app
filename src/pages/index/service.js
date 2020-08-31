import taroRequest from '../../utils/request'

export function getFun(data) {
  return taroRequest({
    url: '/songs',
    method: 'GET',
    data,
  })
}
