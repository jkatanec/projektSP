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
    document.getElementById("week-cal").innerHTML = "";
    // Last day of the previous month
    var lastDateOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    document.getElementById("month-year").innerHTML = this.Months[m] + ' - ' + y;
    for (var j = 0; j < 7; j++) {
            var node = document.getElementById("day-cal");
            var clone = node.cloneNode(true);
            clone.id = "day" + j;
            var week = document.getElementById("week-cal").appendChild(clone);
        }
    
    for (var i = 0; i < 6; i++) {
        
        var node = document.getElementById("week-cal");
        console.log(node.id);
        var clone = node.cloneNode(true);
        var body = document.getElementById("body").appendChild(clone);
        document.getElementById("week-cal").id = "week" + i;
    }
    
    var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

    var cellvalue;
    for (var d, i = 0, z0 = 0; z0 < 6; z0++) {
        var week = document.getElementById("week" + z0);
        for (var k = 0; k < 7; k++) {
            d = i + dm - firstDayOfCurrentMonth;

            // Dates from prev month
            if (d < 1) {
                cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;
                week.childNodes[k].innerHTML = cellvalue;
                week.childNodes[k].id = "prev-month";
            } else if (d > lastDateOfCurrentMonth) {
                week.childNodes[k].innerHTML = (p++);
                week.childNodes[k].id = "next-month";
            } else {
                var content = document.getElementById("test").innerHTML;
                
                if (now.getDate() == d && now.getMonth() == m && now.getFullYear() == y) {
                    week.childNodes[k].innerHTML = d + content;
                    week.childNodes[k].id = "today";
                   // if (cday) week.childNodes[k].className = "this-day";
                }
                else {
                    week.childNodes[k].innerHTML = d + content;
                    week.childNodes[k].id = "this-month";
                }

                p = 1;
            }
            i++;
            //if (week.childNodes[k].className != "this-day" && cday) week.childNodes[k].className = "other-day";
        }
        
    }
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
