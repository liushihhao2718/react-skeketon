var React = require('react'),
    ReactDOM = require('react-dom'),
    PanelManager = require('./components/Panel/PanelManager.jsx'),
    HeadingPanelManager = require('./components/HeadingPanel/HeadingPanelManager.jsx'),
    ContentPanel = require('./components/ContentPanel/ContentPanel.jsx');

var contentStyle = {
    padding:10
};
ReactDOM.render(
    <div className="col-sm-10 col-sm-offset-1" style={{"backgroundColor":"lightgray"}}>
        <div className="row" style={contentStyle}>
            <div className="col-sm-9">
                <PanelManager />
                <div className="row">
                    <div className="col-sm-12">
                        <ContentPanel shotView="15000" like="12000" comments="5100" headingColor="pink" />
                        <ContentPanel shotView="15000" like="12000" comments="5100" headingColor="blue" />
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <HeadingPanelManager />
            </div>
        </div>

    </div>
    , document.getElementById('content'));
