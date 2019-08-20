import React, { Component } from 'react';

class Row extends Component {

    render() {
            const {data,number} = this.props;

        return (
           
            <tr>
                <td >{number+1}</td>
                <td>{data.name}</td>
                <td>{data.language}</td>
                <td>  <a href={data.html_url}>{data.html_url}</a>
                </td>
            </tr>
            
        )
    }
}


export default Row;