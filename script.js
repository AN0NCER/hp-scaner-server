const request = require('request');
const open = require('open');
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");
const parser = new XMLParser();

const ip = '192.168.31.187';

let name = null;
let status = null;
let jobstate = null;
let age = null;
let uri = null;

let opened = false;

async function Main() {
    ScannerCapabilities();
    ProductStatusDyn();
    ScannerStatus();

    setInterval(()=>{
        console.clear();
        console.log(name + ' ' + status);
        console.log(uri + ' ' + jobstate  + ' ' + age);
        if(opened == false && jobstate == 'Processing'){
            opened = true;
            open(`http://${ip}${uri}/NextDocument`);
        }

        if(jobstate == 'Completed' && opened == true){
            opened = false;
        }
    },300);
}

Main();

async function ScannerCapabilities() {
    setInterval(() => {
        request.get({
            url: `http://${ip}/eSCL/ScannerCapabilities`,
            json: false,
        }, (err, res, body) => {
            if (err) {
                return;
            }
            
            let jObj = parser.parse(body);
            name = jObj['scan:ScannerCapabilities']['pwg:MakeAndModel'];
        });
    }, 300);
}
async function ProductStatusDyn() {
    setInterval(() => {
        request.get({
            url: `http://${ip}/DevMgmt/ProductStatusDyn.xml`,
            json: false,
        }, (err, res, body) => {
            if (err) {
                return;
            }
            
            let jObj = parser.parse(body);
            status = jObj['psdyn:ProductStatusDyn']['psdyn:Status']['pscat:StatusCategory'];
        });
    }, 300);
}
async function ScannerStatus() {
    setInterval(() => {
        request.get({
            url: `http://${ip}/eSCL/ScannerStatus`,
            json: false,
        }, (err, res, body) => {
            if (err) {
                return;
            }
            
            let jObj = parser.parse(body);
            jobstate = jObj['scan:ScannerStatus']['scan:Jobs']['scan:JobInfo'][0]['pwg:JobState'];
            age = jObj['scan:ScannerStatus']['scan:Jobs']['scan:JobInfo'][0]['scan:Age'];
            uri = jObj['scan:ScannerStatus']['scan:Jobs']['scan:JobInfo'][0]['pwg:JobUri'];
        });
    }, 300);
}