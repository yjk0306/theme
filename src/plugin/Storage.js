class Storage {
    constructor() {
        this.obj = {}

        window.addEventListener('storage', this.handle.bind(this));
    }
    handle(e){

        const {key: event, newValue} = e;

        // localStorage 没字段，或者没订阅就直接返回
        if (!localStorage.getItem(event) || !this.obj[event]) return;

        // 删除也会触发
        if (!newValue) return;

        let data = null;

        try {
            data = JSON.parse(newValue);
        } catch (error) {
            console.log('this is a error in data parse');
        }

        this.obj[event].forEach(item => {

            item && item(data);
        });
        console.log(this.obj,111111111)

    }
    on(event,callback){
        this.obj[event] =  (this.obj[event] || []).concat(callback)
        localStorage.setItem(event,"item")
    }
    emit(event,payload="item"){
        localStorage.setItem(event,payload)
    }


}

export  default  {
    install(Vue) {
        Vue.prototype.$storage =  new Storage()
    }
}
