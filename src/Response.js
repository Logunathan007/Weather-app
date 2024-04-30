
async function response(name){
    const api_key = "d2541b7caa4216a0657703b344da7da8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=imperial`
    let ans,res;
    try{
        res = await fetch(url);
        ans = (await res.json())
    }catch (error){
        console.log(error)
    }
    return ans
}

export default response;