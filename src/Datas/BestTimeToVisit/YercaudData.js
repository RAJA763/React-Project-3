import easeMyTrip from '../../Assets/BestTimeToVisit/Yercaud/Ease_My_Trip.jpeg'
import oyoRooms from '../../Assets/BestTimeToVisit/Yercaud/Oyo_Rooms.jpeg'
import hiveminer from '../../Assets/BestTimeToVisit/Yercaud/Hiveminer.jpeg'

const district = {
    id: 8,
    ids: '08',
    heading: 'Yercaud',
    content: {
        content1: "October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races, and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful, and you might not want to miss that either.",
        content2: "Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: easeMyTrip,
        placeHolder:"Easemytrip Source",
        season: "Yercaud in Summer (March-June)",
        content: "With temperatures that hardly move out of the range between 24-degree Celsius and 28-degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady’s Seat. Apart from these attractions, one festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities."
    },
    {
        id: 2,
        imageSrc: oyoRooms,
        placeHolder:"Oyorooms Source",
        season: "Yercaud in Winter (November- February)",
        content: "Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15-degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear's Cave, Pagoda Paint, Shevaray Temple, and Anna Park, if you plan to visit this beautiful place during winter."
    },
    {
        id: 3,
        imageSrc: hiveminer,
        placeHolder:"Hiveminer Source",
        season: "Yercaud in Monsoon (July-September)",
        content: "Yercaud experiences a hot and humid monsoon with temperatures that range between 20-degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time."
    }
]

export {district, listOfSeasons}