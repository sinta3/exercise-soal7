const biodata = {
    name: 'Laila Ali',
    age: 20,
    college: 'University of Indonesia',
    hobbies: {
        sleeping: 'sleeping',
        shopping: 'shopping',
    },
    address: {
        street: 'Kemang Raya',
        province: 'Jakarta Selatan',
        country: 'Indonesia',
    },
    contact: {
        email: 'laila@gmail.com',
        phone: {
            countryCode: '021',
            number: 153138,
        },
    },
    skills: {
        language: 'english',
        programming: {
            language: 'javascript',
            framework1: 'react.js',
            language2: 'java',
            language3: 'C++',
        },
    },
};

let data =  'Hai , my name is ' + biodata.name + ', I studied in ' + biodata.college + '. My programming skills are ' + biodata.skills.programming.language + ' including using its framework ' + biodata.skills.programming.framework1 + ', ' + biodata.skills.programming.language2 + ', and ' + biodata.skills.programming.language3 + '. \nMy hobbies are ' + biodata.hobbies.sleeping + ' and also ' + biodata.hobbies.shopping + '. Right now i live at ' + biodata.address.street + ', ' + biodata.address.province + ' - ' + biodata.address.country + '. You can reach me on my email ' + biodata.contact.email + ' or my phone number ' + biodata.contact.phone.countryCode + ' - ' + biodata.contact.phone.number + '. Thank you and have a nice day. ';

console.log (data);