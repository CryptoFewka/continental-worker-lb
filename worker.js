const NA_HOSTS = ["0.na.example.com", "1.na.example.com", "2.na.example.com"]; // North America
const SA_HOSTS = ["0.sa.example.com", "1.sa.example.com", "2.sa.example.com"]; // South America
const EU_HOSTS = ["0.eu.example.com", "1.eu.example.com", "2.eu.example.com"]; // Europe
const AF_HOSTS = ["0.af.example.com", "1.af.example.com", "2.af.example.com"]; // Africa
const AS_HOSTS = ["0.as.example.com", "1.as.example.com", "2.as.example.com"]; // Asia
const OC_HOSTS = ["0.oc.example.com", "1.oc.example.com", "2.oc.example.com"]; // Oceania
const AN_HOSTS = ["0.an.example.com", "1.an.example.com", "2.an.example.com"]; // Antarctica

// Define a default set of hosts in case the continent isn't found
const DEFAULT_HOSTS = NA_HOSTS;

// Map continent codes to their respective hosts
const CONTINENTS_MAP = {
  NA: NA_HOSTS,
  SA: SA_HOSTS,
  EU: EU_HOSTS,
  AF: AF_HOSTS,
  AS: AS_HOSTS,
  OC: OC_HOSTS,
  AN: AN_HOSTS
};

// Your country to continent mapping
const COUNTRY_TO_CONTINENT = {
    "AD": "EU",
    "AE": "AS",
    "AF": "AS",
    "AG": "NA",
    "AI": "NA",
    "AL": "EU",
    "AM": "AS",
    "AO": "AF",
    "AQ": "AN",
    "AR": "SA",
    "AS": "OC",
    "AT": "EU",
    "AU": "OC",
    "AW": "NA",
    "AX": "EU",
    "AZ": "AS",
    "BA": "EU",
    "BB": "NA",
    "BD": "AS",
    "BE": "EU",
    "BF": "AF",
    "BG": "EU",
    "BH": "AS",
    "BI": "AF",
    "BJ": "AF",
    "BL": "NA",
    "BM": "NA",
    "BN": "AS",
    "BO": "SA",
    "BQ": "NA",
    "BR": "SA",
    "BS": "NA",
    "BT": "AS",
    "BV": "AN",
    "BW": "AF",
    "BY": "EU",
    "BZ": "NA",
    "CA": "NA",
    "CC": "AS",
    "CD": "AF",
    "CF": "AF",
    "CG": "AF",
    "CH": "EU",
    "CI": "AF",
    "CK": "OC",
    "CL": "SA",
    "CM": "AF",
    "CN": "AS",
    "CO": "SA",
    "CR": "NA",
    "CU": "NA",
    "CV": "AF",
    "CW": "NA",
    "CX": "AS",
    "CY": "EU",
    "CZ": "EU",
    "DE": "EU",
    "DJ": "AF",
    "DK": "EU",
    "DM": "NA",
    "DO": "NA",
    "DZ": "AF",
    "EC": "SA",
    "EE": "EU",
    "EG": "AF",
    "EH": "AF",
    "ER": "AF",
    "ES": "EU",
    "ET": "AF",
    "FI": "EU",
    "FJ": "OC",
    "FK": "SA",
    "FM": "OC",
    "FO": "EU",
    "FR": "EU",
    "GA": "AF",
    "GB": "EU",
    "GD": "NA",
    "GE": "AS",
    "GF": "SA",
    "GG": "EU",
    "GH": "AF",
    "GI": "EU",
    "GL": "NA",
    "GM": "AF",
    "GN": "AF",
    "GP": "NA",
    "GQ": "AF",
    "GR": "EU",
    "GS": "AN",
    "GT": "NA",
    "GU": "OC",
    "GW": "AF",
    "GY": "SA",
    "HK": "AS",
    "HM": "AN",
    "HN": "NA",
    "HR": "EU",
    "HT": "NA",
    "HU": "EU",
    "ID": "AS",
    "IE": "EU",
    "IL": "AS",
    "IM": "EU",
    "IN": "AS",
    "IO": "AS",
    "IQ": "AS",
    "IR": "AS",
    "IS": "EU",
    "IT": "EU",
    "JE": "EU",
    "JM": "NA",
    "JO": "AS",
    "JP": "AS",
    "KE": "AF",
    "KG": "AS",
    "KH": "AS",
    "KI": "OC",
    "KM": "AF",
    "KN": "NA",
    "KP": "AS",
    "KR": "AS",
    "KW": "AS",
    "KY": "NA",
    "KZ": "AS",
    "LA": "AS",
    "LB": "AS",
    "LC": "NA",
    "LI": "EU",
    "LK": "AS",
    "LR": "AF",
    "LS": "AF",
    "LT": "EU",
    "LU": "EU",
    "LV": "EU",
    "LY": "AF",
    "MA": "AF",
    "MC": "EU",
    "MD": "EU",
    "ME": "EU",
    "MF": "NA",
    "MG": "AF",
    "MH": "OC",
    "MK": "EU",
    "ML": "AF",
    "MM": "AS",
    "MN": "AS",
    "MO": "AS",
    "MP": "OC",
    "MQ": "NA",
    "MR": "AF",
    "MS": "NA",
    "MT": "EU",
    "MU": "AF",
    "MV": "AS",
    "MW": "AF",
    "MX": "NA",
    "MY": "AS",
    "MZ": "AF",
    "NA": "AF",
    "NC": "OC",
    "NE": "AF",
    "NF": "OC",
    "NG": "AF",
    "NI": "NA",
    "NL": "EU",
    "NO": "EU",
    "NP": "AS",
    "NR": "OC",
    "NU": "OC",
    "NZ": "OC",
    "OM": "AS",
    "PA": "NA",
    "PE": "SA",
    "PF": "OC",
    "PG": "OC",
    "PH": "AS",
    "PK": "AS",
    "PL": "EU",
    "PM": "NA",
    "PN": "OC",
    "PR": "NA",
    "PS": "AS",
    "PT": "EU",
    "PW": "OC",
    "PY": "SA",
    "QA": "AS",
    "RE": "AF",
    "RO": "EU",
    "RS": "EU",
    "RU": "EU",
    "RW": "AF",
    "SA": "AS",
    "SB": "OC",
    "SC": "AF",
    "SD": "AF",
    "SE": "EU",
    "SG": "AS",
    "SH": "AF",
    "SI": "EU",
    "SJ": "EU",
    "SK": "EU",
    "SL": "AF",
    "SM": "EU",
    "SN": "AF",
    "SO": "AF",
    "SR": "SA",
    "SS": "AF",
    "ST": "AF",
    "SV": "NA",
    "SX": "NA",
    "SY": "AS",
    "SZ": "AF",
    "TC": "NA",
    "TD": "AF",
    "TF": "AN",
    "TG": "AF",
    "TH": "AS",
    "TJ": "AS",
    "TK": "OC",
    "TL": "OC",
    "TM": "AS",
    "TN": "AF",
    "TO": "OC",
    "TR": "AS",
    "TT": "NA",
    "TV": "OC",
    "TW": "AS",
    "TZ": "AF",
    "UA": "EU",
    "UG": "AF",
    "UM": "OC",
    "US": "NA",
    "UY": "SA",
    "UZ": "AS",
    "VA": "EU",
    "VC": "NA",
    "VE": "SA",
    "VG": "NA",
    "VI": "NA",
    "VN": "AS",
    "VU": "OC",
    "WF": "OC",
    "WS": "OC",
    "XK": "EU",
    "YE": "AS",
    "YT": "AF",
    "ZA": "AF",
    "ZM": "AF",
    "ZW": "AF"
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  var url = new URL(event.request.url);

  var countryCode = event.request.headers.get('CF-IPCountry');
  var continentCode = COUNTRY_TO_CONTINENT[countryCode];
  var hostnames = CONTINENTS_MAP[continentCode] || DEFAULT_HOSTS;

  // Randomly pick the next host
  var primary = hostnames[getRandomInt(hostnames.length)];

  var primaryUrl = new URL(url);
  primaryUrl.hostname = primary;

  // Fallback if there is no response within timeout
  const primaryPromise = fetch(primaryUrl);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      var backup;
      do {
        // Naive solution to pick a backup host
        backup = hostnames[getRandomInt(hostnames.length)];
      } while(backup === primary);

      var backupUrl = new URL(url);
      backupUrl.hostname = backup;
      resolve(fetch(backupUrl));
    }, 2000 /* 2 seconds */);
  });

  try {
    return await Promise.race([primaryPromise, timeoutPromise]);
  } catch (error) {
    // If both primary and backup fetches fail, respond with a server error
    return new Response('Server error', { status: 500 });
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
