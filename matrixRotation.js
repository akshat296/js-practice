(function matrixRotation() {
    var row = 10;
    var col = 10;
    var arr = [];
    var i = 100;
    arr.length=10;
    arr = arr.fill(0).map(()=> {
            return arr.fill(0).map(()=>{
                return ++i; 
      });
    });
    function shifter(shift){
      let shift = 5;
      arr.map((ar, index)=>{
        return ar.map((data,index,a)=>{
            console.log(data);
        });
    });
  }
})();



