

//Get first 40 launches fromspace x launches 
export default async function getSpaceXLaunches() {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=60&offset=0`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const body = await response.json()
        if (response.status !== 200) throw new Error(body.message)
        return body
    } catch (error) {
        alert(error.message)
    }
}


