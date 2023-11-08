import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./assets/images/logo.jpg";
import axios from "axios";
import Card from "./components/icons/card/card";

function App() {

  const [quotes, SetQuotes] = useState([])

  useEffect(()=>{

    console.log(quotes)

  },[quotes])

  function GetQuotes() {
    const options = {
      method: 'POST',
      url: 'https://quotel-quotes.p.rapidapi.com/quotes',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '096d7043d4msh2675ca63ad13d15p1e2935jsnacda8f927c83',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
      },
      data: {ids: [879890, Math.floor(Math.random() * (1000 - 0 + 1)) + 0]}
    };
    
    try {
      axios.request(options).then(
        (response)=>{
        console.log(response.data);
        SetQuotes([...quotes,...response.data])
      }
      );
     
    } catch (error) {
      console.error(error);
    }
  }

  


  return (
    <div className=" h-screen w-screen  flex flex-col overflow-x-hidden justify-between items-start gap-5 bg-[#E5E5E5]">

      <button onClick={GetQuotes}>Get Quote</button>

      <div className=" flex flex-wrap  w-full bg-[#E5E5E5] min-h-[100px] gap-10 justify-center">


        {quotes.map((e)=>(

          

          <Card
          text={e.quote}
          name={e.name}
          />
        ))}
    
       

        

      </div>

    </div>
  );
}

export default App;
