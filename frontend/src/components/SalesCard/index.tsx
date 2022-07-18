import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";

import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365 ))
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const[sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        //console.log(minDate);//para mostrar como esta sendol mostrada a data 

        //Pegando a data e atribuindo a constante, convertendo a data 
        //com uma formatacao padrao e recortando so a data e removendo a hora
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        /*console.log("teste");*/
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                //console.log(response.data);
                setSales(response.data.content);
        });
    },[minDate, maxDate]);//definindo que senpre que haja alteracao nestes campos voce possa atualizar os dados

    return(
        <div className="card-principal">
        <h2 className="sales-title">Vendas</h2>
        <div>

            <div className="form-control-container">
                <DatePicker selected={ minDate}
                onChange={(date: Date) => setMinDate(date)}
                className="form-control"
                dateFormat="dd/MM/yyyy"/>
            </div>

            <div className="form-control-container">
                <DatePicker selected={ maxDate}
                onChange={(date: Date) => setMaxDate(date)}
                className="form-control"
                dateFormat="dd/MM/yyyy"/>
            </div>

        </div>

        <div>
            <table className="sales-table">
               
                <thead>
                    <tr> 

                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>

                        <th>Total</th>
                        <th>Notificar</th>

                    </tr>
                </thead>
                
                <tbody>
                    {
                        sales.map(sale => {
                            return(
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton saleId={sale.id}/>
                                        </div>
                                    </td>
        
                            </tr>
        
                            )
                        })
                    }
                                       
                </tbody>

            </table>
        </div>

    </div>
    )
  
  }
  
  export default SalesCard;
  