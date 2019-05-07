import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
} from '@material-ui/core';

class AvalibleCard extends React.PureComponent {
    static propTypes = {
        avalible: PropTypes.number.isRequired,
        onUpdate: PropTypes.func.isRequired,
    };

    render() {
        const { avalible, onUpdate } = this.props;

        return (
            <Card>
                <CardContent>
                    <Typography>Доступно {avalible}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onUpdate}>Обновить</Button>
                </CardActions>
            </Card>
        );
    }
}

export default AvalibleCard;
