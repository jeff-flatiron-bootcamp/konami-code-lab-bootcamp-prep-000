const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

<<<<<<< HEAD
function init()
{
  let index = 0;  
  
  document.body.addEventListener("keydown",
  function onKeyDownHandler(e)
  {
    const key = e.key;
    if(key === codes[index])
    {
      index++;
      if(index === codes.length)
      {
        window.prompt("You have entered z correct Kodes!", "You are the champion.");
      }
    }
    else
    {
      index = 0;
    }
    
  });
=======
function init() {
  // your code here
  //document.body.addEventListener("keydown", (event) => {});
>>>>>>> 84548a7baa42d4a7ba2789d974cdfb4299c37509
}

init();
