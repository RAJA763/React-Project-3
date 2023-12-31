import landscape from '../../Assets/BestTimeToVisit/Kanyakumari/LandScape.jpeg'
import sea from '../../Assets/BestTimeToVisit/Kanyakumari/Sea.jpeg'
import coast from '../../Assets/BestTimeToVisit/Kanyakumari/Coast.jpeg'

const district = {
    id: 5,
    ids: '05',
    heading: 'Kanyakumari',
    content: {
        content1: "The months from October until February are considered the best time to visit Kanyakumari, as the weather remains calm and pleasant. Although this coastal region is a bit humid, this is the best time to try out some adventurous water sports, going on sightseeing and outings, undertaking beach activities and savoring the spectacular sunset views. With the beginning of winters in November, Kanyakumari also hosts many festivals during this month, for instance the Cape Festival.",
        content2: "Kanyakumari is the southernmost tip of India. As Kanyakumari is close to the seas, the expanse experiences a tropical coastal climate. There are not many variations in the seasons, as there is an overall humidity and seasonal rain during the year."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: landscape,
        placeHolder:"Landscape Source",
        season: "Kanyakumari in Winters (October to March)",
        content: "Winters in Kanyakumari are the best time for sightseeing and travelling around the place. Attractions such as Vavathurai, Chitharal Hill Temple and Thiruvalluvar Statue are popular among the tourists. November is a very favorable month for visiting Kanyakumari as the weather is pleasant with clear skies and less humidity. Temperatures vary from 15-degree Celsius to 35-degree Celsius. It is also the perfect time for indulging in beach activities like sunbathing, swimming, and surfing. December to February are the peak seasons; hence the tourism sector gets maximum revenue during this time."
    },
    {
        id: 2,
        imageSrc: sea,
        placeHolder:"Sea Source",
        season: "Kanyakumari in Summers (April to June)",
        content: "Kanyakumari experiences moderate weather during summers with temperatures ranging from 22 degrees to 35 degrees Celsius. During this period the weather is humid; however, the climatic conditions are apt for visiting the various attractions of the place including Vivekananda Rock, Vattakottai Fort and Gandhi Museum. Apart from this, the various beach activities are open throughout summer, so tourists can indulge in outdoor visits, sea bathing and surfing. Although early summers are an ideal time to visit Kanyakumari, the month of April gets considerably hot which is why this month is not preferred for travel. However, the place gets vacant with less crowd and cheaper accommodation - a perfect time for budget travelers."
    },
    {
        id: 3,
        imageSrc: coast,
        placeHolder:"Coast Source",
        season: "Kanyakumari in Monsoons (July to September)",
        content: "Monsoons in Kanyakumari starts in June which helps in tremendously lowering the temperature. However, the level of humidity keeps rising making it difficult to travel around. If you're a pluviophile, then the month of August is best recommended as the atmosphere is pleasant with a slight drizzle that enhances the beauty of this coast. Apart from its humidity, this is a good time to visit during monsoons. The frequent showers put a hold on sightseeing which affects the footfall in Kanyakumari in September; however, the Cape Festival takes place in October, and by this time tourists from around India visit Kanyakumari."
    }
]

export {district, listOfSeasons}