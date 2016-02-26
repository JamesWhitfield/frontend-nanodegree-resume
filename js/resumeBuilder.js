/*
This is empty on purpose! Your code to build the resume will go here.
 */




var bio = {
    "name": "James Whitfield",
    "age": 25,
    "role": "Software Developer",
    "location": "Nottingham, UK",
    "contact": [{
        "name": "Email",
        "address": "j.f.whitfield@me.com"
    }, {
        "name": "GitHub",
        "address": "https://github.com/JamesWhitfield"
    }, {
        "name": "LinkedIn",
        "address": "https://uk.linkedin.com/in/james-whitfield-189810114"
    }],
    "blurb": "Some text about me that seems very interesting",
    "skills": ["Java", "Android", "UI", "XML", "SQL", "JSON", "REST/SOAP"],
    "bioPic": "images/20160226_101503.jpg",
    "work": [{
        "position": "Junior Mobile Developer",
        "company": "Hillarys",
        "time": "2 years  2014 - 2016 ",
        "location": "Nottingham, UK",
        "website": "http://www.hillarys.co.uk/",
        "description": "Android developer"
    }, {
        "position": "Android Developer",
        "company": "Amey",
        "time": "March 2016 +",
        "location": "Manchester, UK",
        "website": "https://www.amey.co.uk/",
        "description": "Andorid developer"
    }],
    "education": [{
        "name": "University of Leeds",
        "dates": "3 years  2010 - 2013",
        "city": "Leeds ,UK",
        "link": "http://www.engineering.leeds.ac.uk/computing/undergraduate/degree-computer-science/",
        "degree": "BSc Computer Science (Hons)"
    }, {
        "name": "Central College Nottingham",
        "dates": "2 years  2008 - 2010",
        "city": "Nottingham ,UK",
        "link": "http://www.centralnottingham.ac.uk/",
        "degree": "BTEC for ICT Practioners (Software Development)"
    }],
    "projects": [{
        "title": "SAMSON",
        "dates": "2 years  2014 - 2016 ",
        "description": "An android application to allow self employed sales and fitter representatives of Hillarys to manage the full work flow of their business from a mobile phone or tablet. Full SAP integration allows for the sale of Blinds, Curtains, and carpets in over half a million product combinations.The projects use of the Agile SCRUM methodology earned it a nomination in the 2014 UK Agile Awards, and Hillarys won the TechWorld Awards 2013 – Enterprise Software Project of the Year.",
        "image": ["images/Screenshot_2016-02-24-10-00-02.png"],
        "link": "http://www.hillarys.co.uk/"
    }, {
        "title": "Network Traffic Monitor",
        "dates": "2016 +",
        "description": "Personal project: An android application to show real time and historical network speed and usage on a user device to help enable user tracking of what apps are using a devices data",
        "image": ["images/Screenshot_2016-02-24-10-05-07.png"],
        "link": "https://play.google.com/store/apps/details?id=com.whitfield.james.simplenetworkspeedmonitor"
    }]
};


function displayBio() {


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedName = HTMLheaderName.replace("%data%", convertInternational(bio.name));
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    displayContacts();
    $("#header").append(formattedBioPic);

}


function displayContacts() {

    if (bio.contact.length > 0) {
        for (type in bio.contact) {
            console.log("Contact type found");
            var contactType = bio.contact[type];
            var formattedGenericContact = HTMLcontactGeneric.replace("%data%", contactType.address).replace("%contact%", contactType.name);
            $("#topContacts").append(formattedGenericContact);
        }
    }
}



function displaySkills() {
    if (bio.skills.length > 0) {

        var formattedSkillsStart = HTMLskillsStart;
        $("#header").append(formattedSkillsStart);
        for (name in bio.skills) {
            console.log("Skills found");
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[name]));

        }
    }
}

function displayEducation() {
    if (bio.education.length > 0) {

        for (education in bio.education) {
            console.log("Education found");
            $("#education").append(HTMLschoolStart);

            if (bio.education[education].hasOwnProperty("name") && bio.education[education].hasOwnProperty("degree")) {
                var formattedEducationName = HTMLschoolName.replace("%data%", bio.education[education]["name"]);
                var formattedEducationDegree = HTMLschoolDegree.replace("%data%", bio.education[education]["degree"]);
                formattedEducationName = formattedEducationName.replace("#", bio.education[education]["link"]) + formattedEducationDegree;
                $(".education-entry:last").append(formattedEducationName);
            }

            if (bio.education[education].hasOwnProperty("dates")) {
                var formattedEducationDates = HTMLschoolDates.replace("%data%", bio.education[education]["dates"]);
                $(".education-entry:last").append(formattedEducationDates);
            }

            if (bio.education[education].hasOwnProperty("city")) {
                var formattedEducationLocation = HTMLschoolLocation.replace("%data%", bio.education[education]["city"]);
                $(".education-entry:last").append(formattedEducationLocation);
            }
        }
    } else {
        console.log("No Skills");
    }
}

function displayWork() {
    if (bio.work.length > 0) {
        for (job in bio.work) {
            console.log("Job found");
            $("#workExperience").append(HTMLworkStart);
            var workItem = bio.work[job];
            if (workItem.hasOwnProperty("company") && workItem.hasOwnProperty("position")) {

                var formattedEmployer = HTMLworkEmployer.replace("%data%", workItem.company);
                var formattedPosition = HTMLworkTitle.replace("%data%", workItem.position);
                if (workItem.hasOwnProperty("website")) {
                    formattedEmployer = formattedEmployer.replace("#", workItem.website);
                }
                formattedEmployer = formattedEmployer + formattedPosition;
                $(".work-entry:last").append(formattedEmployer);

            }
            if (workItem.hasOwnProperty("time")) {
                var formattedDates = HTMLworkDates.replace("%data%", workItem.time);
                $(".work-entry:last").append(formattedDates);
            }
            if (workItem.hasOwnProperty("location")) {
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", workItem.location);
                $(".work-entry:last").append(formattedWorkLocation);
            }
            if (workItem.hasOwnProperty("description")) {
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", workItem.description);
                $(".work-entry:last").append(formattedWorkDescription);
            }
        }
    }
}

projects.display = function() {

    if (bio.projects.length > 0) {
        for (project in bio.projects) {
            console.log("Project found");
            var projectItem = bio.projects[project];
            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projectItem.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projectItem.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projectItem.description));
            if (projectItem.image.length > 0) {
                // console.log("Images found");
                for (pic in projectItem.image) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projectItem.image[pic]));
                }
            }
        }
    }

}

function setupEvents() {

    $(document).click(function(loc) {
        console.log(loc.pageX + " x " + loc.pageY);
    })
}

function convertInternational(names) {

    var nameSplit = names.trim().split(" ");
    var firstName = nameSplit[0];

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    return firstName + " " + nameSplit[1].toUpperCase();
}

function mapSetup() {

    $("#mapDiv").append(googleMap);
}

displayBio();
displaySkills();
displayWork();
displayEducation();
setupEvents();
projects.display();
mapSetup();
