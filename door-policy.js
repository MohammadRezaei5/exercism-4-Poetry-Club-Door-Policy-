function frontDoorResponse(line) {
    return line[0];
  }
  
  // console.log(frontDoorResponse('Huge hooves too'));
  
  function frontDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  
  // console.log(frontDoorPassword('shire'));
  // console.log(frontDoorPassword('SHIRE'));
  
  function backDoorResponse(line) {
    return line.trim().slice(-1);
  }
  
  // console.log(backDoorResponse("Stands so high"));
  // console.log(backDoorResponse("Stands so high   "));
  
  
  function backDoorPassword(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase() + ", please";
  }
  
  // console.log(backDoorPassword("horse"));
  