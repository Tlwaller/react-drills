import React, {Component} from 'react';

class Image extends Component {
    render() {
        return (
        <div>
            <img src={this.props.myImage} />
        </div>
        )
    }
}

export default Image;