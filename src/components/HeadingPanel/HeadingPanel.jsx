var React = require('react');
var HeadingPanel = React.createClass({
    render: function(){
        var backgroundStyle = {color:"white",background:"blue"};
        if (this.props.headingColor) {
            backgroundStyle.background = this.props.headingColor;
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading" style={backgroundStyle}>
                    <h6>{this.props.title}</h6>
                    <h3>{this.props.message}</h3>
                </div>
                <h3 className="panel-body"></h3>
            </div>
        );
    }
});
module.exports = HeadingPanel;
