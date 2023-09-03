import dawn from '../../Assets/BestTimeToVisit/Kumbakonam/Dawn.jpeg'
import steemit from '../../Assets/BestTimeToVisit/Kumbakonam/Steemit.jpeg'
import holydham from '../../Assets/BestTimeToVisit/Kumbakonam/Holydham.jpeg'

const district = {
    id: 6,
    ids: '06',
    heading: 'Kumbakonam',
    content: {
        content1: "Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.",
        content2: "Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable times to pay a visit."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: dawn,
        placeHolder:"Dawn Source",
        season: "Kumbakonam in Winter (October-February)",
        content: "The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celsius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celsius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months."
    },
    {
        id: 2,
        imageSrc: steemit,
        placeHolder:"Steemit Source",
        season: "Kumbakonam in Monsoon (June August)",
        content: "The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall, this season can also be preferred by tourists to pay a visit to Kumbakonam."
    },
    {
        id: 3,
        imageSrc: holydham,
        placeHolder:"Holydham Source",
        season: "Kumbakonam in Summer (March - May)",
        content: "Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celsius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions."
    }
]

export {district, listOfSeasons}