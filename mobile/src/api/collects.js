import client from './client';

const endpoint = 'collects';   // Also tried './collects'

const getCollects = () => client.get( endpoint );

export default {
  getCollects,
};