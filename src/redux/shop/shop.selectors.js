import {createSelector} from 'reselect';

export const selectCollections = state => state.shop;

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionName => 
    createSelector(
        [selectCollections],
        collections => collections[collectionName]
    ); 
