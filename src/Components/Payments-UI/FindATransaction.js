import { Fragment } from "react";

import Transactions from './Transactions';
import Search from "./Search";

const FindATransaction = () => {
    return ( <Fragment>
                <Search />
                <Transactions />
            </Fragment>);
}

export default FindATransaction;