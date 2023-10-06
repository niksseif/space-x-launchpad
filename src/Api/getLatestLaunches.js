
export default async function getLatest(){
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/latest');
        if (response.ok) { 
            const body = await response.json();
            return body;
        } else {
            console.error(`Error: ${response.status} ${response.statusText}`);
            const text = await response.text();
            throw new Error(`SpaceX Server error: ${response.status}`);
        }
    } catch (err) {
        alert(err);
    }
}
