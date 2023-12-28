import {CAMPSITES} from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsitesById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};
