var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredient = [
  {"id":1, "text":"ham"},
  {"id":2, "text":"cheese"},
  {"id":3, "text":"cheese2"}
];

var List = React.createClass({
  render: function () {
    var listItems = makeListComponents();
    return (<ul>{listItems}</ul>);
  }
});
module.exports = List;

function makeListComponents() {
  return ingredient.map(transferToComponent);
}

function transferToComponent(item) {
  return <ListItem key={item.id} ingredient={item.text} />;
}
