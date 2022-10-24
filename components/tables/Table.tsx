import styles from '../../styles/components/TableGeneric.module.scss';

// constants and variables
interface Header {
  txn: string;
  event?: string;
  to?: string;
  from?: string;
  date?: string;
}

function Table({ headers, data }: { headers: Header; data: any }): JSX.Element {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__row__header}>
          {Object.values(headers).map((header: string) => {
            return (
              <th className={styles.table__header} key={header}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((entry: any, id: number) => {
          return (
            <tr className={styles.table__row__content} key={id}>
              {Object.keys(headers).map((header: string) =>
                Object.entries(entry).map(
                  ([key, val]: [key: string, val: any]) => {
                    if (key === header) {
                      return (
                        <td className={styles.table__content} key={key}>
                          {key === 'txn' ? <a href="#">{val}</a> : val}
                        </td>
                      );
                    }

                    return <></>;
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
