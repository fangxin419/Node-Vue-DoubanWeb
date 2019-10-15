import * as types from './types';

export default {

  [types.VIEW_LOADING]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    commit(types.VIEW_LOADING, payload)
  },

  [types.VIEW_NAV]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    commit(types.VIEW_NAV, payload)
  },

  [types.VIEW_FOOT]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    commit(types.VIEW_FOOT, payload)
  },

  [types.UPDATE_BANNER]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    axios({
      url: '/user/banner',
      params: {
        _page: 1,
        _limit: 3
      }
    }).then(
      res => commit(types.UPDATE_BANNER, res.data.data)
    )
  },

  [types.UPDATE_HOME]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    axios({
      url: "/user/home",
      params: {
        _page: 1,
        _limit: 10
      }
    }).then(
      res => {
        commit(types.UPDATE_HOME, res.data.data)
      }
    )
  },

  [types.UPDATE_FOLLOW]: ({
    state,
    commit
  }, payload) => {
    //校验payload的类型
    axios({
      url: '/user/follow',
      params: {
        _page: 1,
        _limit: 8
      }
    }).then(
      res => commit(types.UPDATE_FOLLOW, res.data.data)
    )
  },

  [types.UPDATE_DETAIL]: ({
    state,
    commit
  }, {
    dataName,
    id
  }) => {
    //校验payload的类型
    axios({
      url: `/user/${dataName}/${id}`
    }).then(
      res => commit(types.UPDATE_DETAIL, res.data.data)
    )
  },

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