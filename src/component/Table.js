import React, { Component } from 'react';
import Row from './Row';

class Table extends Component {

    render() {
            const {repo} = this.props;
            // console.log(repo)
        return (
            <div className="App">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">language</th>
                            <th scope="col">url</th>

                        </tr>
                    </thead>
                    <tbody>
                        {repo.map((val,idx) => <Row data={val} number={idx} />)}
                        </tbody>

                </table>
            </div>
        )
    }
}


export default Table;