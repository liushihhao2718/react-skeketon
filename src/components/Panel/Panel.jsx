var React = require('react');
var Panel = React.createClass({
    render: function() {

        var panelStyle = {
            titleStyle : {color:"black"},
            messageStyle : {color:"lightgray"}
        };

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <h3 style={panelStyle.titleStyle}>{this.props.Count}</h3>
                    <p style={panelStyle.messageStyle}>{this.props.Message}</p>
                </div>
            </div>
        );
    }
});

module.exports = Panel;
