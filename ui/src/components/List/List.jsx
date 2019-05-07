import React from 'react';
import PropTypes from 'prop-types';
import { List as MList, ListItem } from '@material-ui/core';
import ItemCard from '../ItemCard';

class List extends React.PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        const { data } = this.props;
        return (
            <MList>
                {data.map(item => (
                    <ListItem key={item._id}>
                        <ItemCard item={item} />
                    </ListItem>
                ))}
            </MList>
        );
    }
}

export default List;
