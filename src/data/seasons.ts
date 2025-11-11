export const seasons = [
  {
    id: 'kharif',
    name: 'Kharif/Monsoon',
    description: 'Monsoon season, sowing in June-July, harvesting in September-October',
    months: 'June - October',
    rainfall: 'High (400-600mm)',
    temperature: '25-35°C',
    suitableCrops: ['Rice', 'Maize', 'Cotton', 'Sugarcane']
  },
  {
    id: 'rabi',
    name: 'Rabi/Winter',
    description: 'Winter season, sowing in October-November, harvesting in March-April',
    months: 'October - April',
    rainfall: 'Low (50-100mm)',
    temperature: '15-25°C',
    suitableCrops: ['Wheat', 'Barley', 'Mustard', 'Potato', 'Onion']
  },
  {
    id: 'zaid',
    name: 'Zaid/Summer',
    description: 'Summer season, sowing in February-March, harvesting in May-June',
    months: 'February - June',
    rainfall: 'Very low (20-50mm)',
    temperature: '30-40°C',
    suitableCrops: ['Maize', 'Cucumber', 'Watermelon', 'Tomato', 'Sugarcane']
  }
];

export const seasonOptions = seasons.map(season => ({
  value: season.id,
  label: season.name
}));

export const getSeasonById = (id: string) => seasons.find(season => season.id === id);