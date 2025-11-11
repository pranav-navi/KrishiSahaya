export const crops = [
  {
    id: 'rice',
    name: 'Rice',
    description: 'Staple food crop, requires plenty of water',
    seasons: ['kharif', 'rabi'],
    waterRequirement: 'high',
    growingPeriod: '120-180 days',
    soilType: 'Clay loam, well-drained'
  },
  {
    id: 'wheat',
    name: 'Wheat',
    description: 'Major cereal crop, moderate water requirements',
    seasons: ['rabi'],
    waterRequirement: 'moderate',
    growingPeriod: '110-140 days',
    soilType: 'Well-drained loam soil'
  },
  {
    id: 'maize',
    name: 'Maize',
    description: 'Versatile crop used for food and fodder',
    seasons: ['kharif', 'rabi', 'zaid'],
    waterRequirement: 'moderate',
    growingPeriod: '90-120 days',
    soilType: 'Well-drained, fertile soil'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    description: 'Fiber crop, requires warm climate',
    seasons: ['kharif'],
    waterRequirement: 'moderate',
    growingPeriod: '150-180 days',
    soilType: 'Black cotton soil, well-drained'
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    description: 'Cash crop, high water requirements',
    seasons: ['kharif', 'zaid'],
    waterRequirement: 'high',
    growingPeriod: '365 days',
    soilType: 'Deep, well-drained loam'
  },
  {
    id: 'tomato',
    name: 'Tomato',
    description: 'Vegetable crop, high nutritional value',
    seasons: ['rabi', 'zaid'],
    waterRequirement: 'moderate',
    growingPeriod: '60-80 days',
    soilType: 'Well-drained, fertile soil'
  },
  {
    id: 'potato',
    name: 'Potato',
    description: 'Tuber crop, staple vegetable',
    seasons: ['rabi', 'zaid'],
    waterRequirement: 'moderate',
    growingPeriod: '90-120 days',
    soilType: 'Well-drained sandy loam'
  },
  {
    id: 'onion',
    name: 'Onion',
    description: 'Bulb crop, essential spice',
    seasons: ['rabi', 'zaid'],
    waterRequirement: 'low',
    growingPeriod: '90-110 days',
    soilType: 'Well-drained, friable soil'
  }
];

export const cropOptions = crops.map(crop => ({
  value: crop.id,
  label: crop.name
}));

export const getCropById = (id: string) => crops.find(crop => crop.id === id);
export const getCropsBySeason = (season: string) => crops.filter(crop => crop.seasons.includes(season));