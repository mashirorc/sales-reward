const data = [
    {
        id: 1,
        customerID: 1,
        date: new Date(2023, 0, 1),
        total: 120
    },
    {
        id: 2,
        customerID: 1,
        date: new Date(2023, 1, 5),
        total: 70
    },
    {
        id: 3,
        customerID: 1,
        date: new Date(2023, 2, 10),
        total: 320
    },
    {
        id: 4,
        customerID: 2,
        date: new Date(2023, 0, 1),
        total: 140
    },
    {
        id: 5,
        customerID: 2,
        date: new Date(2023, 1, 5),
        total: 90
    },
    {
        id: 6,
        customerID: 2,
        date: new Date(2023, 2, 10),
        total: 340
    },
    {
        id: 7,
        customerID: 3,
        date: new Date(2023, 0, 1),
        total: 110
    },
    {
        id: 8,
        customerID: 3,
        date: new Date(2023, 1, 5),
        total: 60
    },
    {
        id: 9,
        customerID: 3,
        date: new Date(2023, 2, 10),
        total: 310
    },
]

const customerTable = {
    "James": 1,
    "Mike": 2,
    "Joseph": 3,
}

const getRewardDetail = (customer, month) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filtered = data.filter((transaction) => {
                return transaction.customerID === customerTable[customer] && transaction.date.getMonth() === month
            })
            let totalReward = 0
            for (let transaction of filtered) {
                if (transaction.total < 50) {
                    continue
                }
                else if (transaction.total < 100) {
                    totalReward += transaction.total - 50
                }
                else {
                    totalReward += (transaction.total - 100) * 2 + 50
                }
            }
            resolve(totalReward)
        }, 500)
    })
}

export default getRewardDetail