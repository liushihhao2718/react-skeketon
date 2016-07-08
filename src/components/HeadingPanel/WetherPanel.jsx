var React = require('react');
var WatherPanel = React.createClass({
    render: function() {

        var panelStyle = {
            color : 'white',
            background : 'orange',
            textAlign : 'center'
        };

        return (
            <div className="panel panel-default" style={{border:panelStyle.background}}>
                <div className="panel-body" style={panelStyle}>
                    <h3>{this.props.temperature + '°'}</h3>
                    <p>{this.props.city}</p>
                </div>
            </div>
        );
    }
});

module.exports = WatherPanel;
