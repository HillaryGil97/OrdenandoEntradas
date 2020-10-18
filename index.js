let values = {
    2123: {
        title: 'title-1',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506390
    },
    2223: {
        title: 'title-2',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: false,
        date: 1602383506391
    },
    2233: {
        title: 'title-3',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506394
    },
    2143: {
        title: 'title-4',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506392
    },
    1223: {
        title: 'title-5',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506397
    },
    1123: {
        title: 'title-6',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506398
    },
    2245: {
        title: 'title-7',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: true,
        date: 1602383506399
    },
    7423: {
        title: 'title-8',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: false,
        date: 1602383506390
    },
    9623: {
        title: 'title-9',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: false,
        date: 1602383506396
    },
    9923: {
        title: 'title-10',
        subtitle: 'subtitle',
        author: 'autor',
        isPopular: false,
        date: 1602383506393
    }
}

let sortByDate = (values) => {
    let arr = []

    for (let key in values) {
        const DATE = new Date(values[key].date)
        arr.push({ ...values[key], key: key, dateNormal: `${DATE.getDate()}/${DATE.getMonth()}/${DATE.getFullYear()}` })
    }
    const firstElement = 0
    const lastElement = 4
    arr = arr.sort((a, b) => a.date - b.date).slice(firstElement, lastElement)

    return arr
}

let filter4Popularity = (values) => {
    let arr = []
    const object = {}
    const firstElement = 0
    const lastElement = 4
    for (let key in values) {
        if (values[key].isPopular === true) {
            arr[key] = { ...values[key], category: 'popular', key: key }
            delete arr[key].isPopular
        }
    }

    arr = arr.sort((a, b) => a.date - b.date).slice(firstElement, lastElement)

    arr.forEach((item) => {
        object[item.key] = item
    })

    arr = []
    arr.push(object)

    return arr
}

/*
let filter4Popularity = (values) => {
    let arr = Object.entries(values)
    return arr
}
*/
let addKeys = (newValues) => {
    return newValues
}

let printOutputs = (values) => {

    console.log('Salida 1:')
    console.log(sortByDate(values))

    console.log('Salida 2:')
    newValues = filter4Popularity(values)
    console.log(addKeys(newValues))
}

printOutputs(values)