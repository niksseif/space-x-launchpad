
export default async function getLatest(){
  
        const response = await fetch('https://api.spacexdata.com/v3/launches/latest');
        if (response.ok) { 
            const body = await response.json();
            return body;
        } else {
            throw new Error(`SpaceX Server error: ${response.status}`);
        }
}
