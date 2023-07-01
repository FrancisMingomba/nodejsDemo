const bcrypt = require('bcrypt');

async function run(){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash('1234', salt);
    console.log(salt);
    console.log(hashedPassword);

}
run();