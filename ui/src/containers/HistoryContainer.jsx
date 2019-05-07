import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import Api from '../api';
import List from '../components/List';
import AvailableCard from '../components/AvailableCard';

class HistoryContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            errored: false,
            balance: {
                total: 0,
                available: 0,
            },
            error: {},
            page: 0,
            data: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const { page } = this.state;
        Promise.all([
            Api.getHistory(page),
            Api.getBalance(),
        ])
            .then(([response, balance]) => this.setState({
                data: response.result,
                page: response.page,
                balance: {
                    total: balance.total,
                    available: balance.available,
                },
                errored: false,
                error: {},
            }))
            .catch(error => this.setState({
                error,
                errored: true,
            }));
    };

    gotoPage = page => () => {
        this.setState({ page }, this.getData);
    };

    render() {
        const {
            page,
            loading,
            data,
            error,
            errored,
            balance,
        } = this.state;

        if (errored) return (
            <div>
                {error.toString()}
                <Button onClick={this.getData}>Повторить попытку</Button>
            </div>
        );

        return (
            <div>
                <AvailableCard
                    total={balance.total}
                    available={balance.available}
                    onUpdate={this.gotoPage(page)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '10px' }}
                    fullWidth
                >
                    Добавить
                </Button>
                {loading && <CircularProgress />}
                {!loading && <List data={data} />}
                <div>
                    {page >= 0 && <Button onClick={this.gotoPage(page - 1)}>{'<'}</Button>}
                    {page}
                    <Button onClick={this.gotoPage(page + 1)}>{'>'}</Button>
                    <Button onClick={this.gotoPage(page)}>Обновить</Button>
                </div>
            </div>
        );
    }
}

export default HistoryContainer;
