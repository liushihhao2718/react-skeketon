var React = require('react');
var ContentPanel = React.createClass({
    render: function() {

        var panelStyle = {
            color : 'white',
            background : 'dimgray',
            border : 'dimgray',
            textAlign : 'center'
        };

        var headingStyle = {
            background : 'white',
            height: 200
        }
        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
            headingStyle.border = this.props.headingColor;
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading" style={headingStyle}></div>
                <div className="panel-footer" style={panelStyle}>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>{this.props.shotView}</h3>
                            <p>Shot Views</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>{this.props.like}</h3>
                            <p>Likes</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>{this.props.comments}</h3>
                            <p>Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContentPanel;
