var React = require('react'),
    HeadingPanel = require('./HeadingPanel.jsx'),
    WetherPanel = require('./WetherPanel.jsx');
var HeadingPanelManager = React.createClass({
    render: function(){
        return (
            <div className="row">
                <WetherPanel temperature="18" city="Paris" />
                <HeadingPanel title="New visitor" message="1.5K" headingColor="blue"/>
                <HeadingPanel title="New visitor" message="1.5K" headingColor="purple"/>
                <HeadingPanel title="New visitor" message="1.5K" headingColor="red"/>
                <HeadingPanel title="New visitor" message="1.5K" headingColor="green"/>
            </div>
        );
    }
});
module.exports = HeadingPanelManager;
