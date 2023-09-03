import mountainRailway from '../../Assets/BestTimeToVisit/Ooty/Mountain_Railway.jpeg'
import ootyLake from '../../Assets/BestTimeToVisit/Ooty/Ooty_Lake.jpeg'
import trekkingOoty from '../../Assets/BestTimeToVisit/Ooty/Trekking_Ooty.jpeg'

const district = {
    id: 4,
    ids: '04',
    heading: 'Ooty',
    content: {
        content1: "The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant, and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.",
        content2: "The poised and elegant 'Queen of Hill Stations welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums, and libraries brand the plains with stories."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: mountainRailway,
        placeHolder:"Mountain Railway Source",
        season: "Ooty in Summer (March- June)",
        content: "Ooty experiences an average temperature that ranges between 23-degree Celsius and 31-degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing."
    },
    {
        id: 2,
        imageSrc: ootyLake,
        placeHolder:"Ooty Lake Source",
        season: "Ooty in Winter (October March)",
        content: "With temperatures that stay below 15-degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris."
    },
    {
        id: 3,
        imageSrc: trekkingOoty,
        placeHolder:"Trekking Ooty Source",
        season: "Ooty in Monsoon (July-September)",
        content: "People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time, nevertheless."
    }
]

export {district, listOfSeasons}