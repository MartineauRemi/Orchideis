import React from 'react'
import "../styles/OpeningHoursTable.css"

export default function OpeningHoursTable() {

    const DAYS =['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI','VENDREDI','SAMEDI','DIMANCHE']

    //Monday : 0 - Sunday : 6
    var TODAY = new Date().getDay()
    TODAY = ((TODAY - 1) >= 0) ? (TODAY - 1) : 6

    function getOpeningHours(day){
        switch(day){
            case "MARDI": 
                return "Fermé"
            case "SAMEDI":
            case "DIMANCHE":
                return "9:00 - 18:00"
            default:
                return "9:00 - 18:30"
        }
    }

    return (
        <table className="opening-hours">
            <thead>
              <tr>
                <th colspan="2"><h2>Heures d'ouverture</h2></th>
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day, index) => (
                  <tr className={TODAY === index ? "today" : ""}>
                    <td>{day}</td>
                    <td>{getOpeningHours(day)}</td>
                </tr>
              ))}
            </tbody>
        </table>
    )
}
