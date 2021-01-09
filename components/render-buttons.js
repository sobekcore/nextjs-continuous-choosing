import { useState } from "react";
import { Items, ItemNames } from "./item-lists";

/* Variables setup */
var stage = 0;
var temperature = 0;
var fahrenheit = 0;
var time = 0;
var minutes = 0;
var seconds = 0;
var img = "";

export default function RenderButtons()
{
  const [color, setColor] = useState(0);
  const [type, setType] = useState(0);
  const [teaAmount, setTeaAmount] = useState(0);

  function resetForm()
  {
    window.location.reload(false);
  }

  switch(stage)
  {
    case 0 : if(color != 0) { stage += 1;}
    case 1 : if(type != 0) { stage += 1; }
    case 2 : if(teaAmount != 0) { stage += 1; }
  }

  switch(stage)
  {
    case 0 :
      return(
        <div className="buttons">
          <button id="black-tea" onClick={() => setColor(Items[0])}>{ItemNames[0]}</button>
          <button id="green-tea" onClick={() => setColor(Items[1])}>{ItemNames[1]}</button>
          <button id="oolong-tea" onClick={() => setColor(Items[2])}>{ItemNames[2]}</button>
          <button id="white-tea" onClick={() => setColor(Items[3])}>{ItemNames[3]}</button>
          <button id="pu-erh-tea" onClick={() => setColor(Items[4])}>{ItemNames[4]}</button>
          <button id="yellow-tea" onClick={() => setColor(Items[5])}>{ItemNames[5]}</button>
        </div>
      );

    case 1 :
      if(color == "black")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[6])}>{ItemNames[6]}</button>
            <button onClick={() => setType(Items[7])}>{ItemNames[7]}</button>
            <button onClick={() => setType(Items[8])}>{ItemNames[8]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "green")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[9])}>{ItemNames[9]}</button>
            <button onClick={() => setType(Items[10])}>{ItemNames[10]}</button>
            <button onClick={() => setType(Items[11])}>{ItemNames[11]}</button>
            <button onClick={() => setType(Items[12])}>{ItemNames[12]}</button>
            <button onClick={() => setType(Items[13])}>{ItemNames[13]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "oolong")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[14])}>{ItemNames[14]}</button>
            <button onClick={() => setType(Items[15])}>{ItemNames[15]}</button>
            <button onClick={() => setType(Items[16])}>{ItemNames[16]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "white")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[17])}>{ItemNames[17]}</button>
            <button onClick={() => setType(Items[18])}>{ItemNames[18]}</button>
            <button onClick={() => setType(Items[19])}>{ItemNames[19]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "pu-erh")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[20])}>{ItemNames[20]}</button>
            <button onClick={() => setType(Items[21])}>{ItemNames[21]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "yellow")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType(Items[22])}>{ItemNames[22]}</button>
            <button onClick={() => setType(Items[23])}>{ItemNames[23]}</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }

    case 2 :
      if(type == "matcha")
      {
        return(
          <div className="buttons">
            <button onClick={() => setTeaAmount(Items[24])}>{ItemNames[24]}</button>
            <button onClick={() => setTeaAmount(Items[25])}>{ItemNames[25]}</button>
            <button onClick={() => setTeaAmount("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else
      {
        return(
          <div className="buttons">
            <button onClick={() => setTeaAmount(Items[26])}>{ItemNames[26]}</button>
            <button onClick={() => setTeaAmount(Items[27])}>{ItemNames[27]}</button>
            <button onClick={() => setTeaAmount(Items[28])}>{ItemNames[28]}</button>
          </div>
        );
      }

    case 3 :
      if(color == Items[0])
      {
        // First choice
        temperature += 90;
        time += 100;
        img = "/tea-cups/tea-cup-black.png";

        if(type == Items[6]) { temperature -= 5; time -= 20; }
        else if(type == Items[7]) { time += 20; }

        if(teaAmount == Items[26]) { time -= 20; }
        else if(teaAmount == Items[28]) { time += 20; }
      }
      else if(color == Items[1])
      {
        // Second choice
        temperature += 75;
        time += 80;
        img = "/tea-cups/tea-cup-green.png";

        if(type == Items[10]) { temperature += 5; }
        else if(type == Items[11]) { temperature -= 15; time += 10; }
        else if(type == Items[12]) { temperature += 5; time -= 20; }
        else if(type == Items[13]) { temperature -= 5; time += 40; }

        if(teaAmount == Items[26]) { time -= 20; }
        else if(teaAmount == Items[28]) { time += 20; }
        else if(teaAmount == Items[25]) { time += 30; }
      }
      else if(color == Items[2])
      {
        // Third choice
        temperature += 85;
        time += 130;
        img = "/tea-cups/tea-cup-oolong.png";

        if(type == Items[14]) { temperature -= 5; }

        if(teaAmount == Items[26]) { time -= 20; }
        else if(teaAmount == Items[28]) { time += 20; }
      }
      else if(color == Items[3])
      {
        // Fourth choice
        temperature += 80;
        time += 180;
        img = "/tea-cups/tea-cup-white.png";

        if(type == Items[18]) { temperature += 5; }
        else if(type == Items[19]) { temperature -= 5; }

        if(teaAmount == Items[26]) { time -= 20; }
        else if(teaAmount == Items[28]) { time += 20; }
      }
      else if(color == Items[4])
      {
        // Fifth choice
        temperature += 85;
        time += 180;
        img = "/tea-cups/tea-cup-pu-erh.png";

        if(type == Items[21]) { temperature += 10; time += 120; }

        if(teaAmount == Items[26]) { time -= 30; }
        else if(teaAmount == Items[28]) { time += 30; }
      }
      else if(color == Items[5])
      {
        // Sixth choice
        temperature += 80;
        time += 80;
        img = "/tea-cups/tea-cup-yellow.png";

        if(type == Items[22]) { temperature += 5; }
        else if(type == Items[23]) { time += 40; }

        if(teaAmount == Items[26]) { time -= 20; }
        else if(teaAmount == Items[28]) { time += 20; }
      }
      // Feel free do add more!

      fahrenheit = (temperature * 9/5) + 32;
      minutes = Math.floor(time / 60);
      seconds = time % 60;

      if(teaAmount == Items[24] || teaAmount == Items[25])
      {
        minutes = "Whisk with chasen for 1";
      }

      return(
        <div className="buttons">
          <div id="choose-again">
            <img src={img}/>
            <h3 id="tea-info">Water temperature: approx. {temperature}°C / {fahrenheit}°F <br />
            Tea brewing time: approx. {minutes}m { seconds >= 1 && <>{seconds}s</> } <br /> </h3>
            <button onClick={resetForm}>Choose tea again</button>
          </div>
        </div>
      );
  }
}
