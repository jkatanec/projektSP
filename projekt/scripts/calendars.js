var now = new Date();

var Calendar = function (o) {
    //Store div id
    this.divId = o.ParentID;

    // Days of week, starting on Sunday
    this.DaysOfWeek = o.DaysOfWeek;

    // Months, stating on January
    this.Months = o.Months;
    this.CurrentMonth = now.getMonth();

    this.CurrentYear = now.getFullYear();

    var f = o.Format;


    if (typeof (f) == 'string') {
        this.f = f.charAt(0).toUpperCase();
    } else {
        this.f = 'M';
    }

};

Calendar.prototype.nextMonth = function () {
    this.CurrentMonth = (this.CurrentMonth + 1) % 12;
    if (this.CurrentMonth == 0) this.CurrentYear++;
    this.showCurrent();
};

Calendar.prototype.previousMonth = function () {
    this.CurrentMonth = (this.CurrentMonth - 1) % 12;
    if (this.CurrentMonth == -1) {
        this.CurrentMonth = 11;
        this.CurrentYear--;
    }
    this.showCurrent();
};

// 
Calendar.prototype.previousYear = function () {
    this.CurrentYear = this.CurrentYear - 1;
    this.showCurrent();
}

// 
Calendar.prototype.nextYear = function () {
    this.CurrentYear = this.CurrentYear + 1;
    this.showCurrent();
}

Calendar.prototype.showCurrent = function () {
    this.Calendar(this.CurrentYear, this.CurrentMonth);
};

// Show month (year, month)
Calendar.prototype.Calendar = function (y, m) {
    typeof (y) == 'number' ? this.CurrentYear = y : null;
    typeof (y) == 'number' ? this.CurrentMonth = m : null;
    // 1st day of the selected month
    var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();
    // Last date of the selected month
    var lastDateOfCurrentMonth = new Date(y, m + 1, 0).getDate();

    // Last day of the previous month
    var lastDateOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    var monthandyearhtml =  this.Months[m] + ' - ' + y;

    var html = '<table><thead>';

    // Write the header of the days of the week
    html += '<tr>';

    for (var i = 0; i < 7; i++) {
        html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
    }

    html += '</tr><thead>';
    var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

    var cellvalue;

    for (var d, i = 0, z0 = 0; z0 < 6; z0++) {
        html += '<tbody><tr>';

        for (var z0a = 0; z0a < 7; z0a++) {
            
            d = i + dm - firstDayOfCurrentMonth;

            // Dates from prev month
            if (d < 1) {
                cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;

                html += '<td id="prevmonthdates">'+ (cellvalue);

                // Dates from next month
            } else if (d > lastDateOfCurrentMonth) {
                
                html += '<td id="nextmonthdates">' + (p++);

                // Current month dates
            } else {
                if (now.getDay() == d && now.getMonth() == m && now.getFullYear() == y) html += '<td id="today">' + (d);
                else
                    html += '<td id="currentmonthdates">' + (d);
                html += '<button id="add" title="Dodaj dogodek">+</button>';
                
                p = 1;
            }
            html += '</td>';
            if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
                z0 = 10; // no more rows
            }
            i++;
        }

        html += '</tr><tbody>';
    }

    // Closes table
    html += '</table>';

    document.getElementById("monthandyear").innerHTML = monthandyearhtml;

    document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function () {

    // Start calendar
    var c = new Calendar({
        ParentID: "cal-table",

        DaysOfWeek: ['PON', 'TOR', 'SRE', 'CET', 'PET', 'SOB', 'NED' ],

        Months: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],

        Format: 'dd/mm/yyyy'
    });

    c.showCurrent();

    // Bind next and previous button clicks
    document.getElementById('btnPrev').onclick = function () {
        c.previousMonth();  
    };

    document.getElementById('btnPrevYr').onclick = function () {
        c.previousYear();
    };

    document.getElementById('btnNext').onclick = function () {
        c.nextMonth();
    };

    document.getElementById('btnNextYr').onclick = function () {
        c.nextYear();
    };
}
