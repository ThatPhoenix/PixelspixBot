const DDBL = require("ddblapi.js");
    const ddbl = new DDBL();
      
    ddbl.getVotes("501802312604450820").then((res) => console.log(res)); 
    
    
  ddbl.getStats("501802312604450820").then((res) => console.log(res)); 
