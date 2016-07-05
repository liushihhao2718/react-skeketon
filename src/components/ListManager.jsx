var React = require('react');
var List = require('./List.jsx');
var ListItem = require('./ListItem.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ""};
    },
    render: function() {
        return (
            <div>
                <h3>
                    {this.props.title}
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.newItemText}></input>
                    <button>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    },
    handleSubmit: function(event){
        event.preventDefault();

        var currentItem = this.state.items;
        currentItem.push(this.state.newItemText);
        this.setState({items:currentItem, newItemText:''});
    },
    onChange: function(event) {
        this.setState({newItemText:event.target.value});
    }

});
module.exports = ListManager;
