import client from 'webpack-theme-color-replacer/client'
import appConfig from './config.js'

export let curColor = appConfig.themeColor

// 动态切换主题色
export function changeThemeColor(newColor) {
    const options = {
        newColors: ['#333333', '#666666'],
        appendToEl: 'head',
    }
    console.log(client.changer)
    // return client.changer.changeColor(options, Promise)
    //     .then(t => {
            
    //         curColor = newColor
    //         localStorage.setItem('theme_color', curColor)
    //         console.log('Theme colors changed!')
    //     });
        client.changer.changeColor(options, Promise).then(() => {
            console.log('Theme colors changed!')
        })
}

export function initThemeColor() {
    const savedColor = localStorage.getItem('theme_color')
    if (savedColor) {
        curColor = savedColor
        changeThemeColor(savedColor)
    }
}