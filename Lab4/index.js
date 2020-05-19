
let ani = require('./animals');




const main = async () => {

    let Sasha = await ani.create('Sasha', 'Dog');
    console.log(Sasha);
    console.log("___________________________________________");
    let Lucy = await ani.create('Lucy', 'Dog');
    let outputall = await ani.getAll();
    console.log(outputall);
    console.log("___________________________________________");
    let Duke = await ani.create('Duke', 'Walrus');
    console.log(Duke);
    console.log("___________________________________________");

    let Sashaid = Sasha._id;

    let update = await ani.rename(Sashaid, 'Sashita');
    console.log(update);
    console.log("___________________________________________");
    let deletedanimal = await ani.remove(Lucy._id);
    // console.log("the deleted ")
    // console.log(deletedanimal);
    let outputallfinal = await ani.getAll();
    console.log(outputallfinal);




}

main().catch((error) => {
    console.log(error);

});
