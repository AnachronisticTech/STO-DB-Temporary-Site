function ucwords(text) {
    text = text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    return text;
}

function getPrefix(key) {
    var arr = {
        0:'',
        1:'U.S.S. ',
        2:'I.S.S. ',
        3:'V.S.S. ',
        4:'I.G.V. ',
        5:'I.G.S. ',
        6:'T.S.C. ',
        7:'C.U.V. ',
        8:'C.D.S. ',
        9:'A.C.V. ',
        10:'I.K.S. ',
        11:'A.K.S. ',
        12:'O.S.S. ',
        13:'G.H.S. ',
        14:'N.F.V. ',
        15:'R.R.W. ',
        16:'I.R.W. ',
        17:'A.R.W. ',
        18:'S.S. ',
        19:'H.H.V. ',
        20:'R.X.S. ',
        21:'S.C.S. ',
        22:'V.S.W. ',
        23:'D.V. ',
        24:'N.V. ',
        25:'E.C.S. '
    }
    return arr[key];
}

function getBorderColour(key) {
    var arr = {
        0:"#d1ba6c", //federation
        1:"#781414", //klingon empire
        2:"#147847", //romulan republic
        3:"#6e3a8d", //dominion
        4:"#d2de60", //federation (23rd century)
        5:"#003366" //federation (discovery)
    }
    return arr[key];
}

function getFaction(key, length) {
    var arr = {}
    if (length == "short") {
        arr = {
            0:"fed", //federation
            1:"kdf", //klingon empire
            2:"rom", //romulan republic
            3:"dom", //dominion
            4:"tos", //federation (23rd century)
            5:"dsc" //federation (discovery)
        }
        return arr[key]; 
    } else {
        arr = {
            0:"federation",
            1:"klingon empire",
            2:"romulan republic",
            3:"dominion",
            4:"federation (23rd century)",
            5:"federation (discovery"
        }
        return ucwords(arr[key]);
    }
}

function getGender(key) {
    var arr = {
        0:"male",
        1:"female"
    }
    return ucwords(arr[key]);
}

function getPrivacy(key) {
    var arr = {
        0:"private",
        1:"public"
    }
    return ucwords(arr[key]);
}

function getCareer(key, length) {
    var arr = {}
    if (length == "short") {
        var arr = {
            0:"eng",
            1:"tac",
            2:"sci"
        }
        return arr[key]; 
    } else {
        var arr = {
            0:"engineering",
            1:"tactical",
            2:"science"
        }
        return ucwords(arr[key]);
    }
}

function getFactionRank(key, faction) {
    var arr = {};
    switch (faction) {
        case 1:
            arr = {
                // -1:'warrior',
                0:'bekk',
                1:'lieutenant',
                2:'lieutenant commander',
                3:'commander',
                4:'captain',
                5:'brigadier general',
                6:'major general',
                7:'lieutenant general',
                8:'general',
                9:'dahar master'
            }
            break;
        case 2:
            arr = {
                // -1:'citizen',
                0:'uhlan',
                1:'lieutenant',
                2:'centurion',
                3:'subcommander',
                4:'commander',
                5:'subadmiral I',
                6:'subadmiral II',
                7:'vice admiral',
                8:'admiral',
                9:'fleet admiral'
            }
            break;
        case 3:
            arr = {
                // -1:'sixth',
                0:'fifth',
                1:'fourth',
                2:'third',
                3:'second',
                4:'first',
                5:'master first',
                6:'senior first',
                7:'elite first',
                8:'revered first',
                9:'honored first'
            }
            break;
        case 4:
            arr = {
                // -1:'ensign',
                0:'lieutenant junior grade',
                1:'lieutenant',
                2:'lieutenant commander',
                3:'commander',
                4:'captain',
                5:'rear admiral, lower half',
                6:'rear admiral, upper half',
                7:'vice admiral',
                8:'admiral',
                9:'fleet admiral'
            }
            break;
        default:
            arr = {
                // -1:'cadet',
                0:'ensign',
                1:'lieutenant',
                2:'lieutenant commander',
                3:'commander',
                4:'captain',
                5:'rear admiral, lower half',
                6:'rear admiral, upper half',
                7:'vice admiral',
                8:'admiral',
                9:'fleet admiral'
            }
            break;
    }
    return ucwords(arr[key]);
}

function getRecruit(key, upper) {
    var arr = {
        0:"none",
        1:"delta",
        2:"temporal",
        3:"gamma"
    }
    if (upper) {
        return ucwords(arr[key]);
    } else {
        return arr[key];
    }
}

function getPSpec(key) {
    var arr = {
        0:"none",
        1:"command officer",
        2:"intelligence officer",
        3:"pilot",
        4:"temporal agent",
        5:"miracle worker"
    }
    return ucwords(arr[key]);
}

// try to lockout already selected primary spec with jquery
function getSSpec(key) {
    var arr = {
        0:"none",
        1:"command officer",
        2:"intelligence officer",
        3:"pilot",
        4:"temporal agent",
        5:"miracle worker",
        6:"strategist",
        7:"commando",
        8:"constable"
    }
    return ucwords(arr[key]);
}

function getSpecies(key) {
    arr = {
        0:'human',
        1:'alien',
        2:'andorian',
        3:'bajoran',
        4:'benzite',
        5:'betazoid',
        6:'bolian',
        7:'caitian',
        8:'cardassian',
        9:'ferasan',
        10:'ferengi',
        12:'gorn',
        13:"jem'hadar",
        14:'joined trill',
        15:'klingon',
        16:'lethean',
        17:'liberated borg human',
        18:'liberated borg klingon',
        19:'liberated borg romulan',
        20:'nausicaan',
        21:'orion',
        22:'pakled',
        23:'reman',
        24:'rigelian',
        25:'romulan',
        26:'saurian',
        27:'talaxian',
        28:'tellaite',
        29:'trill',
        30:'vulcan',
        31:'xindi',
        32:'kelpian',
        33:'borg',
        34:'breen',
        35:'android',
        36:'voth',
        37:'hologram'
    }
    return ucwords(arr[key]);
}

function getTitle(key) {
    var arr = {
        0:'',
        1:'8472 Counter-Command Agent',
        2:'Academy Graduate',
        3:'Adapted Commando',
        4:'Adjutant',
        5:'Advisor',
        6:'Advocate',
        7:'Agent',
        8:'Ambassador',
        9:'Arena Champion',
        10:'Armory Officer',
        11:'Assault Squad Officer',
        12:'Asset',
        13:'Astrometrics Scientist',
        14:'Attache',
        15:'Bartender',
        16:'Beast Master',
        17:'Biochemist',
        18:'Biologist',
        19:'Botanist',
        20:'Brute',
        21:'Career Officer',
        22:'Casualty',
        23:'Champion of the Empire',
        24:'Chef',
        25:'Chief Engineer',
        26:'Chief Medical Officer',
        27:'Chief of Security',
        28:'Chief Science Officer',
        29:'Chief Tactical Officer',
        30:'Chrononaut',
        31:'Colonial Administrator',
        32:'Colonist',
        33:'Commanding Officer',
        34:'Competetive Wargames Veteran',
        35:'Conn Officer',
        36:'Consul',
        37:'Consultant',
        38:'Corsair',
        39:'Counsellor',
        40:'Counter-Command Agent',
        41:'Courier',
        42:'Damage Control Engineer',
        43:'Deflector Officer',
        44:'Delta Alliance Operative',
        45:'Delta Operative',
        46:'Delta Quadrant Ambassador',
        47:'Delta Quadrant Explorer',
        48:'Delta Recruit',
        49:'Demolitions Expert',
        0:'Detective',
        51:'Development Lab Scientist',
        52:'Diagnostic Engineer',
        53:'Dimensional Warrior',
        54:'Diplomat',
        55:'Doctor',
        56:'Dominion War Veteran',
        57:'Dyson Joint Command Agent',
        58:'Empire Veteran',
        59:'Energy Weapons Officer',
        60:'Enforcer',
        61:'Engineer',
        62:'Entertainer',
        63:'Entrepreneur',
        64:'Envoy',
        65:'Executioner',
        66:'Executive',
        67:'Executive Officer',
        68:'Explorer',
        69:'Explosives Expert',
        70:'Fabrication Engineer',
        71:'Federation Ambassador',
        72:'Federation Recruiter',
        73:'Field Medic',
        74:'First Flight Captain',
        75:'First Officer',
        76:'Flight Deck Officer',
        77:'Friend of New Romulus',
        78:'Gamma Task Force Veteran',
        79:'Genius',
        80:'Geologist',
        81:'Governor',
        82:'Gravimetric Scientist',
        83:'Ground Warfare Specialist',
        84:'Guardian',
        85:'Gunner',
        86:'Hazard System Officer',
        87:'Helmsman',
        88:'Heretic',
        89:'Hero',
        90:'Hero of Tanagra',
        91:'Hero of the Delta Quadrant',
        92:'Hitman',
        93:'Honor Guard Commander',
        94:'Honor Guard Elite',
        95:'Honor Guard Elite Commander',
        96:'Honor Guard Initiate',
        97:'Honor Guard Recruit',
        98:'Honor Guard Specialist',
        99:'Honor Guard Veteran',
        100:'Hunter',
        101:'Iconian Resistance Elite',
        102:'Iconian War Veteran',
        103:'Imperial Recruiter',
        104:'Inventor',
        105:'KDF Cross Recipient',
        106:'Liquidator',
        107:'Lukari Restoration Initiative Veteran',
        108:'M.A.C.O. Commando',
        109:'M.A.C.O. Elite Commander',
        110:'M.A.C.O. Initiate',
        111:'M.A.C.O. Recruit',
        112:'M.A.C.O. Team Commander',
        113:'M.A.C.O. Team Specialist',
        114:'M.A.C.O. Veteran',
        115:'Magnate',
        116:'Maintenance Engineer',
        117:'Marauder',
        118:'Marshal',
        119:'Matter-Antimatter Specialist',
        120:'Medic',
        121:'Mercenary',
        122:'Miner',
        123:'Mirror Agent',
        124:'Mirror Infiltrator',
        125:'Missile Commander',
        126:'Mutineer',
        127:'Number One',
        128:'Nurse',
        129:'Officer',
        130:'Omega Force Initiate',
        131:'Omega Force Operative',
        132:'Omega Force Recruit',
        133:'Omega Force Shadow Operative',
        134:'Omega Force Veteran',
        135:'Operations Officer',
        136:'Operative',
        137:"Order of the Bat'leth",
        138:'Ornithologist',
        139:'Peacemaker',
        140:'Photonic Studies Scientist',
        141:'Pilot',
        142:'Pioneer',
        143:'Pirate',
        144:'Planet Killer Killer',
        145:'Praetor',
        146:'Prisoner',
        147:'Privateer',
        148:'Professor',
        149:'Professor of History',
        150:'Projectile Weapons Officer',
        150:'Promoter',
        151:'Quartermaster',
        152:'Raider',
        153:'Recruiter',
        154:'Red Squad',
        155:'Refugee',
        156:'Research Lab Scientist',
        157:'Researcher',
        158:'Reserve General',
        159:'Saboteur',
        160:'Science Officer',
        161:'Scientist',
        162:'Second Officer',
        163:'Security Officer',
        164:'Sensors Officer',
        165:'Shield Distribution Officer',
        166:'Silver Star Recipient',
        167:'Soldier',
        168:'Space Warfare Specialist',
        169:'Special Envoy',
        170:'Spy',
        171:'Starfleet Cross Recipient',
        172:'Starfleet Veteran',
        173:'Strategema Master',
        174:'Student of History',
        175:'Surgeon',
        176:'Surveyor',
        177:'Syndicate Boss',
        178:'Systems Engineer',
        179:'Tactical Officer',
        180:'Tactician',
        181:"Tal Shiar's Most Wanted",
        182:'Tamarian Envoy',
        183:'Task Force Omega',
        184:'Technician',
        185:'Temporal Agent',
        186:'Temporal Ambassador',
        187:'Temporal Defense Initiative Operative',
        188:'Temporal Defense Initiative Veteran',
        189:'Temporal Investigator',
        190:'Temporal Mastermind',
        191:'Terran Task Force Special Ops',
        192:'Terran Task Force Veteran',
        193:'Theorist',
        194:'Time Traveler',
        195:'Tractor Beam Officer',
        196:'Trader',
        197:'Transporter Officer',
        198:'Utopia Planitia Staff',
        199:'Veteran',
        200:'Voyager',
        201:'War Hero',
        202:'Warp Core Engineer',
        203:'Warp Theorist',
    }
    return ucwords(arr[key]);
}
