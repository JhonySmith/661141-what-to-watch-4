import NameSpace from '../name-space';

export const getAuthStatus = (state) => state[NameSpace.USER].auth;
