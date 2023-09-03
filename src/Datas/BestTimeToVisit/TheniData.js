import theni1 from '../../Assets/BestTimeToVisit/Theni/theni1.jpeg'
import theni2 from '../../Assets/BestTimeToVisit/Theni/theni2.jpeg'
import theni3 from '../../Assets/BestTimeToVisit/Theni/theni3.jpeg'

const district = {
    id: 9,
    ids: '09',
    heading: 'Theni',
    content: {
        content1: "To spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom Theni. The best season to visit Theni is winter when the weather remains all pleasant and favorable for tourism. On the other hand, summer remains hot, and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.",
        content2: "Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best monk to visit are from the month of December to February since the weather is pleasant and allows you to indulge in several outdoor activities."
    }
}

const listOfSeasons = [
    {
        id: 1,
        imageSrc: theni1,
        placeHolder:"",
        season: "Theni in Summer",
        content: "The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favorable to visit Theni. Temperature during these months’ ranges between 24°C and 42°C."
    },
    {
        id: 2,
        imageSrc: theni2,
        placeHolder:"",
        season: "Theni in Winter",
        content: "Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon."
    },
    {
        id: 3,
        imageSrc: theni3,
        placeHolder:"",
        season: "Theni in Monsoon",
        content: "December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni."
    }
]

export {district, listOfSeasons}