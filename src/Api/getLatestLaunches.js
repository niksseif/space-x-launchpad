

//get spaceX latest lunch

export default async function getLatest(){
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/latest',{
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {  // Check if the response status is 2xx
            const body = await response.json();
            return body;
        } else {
            console.error(`Error: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error(text);
            throw new Error(`SpaceX Server error: ${response.status}`);
        }
    } catch (err) {
        alert(err);
    }
}
