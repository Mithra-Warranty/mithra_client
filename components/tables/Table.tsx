import styles from '../../styles/components/TableGeneric.module.scss';

// constants and variables 
interface Header {
    txn: string;
    event?: string;
    to?: string;
    from?: string;
    date?: string
}

function Table({headers, data} : {headers: Header, data: any}) { 
    return (
        <table className={styles.table}>
            <tbody>
                <tr className={styles.table__row__header}>
                    {Object.values(headers).map((header: string) => {
                        return (
                            <th className={styles.table__header} key={header}>{header}</th>
                        );
                    })}
                </tr>
                {data.map((entry: any, id: number) => {
                    return (
                        <tr className={styles.table__row__content} key={id}>
                            {Object.keys(headers).map((header: string) => 
                                Object.entries(entry).map(([key, val]: [key: string, val: any]) => {
                                    if(key == header) {
                                        return (
                                            <th className={styles.table__content} key={key}>
                                                {key === 'txn' ? <a href="#">{val}</a> : val}
                                            </th>
                                        )
                                    }
                                }
                            )
                        )}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;