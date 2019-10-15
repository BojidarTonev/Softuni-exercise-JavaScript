function solve() {
  let exerciseElements = document.getElementById('exercise').querySelectorAll('div');

  for (let i = 0; i < exerciseElements.length; i++)
  {
      let element = exerciseElements[i];
      element.querySelector("a").addEventListener("click", () => {
          let visitedTimes = element.querySelector("span");
          let clicks = GetNumberFromString(visitedTimes.textContent);

          clicks++;
          visitedTimes.innerText = `Visited ${clicks} times`;
      });
  }

    function GetNumberFromString(input){
        let result = input.match(/\d+/g, "");

        return Number(result);
    }
}

