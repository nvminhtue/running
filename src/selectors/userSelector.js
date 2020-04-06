import { createSelector } from 'reselect';

const selector = state =>  state.user;

export const userSelector = createSelector(
  selector,
  user => ({
    username: user.username || '',
    userId: user._id || '',
  }),
);
