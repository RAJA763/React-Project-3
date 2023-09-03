import railwayBridge from '../../Assets/BestTimeToVisit/Rameshwaram/Railway_Bridge.jpeg'
import lightHouse from '../../Assets/BestTimeToVisit/Rameshwaram/Light_House.jpeg'
import pilgrimsTemple from '../../Assets/BestTimeToVisit/Rameshwaram/Pilgrims_Temple.jpeg'

const district = {
    id: 2,
    ids: '02',
    heading: 'Rameshwaram',
    content: {
        content1: "The best time to visit Rameshwaram is from October to April. However, as far as the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. This makes Rameshwaram a destination which can be visited all year round. Winters (November to February) are cool and temperature comes down to 17 degrees Celsius. This is the most pleasant season for sightseeing and visiting neighborhoods. The Monsoons (July to September) are humid with average rainfalls, but the scenic view of the coastal region during these months is enjoyable.",
        content2: "Dotted with temples along the seashore and located on a beautiful island, rumor has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrim's flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: railwayBridge,
        placeHolder:"Railway Bridge ",
        season: "Rameshwaram in Winter (December- February)",
        content: "Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30-degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram."
    },
    {
        id: 2,
        imageSrc: lightHouse,
        placeHolder:"Lighthouse Source",
        season: "Rameshwaram in Monsoon (July - October)",
        content: "The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time"
    },
    {
        id: 3,
        imageSrc: pilgrimsTemple,
        placeHolder:"Pilgrims Temple Source",
        season: "Rameshwaram in Summer (March - June)",
        content: "The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much"
    }
]

export {district, listOfSeasons}