import { createSelector } from 'reselect';

const selector = state => state.record;

export const recordSelector = createSelector(
  selector,
  ({records}) => ({ records })
)