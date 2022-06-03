// зробити свій розклад дня(5-7 функцій),імітувати асинхронні події синхронно.

function sleep(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!sleep) {
                console.log("It's good!");
                resolve(true);
            } else {
                reject("Wake up! Don't sleep");
            }
        }, 100)
    })
}

function bath(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                console.log("I took a good shower!");
                resolve(40);
            } else {
                reject("You sleep yet");
            }
        }, 500)
    })
}

function eat(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 30) {
                resolve("Everything is fine. You can eat");
            } else {
                reject("You don't have time");
            }
        }, 750)
    })
}

function getMoney(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 0) {
                console.log("You took money");
                resolve(money);
            } else {
                reject("You don't enough money")
            }
        }, 200)
    })
}

function goWork(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 150) {
                console.log("You can take a taxi");
                resolve(money - 150);
            } else {
                reject("You have to walk");
            }
        }, 1000)
    })
}

function buyEat(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 55) {
                resolve("You can buy food");
            } else {
                reject("You don't enough money");
            }
        }, 505)
    })
}

async function myDay(){
    try {
        const status = await sleep(false);

        const time = await bath(status);

        console.log(await eat(time));

        const money = 500;
        const yourMoney = await getMoney(money);

        const remainder = await goWork(yourMoney);

        const res = await buyEat(remainder);
        console.log(res);

    }catch (e) {
        console.error('Error:', e);
    }
}

myDay();

// sleep(false)
//     .then((status) => {
//         return bath(status);
//     })
//     .then((time) => {
//         return eat(time);;
//     })
//     .then((eat)=>{
//         console.log(eat);
//         const money = 500;
//         return money;
//     })
//     .then((money) => {
//         return getMoney(money);
//     })
//     .then((yourMoney) => {
//         return goWork(yourMoney);
//     })
//     .then((remainder) => {
//         return buyEat(remainder);
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch(reason => {
//         console.log("Error:", reason);
//     })