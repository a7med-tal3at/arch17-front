export const API = 'API';
export const SET_USER_INFO = "SET_USER_INFO"

export 
const 
categories = 
['Airport',
'Animal Hospital & Clinic',
'Apartment',
'Bus Station',
'Café',
'Cathedral',
'Chapel',
'Churches',
'Cinema',
'City Planning',
'Clinic',
'Club',
'Coffee shop',
'Dorms',
'Exhibit design',
'Football stadium',
'furniture Design',
'Garden & Plaza',
'Grocery Store',
'Gym & Fitness Club',
'Home design',
'Hospital',
'Hostel',
'Hotel',
'Restaurant',
'House',
'Housing',
'Kid Garden',
'Loft Apartment',
'Lighting Design',
'Material Design',
'Master plan',
'Monastery',
'Mosque',
'Motel',
'Museum',
'Night Club',
'Office',
'Opera House',
'Pavilion',
'Penthouse',
'Pharmacy',
'Port',
'Praying room',
'Residence',
'Sales center',
'School',
'Shopping mall',
'Show Room',
'Spa & Sauna',
'Store',
'Super market',
'Swimming Pool',
'Synagogue',
'Tea house',
'Tea shop',
'Temple',
'Temporary store',
'Theater',
'University & Institute'
];

export
const 
types = 
[
'Architecture',
'Interior design' ,
'Landscape',
'Product Design',
'Blog'
];

var current_year = new Date().getFullYear();
let yeasList = []
for (let i = current_year; i > 1950 ; i--){
    yeasList.push(i);
}
export const years = yeasList;


const getCountries = require('country-data').countries;


//search fitler constants 

export const fitlerCategories=[
    'Furniture',
     'Lighting',
      'Decore',
       'Bathroom',
        'Wellness',
         'Kitchen' ,
         'Finishes' ,
         'Materials' ,'Construction', 'Products'
]

// end of search filter 


export const Countries = getCountries;
