/* eslint-disable no-console */
import '@/plugins/axios'

let moreu = {
    signup(email, password) {
        let body = { email: email, password: password };
        return new Promise((resolve, reject) => {
            window.axios.post('/moreu/api/users', body).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
    activate(email, token) {
        let body = { token: token, activated: true };
        return new Promise((resolve, reject) => {
            window.axios.patch(`/moreu/api/users/${email}`, body).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
    passwordReset(email, token, newpwd) {
        let body = { token: token, password: newpwd };
        return new Promise((resolve, reject) => {
            window.axios.patch(`/moreu/api/users/${email}`, body).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
    applyPasswordReset(email) {
        let body = { email: email };
        return new Promise((resolve, reject) => {
            window.axios.post('/moreu/api/tokens', body).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
    signin(email, password) {
        let body = { email: email, password: password };
        return new Promise((resolve, reject) => {
            window.axios.post('/moreu/api/tokens', body).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
    find(username) {
        return new Promise((resolve, reject) => {
            window.axios.get(`/moreu/api/users/${username}`).then(ret => {
                resolve(ret.data.data)
            }).catch(reject)
        })
    },
}

export default moreu;
