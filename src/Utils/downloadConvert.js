export   const downloadConvert=d=>{
    if(d.slice(-2)=="B+")
    {
        return Number(d.slice(0,-2))*1000000000 + Math.floor(Math.random()*10000)+1000;
    }
    else if(d.slice(-1)=="B"){
        return Number(d.slice(0,-1))*1000000000;
    }
    else if(d.slice(-1)=="M"){
        return Number(d.slice(0,-1))*1000000;
    }
    else if(d.slice(-1)=="K"){
        return Number(d.slice(0,-1))*1000;
    }
    else return Number(d);
  }