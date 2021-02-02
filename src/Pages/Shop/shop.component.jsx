import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../Redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../Collection/collection.container';

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync()
    },[])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);