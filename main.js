let initialcount=0;
let a=0;
started.onclick = () => {
  if (a == 0) {
    a = a + 1;
    c = setInterval(start, 1000);
    function start() {
      point.innerHTML = `HELLO WORLD ${initialcount}`;
      initialcount++;
    }
  }
};
stopped.onclick = () => {
    console.log(a)
  if (a == 1) {
    a = a - 1;
    clearInterval(c);
  }
};
reset.onclick=()=>{
    clearInterval(c);
    initialcount = 0;
    a = 0;
    point.innerHTML = "HELLO WORLD";
}
