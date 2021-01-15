const fs = require('fs');
const path = require('path');

function getImages(dir, done) {
  let results = [];
fs.readdir(dir, function(err, list){
    if (err) return done(err);

    var pending = list.length;
    
    if(!pending) return done(null, results);

    list.forEach(function(file){
        file=path.resolve(dir,file);

        fs.stat(file, function(err, stat){
            // if directory, recursive call
            if(stat && stat.isDirectory()){
                // Add directory to array [comment if you need to remove the directories from the array]
                results.push(file);

                getImages(file, function(err, res){
                    results=results.concat(res);
                    if(!--pending) done(null,results);
                });
            }else{
                results.push(file);

                if(!--pending) done(null,results);
            }

        });
    });

};


  //   return results;
}

const images = [
  getImages("./assets"),
  function (err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
    return data;
  },
];

export default images;
