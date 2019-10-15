import * as types from './types';

export default {
  [types.CHECK_USER]: ({
    state,
    commit
  }, {
    username,
    password
  }) => {
    return axios({
      url: '/user/login',
      method: 'post',
      data: {
        username,
        password,
        save: true
      }
    }).then(
      res => {
        commit(types.CHECK_USER, res.data); //同步1
        localStorage.setItem('user', JSON.stringify(res.data)) //同步2
        return {
          mess: res.data.msg,
          err: res.data.err
        }
      }
    )
  }
}