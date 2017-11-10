const React = require('react')
const ReactDOM = require('react-dom')


class List extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }    
    
    componentDidMount() {
        this.setState({
            data: undefined
        })
        if (typeof fetch !== 'undefined') {
            console.log('we have fetch')
            fetch('http://localhost:3000/messages/')
                .then((response) => response.json())
                .then((json) => {
                    console.log('----- SETTING DATA -----')
                    console.log(json)
                    this.setState({
                        data: json, //our JSON should now be availave in our state variable
                        isError: false
                    });
                })
                .catch(err => {
                    this.setState({
                        data: 'Uh Oh... :/. Unable to load messages.',  
                        isError: true
                    });
                })
        }
  
        
    }

    getTable() {
        const tableHead =
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
            </thead>

        let tableBody =
            <tbody>
                {this.getTableRows()}
            </tbody>;

        const table =
            <table className="table padding-left-medium padding-right-medium side-borders-none">
                {tableHead}
                {tableBody}
            </table>;

        return table;
    }
    
    getTableRows() {
        return (this.state.data || []).map((message, index) => {
            return (
                <tr key={index}>
                    <td>
                        {message.name || '--'}
                    </td>
                    <td>
                        {message.text || '--'}
                    </td>
                </tr>
            );
        });
    }
    
    render() {
            return (<div>
            {this.state.isError === false &&
                this.getTable()
            }
            {this.state.isError === true &&
                <div className="notification-box alert">{this.state.data}</div>
            }
            </div>
        )
        }
    }

module.exports = List