import string from './css.js'
let n = 1;
demo.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)
let time = 100
const run = ()=>{
    n +=1
    if(n>string.length){
        window.clearInterval(id)
        return
        }
        demo.innerText = string.substr(0,n)
        demo2.innerHTML = string.substr(0,n)
        // scrollTo固定滚动条位置
        demo.scrollTop = demo.scrollHeight

}
const play = ()=>{
    return setInterval(run,time)
}
const pause = ()=>{
    window.clearInterval(id)
}
let id =play()
btnPause.onclick = ()=>{
    pause()
}
btnPlay.onclick =()=>{
id = play()
}
btnSlow.onclick = ()=>{
    pause()
    time = 300
    id = play();
}
btnNormal.onclick = ()=>{
    pause()
    time = 100
    id = play();
}
btnFast.onclick = ()=>{
    pause()
    time = 0
    id = play();
}
//如果一个函数接受参数，并传给另外一个函数
//同时返回这个函数的返回值，你可以直接将参数替换为函数
//