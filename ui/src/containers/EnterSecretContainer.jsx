import React from 'react';
import {
    TextField,
    Button,
} from '@material-ui/core';

class EnterSecretContainer extends React.Component {
    state = {
        value: '',
    };

    onApply = () => window.localStorage.setItem('secret', this.state.value);

    render() {
        const { value } = this.state;

        return (
            <div>
                <TextField
                    label="Ключ доступа"
                    value={value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
                <Button onClick={this.onApply}>Применить</Button>
            </div>
        );
    }
}

export default EnterSecretContainer;
