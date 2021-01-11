import Vue from 'vue';
import { ConfigsApi, TokensApi, UsersApi } from "moreu-jssdk";


const Moreu = {
    configs: new ConfigsApi(),
    tokens: new TokensApi(),
    users: new UsersApi(),
}

Moreu.install = function (Vue, options) {
    Vue.moreu = Moreu;
    window.moreu = Moreu;
    Object.defineProperties(Vue.prototype, {
        moreu: {
            get() {
                return Moreu;
            }
        },
        $moreu: {
            get() {
                return Moreu;
            }
        },
    });
};

Vue.use(Moreu);

export default Moreu;