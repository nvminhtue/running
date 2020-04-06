import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const paginationOptions = paginationFactory({
  sizePerPage: 10,
  hideSizePerPage: true,
  hidePageListOnlyOnePage: true
});

export default ({ data, columns, keyField }) => (
  <BootstrapTable
    {...{ data, columns, keyField }}
    bootstrap4
    hover
    condensed
    classes='table font-weight text-grey table-layout-auto text-center'
    pagination={paginationOptions}
    noDataIndication='No data available'
  />
);
