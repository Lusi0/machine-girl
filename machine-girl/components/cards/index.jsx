//import rea
import React from 'react';
// new card component



class Card extends React.Component {
    render() {

        // if this.props.atcards is true then set mycardlink

        let mycardlink = this.props.atcards ?  this.props.number : '/cards/' + this.props.number;

        //let mycardlink =  '/cards/' + this.props.number
        

        
        
        return (
            <a href={mycardlink}>
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
            </a>
        );
    }
}

// export card component
export default Card;