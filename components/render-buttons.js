import { useState } from "react";

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
          <button id="black-tea" onClick={() => setColor("black")}>Black</button>
          <button id="green-tea" onClick={() => setColor("green")}>Green</button>
          <button id="oolong-tea" onClick={() => setColor("oolong")}>Oolong</button>
          <button id="white-tea" onClick={() => setColor("white")}>White</button>
          <button id="pu-erh-tea" onClick={() => setColor("pu-erh")}>Pu-Erh</button>
          <button id="yellow-tea" onClick={() => setColor("yellow")}>Yellow</button>
        </div>
      );

    case 1 :
      if(color == "black")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("darjeeling")}>Darjeeling tea</button>
            <button onClick={() => setType("assam")}>Assam tea</button>
            <button onClick={() => setType("ceylon")}>Ceylon tea</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "green")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("darjeeling")}>Sencha tea</button>
            <button onClick={() => setType("bancha")}>Bancha tea</button>
            <button onClick={() => setType("gyokuro")}>Gyokuro tea</button>
            <button onClick={() => setType("matcha")}>Matcha tea</button>
            <button onClick={() => setType("gunpowder")}>Gunpowder tea</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "oolong")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("earthy")}>Earthy flavor</button>
            <button onClick={() => setType("flowery")}>Flowery flavor</button>
            <button onClick={() => setType("vegatable")}>Vegatable flavor</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "white")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("silver-needle")}>Silver Needle tea</button>
            <button onClick={() => setType("bai-mudan")}>Bai Mudan tea</button>
            <button onClick={() => setType("shoumei")}>Shoumei tea</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "pu-erh")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("raw-pu-erh")}>Raw Pu-Erh</button>
            <button onClick={() => setType("ripe-pu-erh")}>Ripe Pu-Erh</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else if(color == "yellow")
      {
        return(
          <div className="buttons">
            <button onClick={() => setType("junshan-yinzhen")}>Junshan Yinzhen tea</button>
            <button onClick={() => setType("huoshan-huangya")}>Huoshan Huangya tea</button>
            <button onClick={() => setType("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }

    case 2 :
      if(type == "matcha")
      {
        return(
          <div className="buttons">
            <button onClick={() => setTeaAmount("usucha")}>Usucha type</button>
            <button onClick={() => setTeaAmount("koicha")}>Koicha type</button>
            <button onClick={() => setTeaAmount("idk")}>I don't know <span role="img" aria-label=":/">😕</span></button>
          </div>
        );
      }
      else
      {
        return(
          <div className="buttons">
            <button onClick={() => setTeaAmount("high-amount")}>High amount of tea</button>
            <button onClick={() => setTeaAmount("medium-amount")}>Medium amount of tea</button>
            <button onClick={() => setTeaAmount("low-amount")}>Low amount of tea</button>
          </div>
        );
      }

    case 3 :
      if(color == "black")
      {
        temperature += 90;
        time += 100;
        img = "/tea-cups/tea-cup-black.png";

        if(type == "darjeeling") { temperature -= 5; time -= 20; }
        else if(type == "assam") { time += 20; }

        if(teaAmount == "high-amount") { time -= 20; }
        else if(teaAmount == "low-amount") { time += 20; }
      }
      else if(color == "green")
      {
        temperature += 75;
        time += 80;
        img = "/tea-cups/tea-cup-green.png";

        if(type == "bancha") { temperature += 5; }
        else if(type == "gyokuro") { temperature -= 15; time += 10; }
        else if(type == "matcha") { temperature += 5; time -= 20; }
        else if(type == "gunpowder") { temperature -= 5; time += 40; }

        if(teaAmount == "high-amount") { time -= 20; }
        else if(teaAmount == "low-amount") { time += 20; }
        else if(teaAmount == "koicha") { time += 30; }
      }
      else if(color == "oolong")
      {
        temperature += 85;
        time += 130;
        img = "/tea-cups/tea-cup-oolong.png";

        if(type == "earthy") { temperature -= 5; }

        if(teaAmount == "high-amount") { time -= 20; }
        else if(teaAmount == "low-amount") { time += 20; }
      }
      else if(color == "white")
      {
        temperature += 80;
        time += 180;
        img = "/tea-cups/tea-cup-white.png";

        if(type == "bai-mudan") { temperature += 5; }
        else if(type == "shoumei") { temperature -= 5; }

        if(teaAmount == "high-amount") { time -= 20; }
        else if(teaAmount == "low-amount") { time += 20; }
      }
      else if(color == "pu-erh")
      {
        temperature += 85;
        time += 180;
        img = "/tea-cups/tea-cup-pu-erh.png";

        if(type == "ripe-pu-erh") { temperature += 10; time += 120; }

        if(teaAmount == "high-amount") { time -= 30; }
        else if(teaAmount == "low-amount") { time += 30; }
      }
      else if(color == "yellow")
      {
        temperature += 80;
        time += 80;
        img = "/tea-cups/tea-cup-yellow.png";

        if(type == "junshan-yinzhen") { temperature += 5; }
        else if(type == "huoshan-huangya") { time += 40; }

        if(teaAmount == "high-amount") { time -= 20; }
        else if(teaAmount == "low-amount") { time += 20; }
      }

      fahrenheit = (temperature * 9/5) + 32;
      minutes = Math.floor(time / 60);
      seconds = time % 60;

      if(teaAmount == "usucha" || teaAmount == "koicha")
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
