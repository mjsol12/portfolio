import {ProjectDataType} from "../model";

export const ProjectData : ProjectDataType[] = [
    {
        Id: 'f900814c-d799-4486-b4d7-bae2b0c20851',
        Title: 'Smiles',
        Description: 'A School Grading Tool currently used by public teachers in some government school. ' +
            'Assigned mostly to front-end side design and layout using an Angular template, ' +
            'creating generic design and reusable components.',
        WebUrl: 'https://smiles.backbone.ph/login',
        ImageUrl: '/img/project-smiles/m-1.png',
        Images: [
            {Url: '/img/project-smiles/smiles-6.jpg', Name: 'Smiles Table Page'},
            {Url: '/img/project-smiles/smiles-5.jpg', Name: 'Smiles Section Page'},
            {Url: '/img/project-smiles/smiles-4.jpg', Name: 'Smiles School Page'},
            // {Url: '/img/project-smiles/smiles-7.jpg', Name: 'Smiles Responsive Page'},
            // {Url: '/img/project-smiles/smiles-2.jpg', Name: 'Smiles Home Page'},
            // {Url: '/img/project-smiles/smiles-1.jpg', Name: 'Smiles Login Page'}
        ],
        Tags: [
            "Javascript",
            "TypeScript",
            "Angular 7+",
            "Node Js",
            "Express.js",
            "Mongodb",
            "Rest API",
            "Handsontable",
            "jspdf",
            "Other Libraries"
        ]
    },
    {
        Id: 'b1480ac0-18a8-4f4a-8fc9-5d4dd0d086cc',
        Title: 'Outlet',
        Description: 'An accounting system focused on managing the income, expenses, and other financial activities and is currently used by my local businessman. ' +
            'Assigned as front-end from beginning up to long term support, ' +
            'from Login Design to Reporting and Authentication, and eventually worked on backend creating api ' +
            'requirements and designed data structure.',
        ImageUrl: '/img/project-outlet/p-3.jpg',
        Images: [
            // {Url:'/img/project-outlet/outlet-1.jpg', Name: 'Outlet Login Page'},
            // {Url:'/img/project-outlet/outlet-2.jpg', Name: 'Outlet 2 Login Page'},
            {Url:'/img/project-outlet/outlet-3.jpg', Name: 'Outlet Summary Page'},
            // {Url:'/img/project-outlet/outlet-4.jpg', Name: 'Outlet System Settings Page'},
            {Url:'/img/project-outlet/outlet-5.jpg', Name: 'Outlet Users Page'},
            {Url:'/img/project-outlet/outlet-6.jpg', Name: 'Outet SMS-Logs Page'}
        ],
        Tags: [
            "TypeScript",
            "Angular 6+",
            "Node Js",
            "Express.js",
            "Mongodb",
            "Rest API",
            "Material UI",
            "Bootstrap 4",
            "Sweet Alert",
            "Handsontable",
            "Other Libraries"
        ]
    }
];

export const SmallProjectsData: ProjectDataType[] = [
    {
        Title: 'Portfolio',
        Description: 'My personal site created from scratch, a complete summary my work, experience and qualifications',
        Url: 'https://github.com/mjsol12/portfolio',
        RepositoryUrl: 'https://github.com/mjsol12/portfolio',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "TypeScript",
            "React",
            "Bootstrap",
        ],
        Tags: [
            "TypeScript",
            "React",
            "Bootstrap"
        ]
    },
    {
        Title: 'Bluetooth Printer',
        Description: 'A mobile app that connect the bluetooth thermal printer and project outlet site',
        Url: 'https://bitbucket.org/mjs12/bt-thermal-printer/src/master/',
        RepositoryUrl: 'https://bitbucket.org/mjs12/bt-thermal-printer/src/master/',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "TypeScript",
            "Angular 6+",
            "NativeScript",
        ],
        Tags: [
            "TypeScript",
            "Angular 6+",
            "NativeScript",
            "3rd Party bluetooth connector",
            "Other Libraries"
        ]
    },
    {
        Title: 'Scoring System',
        Description: 'InterHigh School pageant scoring system for judges and its participants, display real time scores.',
        Url: 'https://bitbucket.org/mjs12/bt-thermal-printer/src/master/',
        RepositoryUrl: 'https://bitbucket.org/mjs12/bt-thermal-printer/src/master/',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "TypeScript",
            "Angular 6+",
            "Nodejs",
        ],
        Tags: [
            "TypeScript",
            "Angular 6+",
            "NativeScript",
            "3rd Party bluetooth connector",
            "Other Libraries"
        ]
    },
    {
        Title: 'ToDo list',
        Description: 'React app with basic functionality create, delete and marks a list of to-dos with basic routing',
        WebUrl: ' https://mjsol12.github.io/react-todo-list/',
        Url: ' https://mjsol12.github.io/react-todo-list/',
        RepositoryUrl: 'https://github.com/mjsol12/react-todo-list',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "TypeScript",
            "Angular 13+",
            "SweetAlert"
        ],
        Tags: [
            "TypeScript",
            "Angular 13+",
            "SweetAlert",
            "Other Libraries"
        ]
    },
    {
        Title: 'Dashboard',
        Description: 'Created dashboard displaying data from fake api call using only angular',
        Url: 'https://github.com/mjsol12/dashboard-fakebackend',
        RepositoryUrl: 'https://github.com/mjsol12/judging-criteria',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "TypeScript",
            "Angular 13+",
            "SweetAlert"
        ],
        Tags: [
            "TypeScript",
            "Angular 13+",
            "SweetAlert",
            "Other Libraries"
        ]
    },
    {
        Title: 'DA Central',
        Description: 'contributed in front-end template layout design, dashboard, and integrating some 3rd party library like OpenStreetMap' +
            ' and basic graph reporting.',
        WebUrl: 'https://da.backbone.ph',
        ImageUrl: '/img/project-da-central/m-1.png',
        FeaturedTags:[
            "Angular 8+",
            "Nodejs",
            "Mongodb",
            "Openstreetmap"
        ],
        Tags: [
            "TypeScript",
            "Angular 8+",
            "Nodejs",
            "Express.js",
            "Mongodb",
            "Rest API",
            "OSM(openstreetmap) API",
            "Other Libraries"
        ]
    },
    {
        Title: 'UBI',
        Description: 'System that generates basic income thru a network of users and reward system.' +
            'Integrate 3rd party, Facebook, Twitter, Google, Linkin API and design layout',
        Url: '',
        ImageUrl: '/img/project-smiles/m-1.png',
        FeaturedTags:[
            "Angular 7+",
            "Nodejs",
            "3rd Party library"
        ],
        Tags: [
            "Javascript",
            "TypeScript",
            "Angular 7+",
            "Nodejs",
            "SCSS",
            "Angular Template",
            "Other Libraries"
        ]
    }
];
