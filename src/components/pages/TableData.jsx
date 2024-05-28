import axios from "axios";
import { useEffect, useState } from "react";

export default function TableData(){

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        axios.get("https://sports-world-backend-srb6.vercel.app/players")
        .then(cricket => setPlayers(cricket.data) )
        .catch(err => console.log(err))
    }, [])

    return(
        players.map(player =>{
            return ( <tr  key= {player.runs} >
              <td>{player.player}</td>
              <td>{player.runs}</td>
              <td>{player.wickets}</td>

            </tr>)
            }      
)

);


}