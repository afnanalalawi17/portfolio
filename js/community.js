document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {
    let communities = [
        {
            "name": "Umm Al-Qura University",
            "role": "Bachelor’s Degree in Computer Science",
            "session": "Graduated in 1441H (corresponds to 2019/2020)",
            "logo": "images/community/Umm_Al-Qura_University_logo.png",
            "link": "https://meetup.com/flutter-islamabad",
            "details": [
                 "Participated in Smart Makkah Hackathon – 3 days – Umm Al-Qura University",
    "Participated in Hajj & Umrah Challenge – 10 days – Super Dome, Jeddah (1st Place Winner)",
    "Participated in Hajjathon – 10 days – King Salman Conference Center, Madinah",
    "Completed Flutter & Dart Course – 69 hours – Udemy (Online)",
    "Completed Cybersecurity Course – Kaspersky – 18 hours – Online",
    "Attended Cybersecurity Workshop – 10 hours – Makkah Chamber",
    "Attended Digital Forensics Workshop – 3 hours – Umm Al-Qura University",
    "Participated in Homathon – 3 days – Saudi Federation for Cybersecurity, Programming & Drones",
    "Completed Academic Writing Course – 4 hours – English Language Center, Umm Al-Qura University",
    "Participated in CyberHub Initiative – 1 month – Umm Al-Qura University",
    "Attended Information Security in Entrepreneurship Projects Workshop – 2 hours – Umm Al-Qura University",
    "Attended Cyber Awareness in the Digital Space Workshop – 2 hours – Namaa Al-Madinah (Online)",
    "Participated in The Grand Startup Meetup – 2 hours – Al-Khaleefa Hotel, Makkah",
    "Participated in SAP Hackathon – 3 days – King Abdullah University of Science and Technology (KAUST)",
"Attended Arduino Application Workshop – 3 hours – Wadi Makkah",
"Completed English Language Course – 1 month – High Training Institute for Saudi Women",
"Participated in STEAM Hackathon – 3 days – KAUST",
"Participated in Junction X Hackathon – 3 days – KAUST",
"Completed Web Developer Track – 3 months – Arab Coders Program (Udacity – Online)",
"Completed Android Developer Track – 3 months – Arab Coders Program (Udacity – Online)"



            ]
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        // Create community card (clickable box)
        var card = document.createElement("a");
        card.className = "community-card";
        card.href = link;
        card.target = "_blank";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        // ✅ Show details outside card (bottom)
        if (Array.isArray(details)) {
            var ul = document.createElement("ul");
            ul.className = "cw-points"; // your styling class

            details.forEach(detail => {
                var li = document.createElement("li");
                li.className = "body2 cw-point";
                li.textContent = detail;
                ul.appendChild(li);
            });

            // Append to a global container under the cards
            document.getElementById("cw-points").appendChild(ul);
        }
    }
}
