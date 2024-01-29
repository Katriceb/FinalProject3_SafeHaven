require('dotenv').config();
require('./database.cjs');

const Resource= require('../models/resource.cjs');

//seed.cjs

const resource =[
    {
        name:'Ohio Domestic Violence Network ',
        location: '174 E Long St Columbus Ohio 43215',
        services: ['Emergency Shelter', 'Legal and Fiancial Assistance'],
        seeDetails: true
    },
    {
        name:'Bravo',
        location: '750 E Long ST Columbus Ohio 43215',
        services: ['Emergency Shelter', 'Legal and Fiancial Assistance'],
        seeDetails: false
    },
    {
        name:'The Center for Family Safety and Healing',
        location: '655 E Livingston Ave Columbus Ohio 43205',
        services: ['Legal and Fiancial Assistance', 'Counseling'],
        seeDetails: true
    }];

    //function to seed the resource in the database

    async function seedResource() {
        try{
            await seedToDatabase(resource);
            console.log('Resource seeded successfully,');

        }catch (error){
            consolr.error('Error seeding resource:',error);
        }
    }
    seedResource();