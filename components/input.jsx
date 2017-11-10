const React = require('react')
const ReactDOM = require('react-dom')


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.submitMessage = this.submitMessage.bind(this)
      }
    submitMessage() {
        console.log('submitting message')
        console.log('name: ' + document.getElementById("name").value)
        console.log('message: ' + document.getElementById("message").value)
        if (typeof fetch !== 'undefined') {
            console.log('we have fetch')
            fetch('http://localhost:3000/messages/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: document.getElementById("message").value,
                    name: document.getElementById("name").value,
                }) 
            }) 

        }

        //clear out fields
        if (document.getElementById("name")) {
            document.getElementById("name").value = ""
        }
        if (document.getElementById("message")) {
            document.getElementById("message").value = ""
        }

        return this.props.messageSubmitted()        

    }

    render() {
        return (
            <div className="bg-off-white padding-medium">

                <div className="row">
                    <div className="large-12 columns md-text-field with-floating-label">
                        <input type="text" id="name" required />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="large-12 columns">
                        <div className="md-textarea-field with-floating-label md-textarea--autoresize">
                            <textarea data-autoresize="" rows="1" type="text" id="message" required></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                </div>

                <button className="button btn-cta"
                    onClick={this.submitMessage}>Submit</button>

            </div>


        )
    }
}

module.exports = Input