export default {
    getCollection : (obj, data) => {
      return new Promise((resolve, reject) => {
        obj.post('/api/collection/query.do', data,
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }


