import { useParams } from "react-router";
import { Fragment, useState } from "react";
import { getPayment } from "./Datafunctions";

const ViewTransaction = () => {

    const emptyTransaction = { orderId: "", date : new Date().toISOString().slice(0,10) , country: "",
        amount : "", currency: "", taxCode : "", taxRate : "", type : ""}

    const [transaction, setTransaction] = useState(emptyTransaction);

    const params = useParams();
    getPayment(params.id)
        .then( response => {
            if (response.status === 200) {
                setTransaction(response.data);
            }
            else {
                console.log("Something went wrong ", response.status);
            }
        } )
        .catch( error => console.log("error occurred", error)) ;

    return (
        <Fragment>
            <h2>View transaction {transaction.id} </h2>
            <table className="transactionsTable" >
                <tbody>
                    <tr><th>Order Id</th><td>{transaction.orderId}</td></tr>
                    <tr><th>Date</th><td>{transaction.date}</td></tr>
                    <tr><th>Country</th><td>{transaction.country}</td></tr>
                    <tr><th>Currency</th><td>{transaction.currency}</td></tr>
                    <tr><th>Amount</th><td>{transaction.amount}</td></tr>
                    <tr><th>Tax Rate</th><td>{transaction.taxRate}</td></tr>
                    <tr><th>Tax Code</th><td>{transaction.taxCode}</td></tr>
                    <tr><th>Type</th><td>{transaction.type}</td></tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default ViewTransaction;