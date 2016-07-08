var React = require('react');
var Panel = require('./Panel.jsx');

var PanelManager = React.createClass({
    render: function(){

        return (
            <div className="row">
                    <div className="col-sm-4">
                        <Panel Count="50" Message="Follower add this month."/>
                    </div>
                    <div className="col-sm-4">
                        <Panel Count="$ 1250" Message="Follower add this month."/>
                    </div>
                    <div className="col-sm-4">
                        <Panel Count="$ 13865" Message="Follower add this month."/>
                    </div>
            </div>
        );
    }
});

module.exports = PanelManager;
