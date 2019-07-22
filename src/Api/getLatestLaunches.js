

//get spaceX latest lunch

export default async function getLatest () {
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/latest', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json();
        console.log(body,"<>>>>body")
        if (response.status !== 200)
            throw new Error(body.message)
        return body
    } catch (err) {
        alert(err.message)
    }
}
