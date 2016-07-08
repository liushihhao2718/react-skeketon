var React = require('react');
var List = require('./List.jsx');
var ListItem = require('./ListItem.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ""};
    },
    render: function() {
        var divStyle = {
            marginTop : 10
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form className="row" onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control"
                                        onChange={this.onChange}
                                        value={this.state.newItemText}></input>
                            </div>
                            <button className="col-sm-2 col-offset-1 btn btn-primary">Add</button>
                        </form>
                        <List className="row" items={this.state.items} />
                    </div>
                </div>
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
