/**
 * 事件总线
 * 基于 postMessage 设计，目的是解决多 tab 之间通信
 */

class EventBus {
    constructor() {
        // 初始化订阅事件对象
        this.subscribes = {};
        window.addEventListener('storage', this.handlerMethod.bind(this));
    }

    handlerMethod(e) {
        const {key: event, newValue} = e;

        // localStorage 没字段，或者没订阅就直接返回
        if (!localStorage.getItem(event) || !this.subscribes[event]) return;

        // 删除也会触发
        if (!newValue) return;

        let data = null;

        try {
            data = JSON.parse(newValue);
        } catch (error) {
            console.log('this is a error in data parse');
        }

        this.subscribes[event].forEach(item => {

            item && item(data);
        });
        console.log(this.subscribes,111111111)
    }

    // 监听
    on(event, cb) {

        this.subscribes[event] = (this.subscribes[event] || []).concat(cb);

        localStorage.setItem(event, 'init');

    }

    // 监听一次
    once(event, cb) {
        const fun = () => {
            cb && cb();
            this.off(event, fun);
        };
        this.on(event, fun);
    }

    // 删除
    off(event, callback) {
        (this.subscribes[event] || []).forEach((cb, i) => {
            if (cb === callback) {
                this.subscribes[event].splice(i, 1);
                localStorage.removeItem(event);
            }
        });
    }

    offAll() {
        Object.keys(this.subscribes).forEach(event => {
            delete this.subscribes[event];
            localStorage.removeItem(event);
        });
    }

    /* eslint-disable */
    emit(event, payload) {
        // 如果只是单纯触发，不传参数的话，给个随机数
        localStorage.setItem(event, payload ? JSON.stringify(payload) : Math.random());
    }
    /* eslint-enable */
}

export default {
    install(Vue) {
        Vue.prototype.$eventBus = new EventBus();
    },
};

