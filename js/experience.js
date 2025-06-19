document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Al-Jeraisy Electronic Services",
            "position": "Senior Software Engineer ",
            "duration": "March 2023 - Present",
            "technologies": [
                // "Flutter",
                // "GitHub Actions",
                // "Mobile app development",
                // "Firebase",
                // "Integration with Nafath",
                // "REST APIs",
                // "Dart package",
                // "Google maps",
                // "SMS integration", 
                // "MVP Development",
                // "Agile Methodology",

            ],
            "details": [
                "Developing an administrative app for employee management",
                "Adding the Prayer Times service to the Tawakkalna app",
                "Integrating the Itikaf Permit display service in Tawakkaln",
                "Implementing the Arafat Sermon streaming feature in multiple languages in Tawakkalna.",
                "Contributing to the Cart Booking App for the Grand Mosque.",
                "Supporting the development of a comprehensive app integrating all Authority services, such as permits, reporting, and navigation.",

            ]
        },
        {
            "org": "Ikram Food Preservation Association",
            "position": "Senior Software Engineer ",
            "duration": "Aug 2022 - Present",
            "technologies": [
                //  "Firebase",
                //   "Flutter",
                // "GitHub Actions",
                // "REST APIs",
                // "Dart package",
                // "Google maps",
              
                // "Web development",
                // "Testing",
                // "PHP",
                
                // "Project Management", 
            ],
            "details": [
                "Developed three mobile applications using Flutter to manage surplus food collection from various sources (hotels, restaurants, events) and distribute it efficiently to families in need.",
                "Built a volunteer opportunity management system, enabling volunteer registration and engagement tracking.",
                "Developed an integrated admin dashboard to manage app activation and operations, with capabilities to generate detailed reports and analytics on food collection and distribution activities.",
               
            ]
        },
        {
            "org": "HyperTech Information Technology",
             "position": "Senior Software Engineer ",
            "duration": " 2021 -  2023",
            "technologies": [
                // "Flutter/Dart",
                // "GitHub Actions",
                // "Firebase",
                // "Stripe/PayPal",
                // "REST APIs",
                // "Cloud functions",
                // "Node.js",
                // "Express.js",
            ],
            "details": [
                "Built an app for beauty salons and cosmetic clinics",
                "Built an app for shopping centers to handle permits and violations",
                "Built an app to generate electronic tax and non-tax invoices",
                "Built a web app for selling perfume products",
                "Built a web app for electronics e-commerce",
                "Built a web app for pet product sales",
                "Built an app for safe cargo transportation with additional services",
                "Built Mohami app for lawyer communication and secure document upload.",
                
            ]
        },
        {
            "org": "Ibtikar Soft Information Technology",
             "position": "Senior Software Engineer ",
            "duration": " 2020 -  2021",
            "technologies": [
              
            ],
            "details": [
                "Built an app for car booking services.",
                "Built an app to support productive families and showcase their products",
                "Built an app for café appointment booking with delivery or pickup options",
                "Built an app for pet care scheduling, shopping, and other services",
                "Built an app for performing Umrah rituals on behalf of others",
                "Built a news delivery app",
                "Built a car wash booking app",
                "Built a violations monitoring app for the Ministry of Municipal Affairs",
                "Built a healthcare services app"
            ]
        },
       
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        if (orgName.innerHTML == "Dexplat | PK") {
            technologiesHeading.innerHTML = "Services";
        } else {
            // technologiesHeading.innerHTML = "Technologies";
        }

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        // for (var k = 0; k < exp[i]["technologies"].length; k++) {
        //     var techName = document.createElement("li");
        //     techName.className = "body2 exp-tech-item";
        //     techName.innerHTML = exp[i]["technologies"][k];
        //     technologiesList.appendChild(techName);
        // }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}