import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    TextField,
    Select,
    MenuItem,
    Button,
    FormGroup,
    FormLabel,
    CircularProgress,
} from '@material-ui/core';

class AddContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            errored: false,
            type: '',
            description: '',
            price: 0,
        };
    }

    onChange = type => event => this.setState({
        [type]: event.target.value,
    });

    onApply = () => {

    };

    onCancel = () => {

    };


    render() {
        const {
            type,
            description,
            price,
            loading,
            errored,
        } = this.state;

        if (loading) return <CircularProgress />;
        if (errored) return (
            <div>
                <Button onClick={this.onApply}>Попробовать снова</Button>
                <Button onClick={this.onCancel}>Охрана отмена</Button>
            </div>
        );

        return (
            <div>
                <Card>
                    <CardContent>
                        <FormGroup>
                            <FormLabel>Тип</FormLabel>
                            <Select onChange={this.onChange('type')} value={type}>
                                <MenuItem value="">Тип</MenuItem>
                                <MenuItem>Транспорт</MenuItem>
                                <MenuItem>Продукты</MenuItem>
                                <MenuItem>Развлечения</MenuItem>
                                <MenuItem>Квартира</MenuItem>
                                <MenuItem>Одежда</MenuItem>
                                <MenuItem>Кафе рестораны</MenuItem>
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Подробно</FormLabel>
                            <TextField
                                name="description"
                                placeholder="Подробности"
                                onChange={this.onChange('description')}
                                value={description}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Цена</FormLabel>
                            <TextField
                                name="price"
                                placeholder="Цена"
                                onChange={this.onChange('price')}
                                value={price}
                            />
                        </FormGroup>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.onApply}>Доабвить</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default AddContainer;
