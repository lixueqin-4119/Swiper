let Swiper = (function () {
    let root = document
    let eventHub = { 'swipLeft': [], 'swipRight': [] }

    function bind(node) {
        root = node
    }
    function on(type, fn) {
        if (eventHub[type]) {
            eventHub[type].push(fn)
        }
    }
    //实现
    var initX
    var newX
    var clock
    root.ontouchstart = function (e) {
        console.log(e)
        initX = e.changedTouches[0].pageX
    }
    root.ontouchmove = function (e) {
        if (clock) clearInterval(clock)
        clock = setTimeout(() => {
            console.log(clock)
            newX = e.changedTouches[0].pageX
            if (newX - initX > 0) {
                eventHub['swipRight'].forEach(fn => fn())
            } else if (newX - initX < 0) {
                eventHub['swipLeft'].forEach(fn => fn())
            }
        }, 100);
    }

    return {
        bind: bind,
        on: on
    }
})()

//需求
Swiper.bind(document.querySelector("#panels"))
Swiper.on('swipLeft', function () {
    console.log("left")
})
Swiper.on('swipLeft', function () {
    console.log("left22")
})
Swiper.on('swipRight', function () {
    console.log("right")
})
Swiper.on('swipRight', function () {
    console.log("right22")
})