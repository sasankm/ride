export default function getNevadaJSONData(){
    const markers = [
        {
            name: 'Beaver Dam State Park',
            location: [37.521389, -114.072222],
            timings: 'Always Open',
            fee: '$5.00',
            website: 'http://parks.nv.gov/parks/beaver-dam'
        },
        {
            name: 'Berlin-Ichthyosaur State Park',
            location: [38.874722, -117.589722],
            timings: 'Always Open',
            fee: '$5.00',
            website: 'http://parks.nv.gov/parks/berlin-ichthyosaur'

        },
        {
            name: 'Big Bend of the Colorado State Recreation Area',
            location: [35.110556, -114.643056],
            fee: '$10.00',
            timings: 'Park: vary by season, see below. Campground: always open - first come, first served, reservations not available',
            website: 'http://parks.nv.gov/parks/big-bend-of-the-colorado'
        },
        {
            name: 'Cathedral Gorge State Park',
            location: [37.819444, -114.413889],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/cathedral-gorge'
        },
        {
            name: 'Cave Lake State Park',
            location: [39.189722, -114.7225],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/cave-lake'
        },
        {
            name: 'Dayton State Park',
            location: [39.248611, -119.588889],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/dayton'
        },
        {
            name: 'Echo Canyon State Park',
            location: [37.912778, -114.269167],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/echo-canyon'
        },
        {
            name: 'Elgin Schoolhouse State Historic Site',
            location: [37.3525, -114.534444],
            fee: '1.00',
            timings: 'By appointment',
            website: 'http://parks.nv.gov/parks/elgin-schoolhouse'
        },
        {
            name: 'Fort Churchill State Historic Park',
            location: [39.2925, -119.271667],
            fee: 'Always Open',
            timings: '$5.00',
            website: 'http://parks.nv.gov/parks/fort-churchill'
        },
        {
            name: 'Kershaw–Ryan State Park',
            location: [37.588611, -114.525278],
            fee: '$5.00',
            timings: '8 a.m. to Sunset',
            website: 'http://parks.nv.gov/parks/kershaw-ryan'
        },
        {
            name: 'Lahontan State Recreation Area',
            location: [39.400833, -119.125833],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/lahontan'
        },
        {
            name: 'Lake Tahoe – Nevada State Park',
            location: [39.171389, -119.8925],
            fee: '$10.00',
            timings: '8 a.m. to 1 hour after sunset',
            website: 'http://parks.nv.gov/parks/lake-tahoe-nevada-state-park'
        },
        {
            name: 'Mormon Station State Historic Park',
            location: [39.004444, -119.845278],
            fee: 'Park is Free/Museum is $1.00',
            timings: 'Park: always open' + ' Museum: seasonal, see below.',
            website: 'http://parks.nv.gov/parks/mormon-station'
        },
        {
            name: 'Old Las Vegas Mormon Fort State Historic Park',
            location: [36.180278, -115.1325],
            fee: '$3.00',
            timings: 'Tuesday - Saturday 8 a.m. - 4:30 p.m. (closed Sunday & Monday)',
            website: 'http://parks.nv.gov/parks/old-las-vegas-mormon-fort'
        },
        {
            name: 'Rye Patch State Recreation Area',
            location: [40.601944, -118.306944],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/rye-patch'
        },
        {
            name: 'South Fork State Recreation Area',
            location: [40.6575, -115.746389],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/south-fork'
        },
        {
            name: 'Spring Mountain Ranch State Park',
            location: [36.069722, -115.450556],
            fee: '$10.00',
            timings: 'Vary by season',
            website: 'http://parks.nv.gov/parks/spring-mountain-ranch'
        },
        {
            name: 'Spring Valley State Park',
            location: [38.053889, -114.170556],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/spring-valley'
        },
        {
            name: 'Valley of Fire State Park',
            location: [36.456111, -114.533056],
            fee: '$10.00',
            timings: 'Open daily from sunrise to sunset. 24-hour access to campgrounds.',
            website: 'http://parks.nv.gov/parks/valley-of-fire'
        },
        {
            name: 'Van Sickle Bi-State Park',
            location: [38.954722, -119.940556],
            fee: 'Free',
            timings: 'Open to pedestrians year-round, sunrise to sunset \n Open to vehicles May 1 - October 31, sunrise to sunset',
            website: 'http://parks.nv.gov/parks/lake-tahoe-nevada-state-park-3'
        },
        {
            name: 'Ward Charcoal Ovens State Historic Park',
            location: [39.035, -114.847778],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/ward-charcoal-ovens'
        },
        {
            name: 'Washoe Lake State Park',
            location: [39.245, -119.785],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/washoe-lake'
        },
        {
            name: 'Wild Horse State Recreation Area',
            location: [41.670833, -115.799722],
            fee: '$5.00',
            timings: 'Always Open',
            website: 'http://parks.nv.gov/parks/wild-horse'
        }
    ]
    return markers;
}