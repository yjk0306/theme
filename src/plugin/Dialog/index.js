import Dialog from './index.vue';

let instance;




class DialogPlugin {
    constructor() {

    }
    install(Vue){

        const DialogController = Vue.extend(Dialog);
       // 实现Dialog的关闭方法

        DialogController.prototype.close = function () {
            this.flag = false;
        };

        Vue.prototype.$Dialog = (option = {}) => {
        // Dialog实例挂载到刚创建的div
        instance = new DialogController().$mount(document.createElement('div'));
        instance.title = option.title ? option.title : "提示"
        instance.message =  option.message;
        instance.async = option.async ? option.async : false;
        instance.leftbtn = option.leftbtn?option.leftbtn:"我再想想"
        instance.rightbtn = option.rightbtn?option.rightbtn:"确认"
        instance.show = true ;
        instance.cancelcb = option.cancel;
        instance.ok = option.ok;
        // 将Dialog的DOM挂载到body上
        document.body.appendChild(instance.$el);
    };
    }
}




export default new DialogPlugin();
