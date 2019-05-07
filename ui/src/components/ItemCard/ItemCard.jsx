import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';

class ItemCard extends React.PureComponent {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render() {
        const { item: { type, price, description } } = this.props;

        return (
            <Card>
                <CardHeader disableTypography>
                    <Typography>{type}</Typography>
                </CardHeader>
                <CardContent>
                    <Typography>{price}</Typography>
                </CardContent>
                <CardActions>
                    <Typography>{description}</Typography>
                </CardActions>
            </Card>
        );
    }
}

export default ItemCard;
