import React from "react";
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    render() {
        return (
            <div>
                <button className="ui button primary">
                    <LanguageContext.Consumer>
                        {(value) => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                    </button>
            </div>
        )
    }
}

export default Button;
