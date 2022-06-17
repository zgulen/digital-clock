//! week days
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//! hour variables
const hourDom = document.querySelector(".container__time--clock-hour")
const minuteDom = document.querySelector(".container__time--clock-minute")
const secondDom = document.querySelector(".container__time--clock-second")
const milisecDom = document.querySelector(".container__time--clock-ms")
//! year variables
const yearDom = document.querySelector(".conteiner__date--days-year")
const monthDom = document.querySelector(".conteiner__date--days-month")
const dayDom = document.querySelector(".conteiner__date--days-day")
const weekDom = document.querySelector(".conteiner__date--days-week-day")
//? time 
setInterval(
    function () {
        console.log(new Date().getHours())
        hourDom.textContent = new Date().getHours()
        setInterval(
            function () {
                minuteDom.textContent = ` :${new Date().getMinutes()}`
                setInterval(
                    function () {
                        secondDom.textContent = ` :${new Date().getSeconds() <= 9 ? "0" + new Date().getSeconds() : new Date().getSeconds()}`
                        setInterval(
                            function () {
                                milisecDom.textContent = `:${(String(new Date().getMilliseconds()).padStart(2, "0") / 10).toFixed(0) <= 9 ? "0" + (String(new Date().getMilliseconds()).padStart(2, "0") / 10).toFixed(0) : (String(new Date().getMilliseconds()).padStart(2, "0") / 10).toFixed(0)}`
                            })
                    })
            })
    })
//? day
setInterval(
    function () {
        yearDom.textContent = `${new Date().getFullYear()}-`
        setInterval(() => {
            monthDom.textContent = `${new Date().getMonth() + 1}-`
            setInterval(() => {
                dayDom.textContent = `${new Date().getDate()}`
                setInterval(() => {
                    weekDom.textContent = `  :${days[new Date().getDay()]}`
                });
            });
        });
    }
)
// const seconds = String(new Date().getSeconds()).padStart(2, '0');
// console.log(seconds)
// console.log((String(new Date().getMilliseconds()).padStart(3,"0")/ 10).toFixed(0))