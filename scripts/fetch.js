//https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}

let countryNew = async (value)=> {
    try {
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let data = await res.json();
        return data
    }catch(err) {
        console.log(err)
    }
}


let teslaNew = async(value)=> {
    try {
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json();
        return data
    }catch(err) {
        console.log(err)
    }
}

export {countryNew, teslaNew}

