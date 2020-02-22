import PropTypes from 'prop-types';
import React from 'react';

/**
 * HeaderCell component for BaseTable
 */
const TableHeaderCell = ( { className, column, columnIndex } ) => <div className={className}>{column.title}</div>;

TableHeaderCell.propTypes = {
    className: PropTypes.string,
    column: PropTypes.object,
    columnIndex: PropTypes.number,
};

export default TableHeaderCell;
