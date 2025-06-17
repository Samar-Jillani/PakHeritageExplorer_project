const historicalPlaces = [
  {
    name: 'Mohenjo Daro',
    latitude: 27.3294,
    longitude: 68.1386,
    description: 'Ancient Indus Valley Civilization site.',
    locationName: 'Mohenjo Daro, Larkana District, Sindh, Pakistan'
  },
  {
    name: 'Badshahi Mosque',
    latitude: 31.5895,
    longitude: 74.3096,
    description: 'Mughal-era mosque in Lahore.',
    locationName: 'Badshahi Mosque, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Rohtas Fort',
    latitude: 32.9656,
    longitude: 73.5857,
    description: 'Historic 16th-century fortress.',
    locationName: 'Rohtas Fort, Jhelum, Punjab, Pakistan'
  },
  {
    name: 'Lahore Fort',
    latitude: 31.5889,
    longitude: 74.3108,
    description: 'A UNESCO World Heritage site...',
    locationName: 'Lahore Fort, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Shalimar Garden',
    latitude: 31.5882,
    longitude: 74.3732,
    description: 'Mughal-era garden complex...',
    locationName: 'Shalimar Gardens, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Jahangir Tomb',
    latitude: 31.6216,
    longitude: 74.3095,
    description: 'The mausoleum of the Mughal Emperor Jahangir...',
    locationName: 'Tomb of Jahangir, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Hiran Minar',
    latitude: 31.5796,
    longitude: 73.9803,
    description: 'A Mughal era complex...',
    locationName: 'Hiran Minar, Sheikhupura, Punjab, Pakistan'
  },
  {
    name: 'Akbari Sarai',
    latitude: 31.6210,
    longitude: 74.3082,
    description: 'A historical caravanserai...',
    locationName: 'Akbari Sarai, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Sheesh Mahal',
    latitude: 31.5901,
    longitude: 74.3105,
    description: 'Located inside the Lahore Fort...',
    locationName: 'Sheesh Mahal, Lahore Fort, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Wazir Khan Mosque',
    latitude: 31.5821,
    longitude: 74.3124,
    description: 'A masterpiece of Mughal architecture...',
    locationName: 'Wazir Khan Mosque, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Frere Hall',
    latitude: 24.8607,
    longitude: 67.0011,
    description: 'An art exhibition...',
    locationName: 'Frere Hall, Karachi, Sindh, Pakistan'
  },
  {
    name: 'Montgomery Hall',
    latitude: 31.5497,
    longitude: 74.3436,
    description: 'A historical talk...',
    locationName: 'Montgomery Hall, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Attock Fort',
    latitude: 33.7696,
    longitude: 72.3569,
    description: 'A guided heritage walk...',
    locationName: 'Attock Fort, Attock, Punjab, Pakistan'
  },
  {
    name: 'General Post Office',
    latitude: 31.5497,
    longitude: 74.3436,
    description: 'An exhibition showcasing vintage postal artifacts...',
    locationName: 'General Post Office, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Empress Market',
    latitude: 24.8553,
    longitude: 67.0302,
    description: 'A food festival...',
    locationName: 'Empress Market, Karachi, Sindh, Pakistan'
  },
  {
    name: 'Karachi Port Trust Building',
    latitude: 24.8255,
    longitude: 67.0197,
    description: 'A seminar focused on maritime history...',
    locationName: 'Karachi Port Trust Building, Karachi, Sindh, Pakistan'
  },
  {
    name: 'Clock Tower',
    latitude: 31.4197,
    longitude: 73.0737,
    description: 'A light show...',
    locationName: 'Ghanta Ghar (Clock Tower), Faisalabad, Punjab, Pakistan'
  },
  {
    name: 'Mohatta Palace',
    latitude: 24.8163,
    longitude: 67.0363,
    description: 'A heritage exhibition...',
    locationName: 'Mohatta Palace, Karachi, Sindh, Pakistan'
  },
  {
    name: 'Harappa',
    latitude: 30.6167,
    longitude: 72.6167,
    description: 'A major city of the ancient Indus Valley...',
    locationName: 'Harappa, Sahiwal District, Punjab, Pakistan'
  },
  {
    name: 'Sirkap',
    latitude: 33.7333,
    longitude: 72.7667,
    description: 'A prominent ancient site...',
    locationName: 'Sirkap, Taxila, Punjab, Pakistan'
  },
  {
    name: 'Mehrgarh',
    latitude: 29.5456,
    longitude: 66.4578,
    description: 'One of the earliest sites...',
    locationName: 'Mehrgarh, Bolan District, Balochistan, Pakistan'
  },
  {
    name: 'Ranikot Fort',
    latitude: 26.9658,
    longitude: 67.9746,
    description: 'The largest fort in the world...',
    locationName: 'Ranikot Fort, Jamshoro District, Sindh, Pakistan'
  },
  {
    name: 'Kot Diji Fort',
    latitude: 27.6478,
    longitude: 68.8411,
    description: 'An ancient fort...',
    locationName: 'Kot Diji Fort, Khairpur District, Sindh, Pakistan'
  },
  {
    name: 'Takh-i-Bhai',
    latitude: 34.0150,
    longitude: 71.6320,
    description: 'A Buddhist archaeological site...',
    locationName: 'Takht-i-Bahi, Mardan District, Khyber Pakhtunkhwa, Pakistan'
  },
  {
    name: 'Barikot Temple',
    latitude: 34.0170,
    longitude: 71.6490,
    description: 'A Hindu temple...',
    locationName: 'Barikot, Swat District, Khyber Pakhtunkhwa, Pakistan'
  },
  {
    name: 'Tambu Gurdwara',
    latitude: 31.5860,
    longitude: 74.3045,
    description: 'Spiritual gathering...',
    locationName: 'Tambu Gurdwara, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Bhuman Shah',
    latitude: 30.8106,
    longitude: 73.4456,
    description: 'Religious festival...',
    locationName: 'Bhuman Shah, Okara District, Punjab, Pakistan'
  },
  {
    name: 'Panja Sahib',
    latitude: 33.8195,
    longitude: 72.6890,
    description: 'Major Sikh pilgrimage...',
    locationName: 'Gurdwara Panja Sahib, Hasan Abdal, Punjab, Pakistan'
  },
  {
    name: 'Dera Sahib Sikh',
    latitude: 31.5889,
    longitude: 74.3095,
    description: 'Remembrance event...',
    locationName: 'Gurdwara Dera Sahib, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Rori Sahib',
    latitude: 32.0421,
    longitude: 74.2641,
    description: 'Exhibition...',
    locationName: 'Gurdwara Rori Sahib, Eminabad, Punjab, Pakistan'
  },
  {
    name: 'Gurduwara Janamasthan',
    latitude: 31.4504,
    longitude: 73.7101,
    description: 'Celebration marking the birth of Guru Nanak...',
    locationName: 'Gurdwara Janamasthan, Nankana Sahib, Punjab, Pakistan'
  },
  {
    name: 'Maharaja Ranjit Singh Haveli',
    latitude: 31.5896,
    longitude: 74.3092,
    description: 'Cultural event...',
    locationName: 'Maharaja Ranjit Singh Haveli, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Baradari of Maharaja Sher Singh ',
    latitude: 31.5885,
    longitude: 74.3089,
    description: 'Music festival...',
    locationName: 'Baradari of Maharaja Sher Singh, Lahore, Punjab, Pakistan'
  },
  {
    name: 'Shah Rukn-e-Alam Tomb',
    latitude: 30.1980,
    longitude: 71.4673,
    description: 'Spiritual ceremony...',
    locationName: 'Tomb of Shah Rukn-e-Alam, Multan, Punjab, Pakistan'
  },
  {
    name: 'Makli Necropolis',
    latitude: 24.7560,
    longitude: 67.9201,
    description: 'An exhibition at Makli...',
    locationName: 'Makli Necropolis, Thatta, Sindh, Pakistan'
  },
  {
    name: 'Derawar Fort ',
    latitude: 28.6340,
    longitude: 71.7394,
    description: 'A vibrant light show...',
    locationName: 'Derawar Fort, Bahawalpur District, Punjab, Pakistan'
  },
  {
    name: 'Bahauddin Zakariya Shrine',
    latitude: 30.1966,
    longitude: 71.4687,
    description: 'An annual spiritual event...',
    locationName: 'Bahauddin Zakariya Shrine, Multan, Punjab, Pakistan'
  },
  {
    name: 'Uch Sharif',
    latitude: 29.2056,
    longitude: 71.1914,
    description: 'Cultural festival...',
    locationName: 'Uch Sharif, Bahawalpur District, Punjab, Pakistan'
  },
  {
    name: 'Sadiq Garh Palace ',
    latitude: 29.3846,
    longitude: 71.6834,
    description: 'Royal-themed gala...',
    locationName: 'Sadiq Garh Palace, Bahawalpur, Punjab, Pakistan'
  },
  {
    name: 'Dataganjbaksh Shrine',
    latitude: 31.5735,
    longitude: 74.3087,
    description: 'Sufi music night...',
    locationName: 'Data Darbar, Lahore, Punjab, Pakistan'
  }
];

export default historicalPlaces;
