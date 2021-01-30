import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/shop/shop.selectors';
import CollectionItem from '../../Components/collection-item/collection-item.component'
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer }from'./collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return(
        <CollectionPageContainer className='collection-page'>
            <CollectionTitle className='title'>{title}</CollectionTitle>
            <CollectionItemsContainer className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps =(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);