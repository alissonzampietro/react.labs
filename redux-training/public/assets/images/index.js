const fs = require('fs');

let a = fs.readdirSync('./');

a.forEach(item => {
    if(item.split('.').at(1) !== 'png') {
        return;
    }
    let splittedName = item.split('-');
    fs.rename(item, splittedName[1]+'.png', function(arg) {
        console.log(arg);
    });
})