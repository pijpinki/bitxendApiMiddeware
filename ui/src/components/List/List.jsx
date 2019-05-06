import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    List as MList,
    ListItem,
    Typography,
} from '@material-ui/core';

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
                        <Card>
                            <CardHeader disableTypography>
                                <Typography>{item.type}</Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography>{item.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Typography>{item.description}</Typography>
                            </CardActions>
                        </Card>
                    </ListItem>
                ))}
            </MList>
        );
    }
}

export default List;
