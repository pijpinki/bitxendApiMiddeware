import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import Api from '../api';
import List from '../components/List';

class HistoryContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            errored: false,
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
        Api.getHistory(page)
            .then(response => this.setState({
                data: response.result,
                page: response.page,
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
        } = this.state;

        if (errored) return (
            <div>
                {error.toString()}
                <Button onClick={this.getData}>Повторить попытку</Button>
            </div>
        );

        return (
            <div>
                {loading && <CircularProgress />}
                {!loading && <List data={data} />}
                <div>
                    {page >= 0 && <Button onClick={this.gotoPage(page - 1)}>{'<'}</Button>}
                    {page}
                    <Button onClick={this.gotoPage(page + 1)}>{'>'}</Button>
                </div>
            </div>
        );
    }
}

export default HistoryContainer;
