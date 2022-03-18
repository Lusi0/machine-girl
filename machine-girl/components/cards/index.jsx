//import rea
import React from 'react';
// new card component


class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {/* title */}
                <div className="card-title">
                    <h3>{this.props.title} <span className="collectors-number">{this.props.number}/36</span></h3>
                </div>
                {/* image */}
                <div className="card-image">
                    <img src={this.props.image} alt={this.props.title}/>
                </div>
            </div>
        );
    }
}

// export card component
export default Card;