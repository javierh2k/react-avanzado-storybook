import PropTypes from "prop-types";
import React from 'react';
import { withTheme } from 'styled-components';

import { TableHeader } from './styles';

import { Table } from 'react-bootstrap';

function Rows({ rows }) {
    const heads = Object.keys(rows.shift());
    return rows.map((row, key) => (
        <tr key={`tr-${key}`}>
            <td key={`td-00`}>{key + 1}</td>{' '}
            {heads.map((head, k) => (
                <td key={`td-${key + 1}${k}`}>{row[head]}</td>
            ))}
        </tr>
    ));
}

const ReactTable = ({ headers, rows, title, ...props }) => {
    console.log('theme table: ', props);
    return (
        <React.Fragment>
            <TableHeader>{title}</TableHeader>
            <Table striped bordered hover>
                <thead>
                <tr color="info">
                        <th key="th-0">#</th>
                        {Object.values(headers).map((header, key) => (
                            <th key={`th-${key + 1}`}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                <Rows rows={rows} />
                </tbody>
            </Table>

             
        </React.Fragment>
    );
};

ReactTable.propTypes = {
  headers: PropTypes.any,
  rows: PropTypes.any,
  title: PropTypes.any
}

export default withTheme(ReactTable);
