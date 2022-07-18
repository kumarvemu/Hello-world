const TransactionRow = (props) => {
    return <tr>
        <td>{props.id}</td>
        <td>{props.orderId}</td>
        <td>{props.date}</td>
        <td>{props.country}</td>
        <td>{props.currency}</td>
        <td>{props.value}</td>
        </tr>;
}

export default TransactionRow;
