var initKeyStream = function (){
  var stdin = process.openStdin(); 
  // require('tty').setRawMode(true);    

  var userID = '';
  var flag = true;

  stdin.on('keypress', function (chunk, key) {
    // console.log('Get Chunk: ' + chunk + '\n');
    userID += chunk;
    
    if (key && key.ctrl && key.name == 'c') process.exit();
    if (key.name === 'return') {
      console.log('userID',userID);
      userID = '';
    }
  });
};

module.exports = initKeyStream;