import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    Button,
} from '@material-ui/core';

class AvailableCard extends React.PureComponent {
    static propTypes = {
        total: PropTypes.number.isRequired,
        available: PropTypes.number.isRequired,
        onUpdate: PropTypes.func.isRequired,
    };

    render() {
        const { available, total, onUpdate } = this.props;

        return (
            <Card>
                <CardHeader title={`Всего ${total}`} />
                <CardContent>
                    <Typography variant="title">Доступно {available}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onUpdate}>Обновить</Button>
                </CardActions>
            </Card>
        );
    }
}

export default AvailableCard;
