const fs=require('fs');

module.exports = (done) => {
  fs.readdir('./','utf8', (err,files) =>{
    if(err){
      throw err
    } else {
      done(files.join('\n'));
      //process.stdout.write(files.join('\n'))
      //process.stdout.write("\n prompt > ");
    }
  })
}
