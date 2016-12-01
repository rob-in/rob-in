function showHome() {
    document.getElementById("articleList").className = "hidden_element"
    document.getElementById("home").className = "visible_element";
}

function showArticleList() {
    document.getElementById("articleList").className = "visible_element"
    document.getElementById("home").className = "hidden_element";
}

function _dateDiff(startDate, endDate) { //Takes one string parameter -- date in YYYY-MM-DD format.
    var startDate = startDate.split('-');
    var endDate = endDate ? endDate.split('-') : null;
    var today = new Date();
    var year = endDate ? parseInt(endDate[0]) : today.getFullYear();
    var month = endDate ? parseInt(endDate[1]) : today.getMonth() + 1;
    var day = endDate ? parseInt(endDate[2]) : today.getDate();
    var yy = parseInt(startDate[0]);
    var mm = parseInt(startDate[1]);
    var dd = parseInt(startDate[2]);
    var years, months, days;
    // months
    months = month - mm;
    if (day < dd) {
        months = months - 1;
    }
    // years
    years = year - yy;
    if (month * 100 + day < mm * 100 + dd) {
        years = years - 1;
        months = months + 12;
    }
    // days
    // days = Math.floor((today.getTime() - (new Date(yy + years, mm + months - 1, dd)).getTime()) / (24 * 60 * 60 * 1000));
    //
    // return {years: years, months: months, days: days};
    return {
        years: years,
        months: months
    };
}

function _calculateTotalExperience() {
    var _startDate = '2011-10-05',
        _currentExperience = _dateDiff(_startDate),
        _viewId = "totalExperience";
    _updateView(_currentExperience, _viewId);
}

function _calculateDomainExperience() {
    var _domains = [{
        startDate: '2011-10-01',
        endDate: '2013-11-01'
    }, {
        startDate: '2013-10-28',
        endDate: '2014-01-31'
    }, {
        startDate: '2014-02-10'
    }]

    _domains.forEach(function(domain , index) {
        var _experienceStats = _dateDiff(domain.startDate, domain.endDate),
            _viewId = "domain_" + (index + 1);

        _updateView(_experienceStats, _viewId)
    })
}

function _updateView(experienceStats, viewId) {
  console.log(experienceStats, viewId);

}

(function() {
    _calculateTotalExperience();
    _calculateDomainExperience();
})();
