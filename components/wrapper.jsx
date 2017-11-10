const React = require('react')
const ReactDOM = require('react-dom')
const List = require('./list.jsx')
const Header = require('./header.jsx')
const Input = require('./input.jsx')


class Wrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            messageAdded: false
        }
        this.messageSubmitted = this.messageSubmitted.bind(this)
    }

    messageSubmitted() {
        this.setState({messageAdded: true})
        location.reload()
    }

    render() {

        return (
            <div>
                <Header title='CRUD Messages App' />
                <Input messageSubmitted={this.messageSubmitted}/>
                <List />
            </div>
        )
    }
}

module.exports = Wrapper