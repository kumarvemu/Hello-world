import { Fragment,useState } from "react";


import Transactions from './Transactions';
import Search from "./Search";

const FindATransaction = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return ( <Fragment>
                <Search setSearchTerm={setSearchTerm} />
                <Transactions searchTerm={searchTerm} />
            </Fragment>);
}

export default FindATransaction;
