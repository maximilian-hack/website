function hackedtext(target){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ§$%&{[]}";
  let interval = null;  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 34)]
      })
      .join("");
    
    if(iteration >= target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 2;
  }, 20);
}