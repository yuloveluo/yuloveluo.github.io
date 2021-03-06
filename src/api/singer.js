// 导入封装好的jsonp
import jsonp from 'assets/js/jsonp'
// 导入封装好的公用参数和默认的函数
import { commonParams, options } from 'api/config.js'
// 导入axios
import axios from 'axios'

// 请求歌手列表
export function getSingerList() {
  // 请求的地址
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  // 请求参数, 第三个参数会覆盖前面的对象，如果有属性时重复的
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 200,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  // 返回一个jsonp的请求
  return jsonp(url, data, options)
}

// 请求歌手的详情
export function getSinger(singerId) {
  // 请求的地址
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  // 请求的参数
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    singermid: singerId
  })
  // 返回jsonp请求
  return jsonp(url, data, options)
}

// 获取歌手的歌曲vkey的值
export function getPurlUrl(songmid, songtype) {
  // 请求地址
  const url = '/api/getPurlUrl'
  // 请求参数
  const data = {
    comm: {
      format: 'json',
      g_tk: 5381,
      inCharset: 'utf-8',
      needNewCode: 1,
      notice: 0,
      outCharset: 'utf-8',
      platform: 'h5',
      uin: 0
    },
    req_0: {
      method: 'CgiGetVkey',
      module: 'vkey.GetVkeyServer',
      param: {
        guid: '4573323385',
        loginflag: 0,
        platform: '23',
        songmid,
        songtype,
        uin: '0'
      }
    }
  }

  // 返回一个axios请求
  return axios.post(url, data)
}