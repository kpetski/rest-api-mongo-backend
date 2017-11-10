const React = require('react')
const ReactDOM = require('react-dom')


class Header extends React.Component {
    render() {

        return (
            <div className="row bg-primary">
                <div className="columns padding-vert-large padding-horiz-xlarge text-center">
                    <h3 className="text-white padding-vert-large padding-horiz-xlarge">CRUD Messages App</h3>
                </div>
            </div>
        )
    }
}

module.exports = Header