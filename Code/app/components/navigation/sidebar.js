//React requirements
var React = require('react');
var HashLink = require('react-router-hash-scroll').HashLink;

//Bootstrap requirements
var ReactBootstrap = require('react-bootstrap');
var BSNav = ReactBootstrap.Nav;

//Sidebar Section Element
var SidebarSection = React.createClass({
    
    renderLinkSafe: function(link) {
        return link.href === undefined ? <a>{link.title}</a> :  <HashLink to={link.href}>{link.title}</HashLink>;
    },

    renderSectionLink: function(link) {
        return (
            <li className="sidebar-section-link" key={link.title}>
                {this.renderLinkSafe(link)}
            </li>
        )
    },
    
    render: function() {
        return (
            <li className="sidebar-section" disabled>
                <div className="sidebar-section-title">
                    {this.props.title}
                </div>
                <ul className="sidebar-section-links">
                   {this.props.links.map(this.renderSectionLink)}
                </ul>
            </li>
        )
    }
})

//Sidebar element
var Sidebar = React.createClass({
    
    renderSidebarSection: function(sectionKey) {
        return <SidebarSection links={this.props.sections[sectionKey]} key={sectionKey} title={sectionKey}/>
    },

    render: function() {
        return (
            <div className="sidebar">
                <BSNav stacked>
                    {Object.keys(this.props.sections).map(this.renderSidebarSection)}
                </BSNav>
            </div>
        )
    }
});


module.exports = Sidebar;
