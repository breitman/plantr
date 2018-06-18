const {Vegetable, db, Gardener, Plot}  = require("./model");
let arr = [{name: 'carrot', color: 'orange'}, {name: 'broccoli', color: 'green'}, {name: 'raddish', color: 'red'}]


const dbSync = ()=>{
  const p1 = db.sync({force: true});

  const p2 = p1.then(() => {
    return createRows(arr)
  }).catch((err)=>{
    console.log(err);
  })
  return p2;
}
dbSync();

function createVeggie(arr){
    arr.forEach(veggie =>{
      let Veg = new Vegetable({
        name : veggie.name,
        color: veggie.color,
        planted_on: new Date()
      });
      return Veg.save();
    });
}
function createGardener(arr){
  arr.forEach(gardener =>{
    let grdn = new Gardener({
      name : gardener.name,
      age: gardener.age,
    });
    return grdn.save();
  });
}
function createPlots(arr){
  arr.forEach(plot =>{
    let plt = new Plot({
      size : plot.size,
      shaded: plot.shaded,
    });
    return plt.save();
  });
}
