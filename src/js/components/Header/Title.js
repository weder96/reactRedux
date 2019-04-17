import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <h1>{this.props.title}</h1>
            /* jshint ignore:end */
        );
    }
}
