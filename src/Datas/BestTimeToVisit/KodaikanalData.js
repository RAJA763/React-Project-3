import upperLake from '../../Assets/BestTimeToVisit/Kodaikanal/Upper_Lake.jpeg'
import kodaikanalLake from '../../Assets/BestTimeToVisit/Kodaikanal/Kodaikanal_Lake.jpeg'
import pillarRocks from '../../Assets/BestTimeToVisit/Kodaikanal/Pillar_Rocks.jpeg'

const district = {
    id: 3,
    ids: '03',
    heading: 'Kodaikanal',
    content: {
        content1: "The best time to visit Kodaikanal is from October to June, however, the weather remains a bit chilly during December and January. Ideal for a vacation in each season, Kodaikanal is the most colorful in summers and most picturesque in monsoons. If your trip consists of an itinerary that includes a lot of sights to see, then summer is the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.",
        content2: "Kodaikanal is lovingly referred to as The Princess of Hill stations. And boy, does it take this title seriously! Built around an exotic star shaped lake, the region exudes ethereal charm like that of fairy tales. The best time to visit Kodaikanal is from October - June, however, the weather remains a bit chilly during December and January."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: upperLake,
        placeHolder: "Upper Lake Source",
        season: "Kodaikanal in Summer (March-June)",
        content: "Summers (March to June) in Kodaikanal is Ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May."
    },
    {
        id: 2,
        imageSrc: kodaikanalLake,
        placeHolder: "Kodaikanal Lake Source",
        season: "Kodaikanal in Winter (December-February)",
        content: "Summers (March to June) in Kodaikanal is ideal with comfortable 20-degree Celsius to 32-degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May."
    },
    {
        id: 3,
        imageSrc: pillarRocks,
        placeHolder:"Pillar Rocks Source",
        season: "Kodaikanal in Monsoon (June-September)",
        content: "With a temperature that rarely falls below 8-degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks and attend the famous Pongal festival celebrated during January."
    }
]

export {district, listOfSeasons}