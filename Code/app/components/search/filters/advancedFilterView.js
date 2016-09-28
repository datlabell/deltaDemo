var React = require('react');

var advancedSections = [
    {
        title: "ויזואלי",
        filters: [
            "קיימות תמונות ",
            "קיים סיור תלת מימדי",
            "קיימת הדמייה תלת מימדית"
        ]
    },
    {
        title: "מסמכים",
        filters: [
            "קיים מסמך טאבו",
            "קיים שרטוט בניין",
            "קיים תיק בניין"
        ]
    }
]


var AdvancedFilterSection = React.createClass({
    
    renderFilters: function(filter) {
        
        return (
            <div className="col-xs-6 pull-right" key={filter}>
                <div className="row">
                    <div className="col-xs-6">
                        <input type="checkbox" />
                    </div>
                    <div className="col-xs-6">
                        {filter}
                    </div> 
                </div>
            </div>
        )
    },

    render: function() {
        return (
            <div className="row advanced-filter-section" key={this.props.title}>
                <div className="col-xs-12">
                    <div className="row advanced-filter-section-title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row advanced-filters-container">
                        {this.props.filters.map(this.renderFilters)}
                    </div>
                </div>
            </div>
        )    
    }
})

var AdvancedFilterView = React.createClass({
    
    renderSection: function(section) {
        return <AdvancedFilterSection title={section.title} filters={section.filters} key={section.title}/>
    },

    render: function() {
        return (
            <div className="col-xs-5 advanced-filter container-rtl">
                {advancedSections.map(this.renderSection)}
            </div>
        )
    }
});

module.exports = AdvancedFilterView;