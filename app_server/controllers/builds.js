/* Hard-coded sample car builds */
const builds = [
{
id: 1,
carTitle: '2016 VW Golf GTI',
owner: 'Golf_GTI_16',
imageUrl: '',
category: 'Exterior',
modifications: ['Front lip / front splitter', 'Chin spoiler', 'Side skirts']
},
{
id: 2,
carTitle: '2012 Subaru WRX STI',
owner: 'BoxerBoost',
imageUrl: '',
category: 'Engine',
modifications: ['Cold air intake', 'Turbo-back exhaust', 'ECU tune']
},
{
id: 3,
carTitle: '2018 Honda Civic Type R',
owner: 'TypeR_Tom',
imageUrl: '',
category: 'Interior',
modifications: ['Bucket seats', 'Harness bar', 'Carbon trim']
},
{
id: 4,
carTitle: '2005 Mazda MX-5',
owner: 'MiataMike',
imageUrl: '',
category: 'Other',
modifications: ['Coilovers', 'Lightweight wheels', 'Roll bar']
}
];

/* GET all builds as JSON */
const getBuilds = function(req, res){
res.json(builds);
};

module.exports = {
getBuilds
};
