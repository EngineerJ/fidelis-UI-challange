import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  boxTypeSeverity:string;
  boxTypeClientIP:string;
  boxTypeProtocol:string;
  boxTypeClientCountry:string;
  originalAlerts:any;
  alerts:any;
  totalAlerts:number;
  filters:string[];
  changeDetected:boolean;

  constructor(){
    this.title = '';
    this.boxTypeSeverity= '';
    this.boxTypeClientIP= '';
    this.boxTypeProtocol= '';
    this.boxTypeClientCountry= '';
    this.originalAlerts=[];
    this.alerts = [];
    this.totalAlerts=0;
    this.filters= [];
    this.changeDetected=false;
   }

   ngOnInit(){
    this.title = 'fidelis-UI-challange-app';
    this.boxTypeSeverity= 'Severity';
    this.boxTypeClientIP= 'ClientIP';
    this.boxTypeProtocol= 'Protocol';
    this.boxTypeClientCountry= 'ClientCountry';
    this.originalAlerts =  [
      {
        "AlertId": 24859,
        "AlertTime": "2018-02-26 07:59:22",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "154.224.236.156",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24860,
        "AlertTime": "2018-02-21 15:28:26",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "142.6.126.64",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24861,
        "AlertTime": "2018-02-20 19:17:57",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "231.122.227.147",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24862,
        "AlertTime": "2018-02-18 11:29:43",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "162.105.152.139",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24863,
        "AlertTime": "2018-02-17 16:47:09",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "184.52.101.138",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24864,
        "AlertTime": "2018-02-09 10:51:38",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "12.5.249.179",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24865,
        "AlertTime": "2018-02-01 20:43:10",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "80.166.230.197",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24866,
        "AlertTime": "2018-01-30 05:20:17",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "69.171.16.232",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24867,
        "AlertTime": "2018-01-23 09:07:40",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "156.241.238.11",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24868,
        "AlertTime": "2018-01-15 06:16:57",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "243.176.102.88",
        "Protocol": "TLS",
        "ClientCountry": "Australia"
      },
      {
        "AlertId": 24869,
        "AlertTime": "2018-01-13 17:46:22",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "91.154.122.64",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24870,
        "AlertTime": "2018-01-11 09:53:54",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "28.240.44.245",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24871,
        "AlertTime": "2018-01-06 04:33:27",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "73.39.0.56",
        "Protocol": "TLS",
        "ClientCountry": "Australia"
      },
      {
        "AlertId": 24872,
        "AlertTime": "2018-01-05 19:59:17",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "152.212.144.120",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24873,
        "AlertTime": "2018-01-05 13:43:58",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "249.5.74.192",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24874,
        "AlertTime": "2018-01-04 20:21:18",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "38.61.75.244",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24875,
        "AlertTime": "2017-12-30 23:18:24",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "22.245.243.16",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24876,
        "AlertTime": "2017-12-19 23:58:13",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "78.196.99.103",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24877,
        "AlertTime": "2017-12-12 14:39:46",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "104.4.25.222",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24878,
        "AlertTime": "2017-12-11 14:45:49",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "52.173.108.207",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24879,
        "AlertTime": "2017-12-08 15:18:57",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "12.35.230.237",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24880,
        "AlertTime": "2017-12-03 23:50:44",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "219.50.54.170",
        "Protocol": "FTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24881,
        "AlertTime": "2017-12-01 11:10:53",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "30.131.100.38",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24882,
        "AlertTime": "2017-11-29 17:21:25",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "179.77.4.41",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24883,
        "AlertTime": "2017-11-28 14:20:01",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "5.98.26.88",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24884,
        "AlertTime": "2017-11-22 18:37:15",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "252.233.75.92",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24885,
        "AlertTime": "2017-11-19 15:37:23",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "86.143.224.133",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24886,
        "AlertTime": "2017-11-18 04:24:42",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "230.137.125.37",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24887,
        "AlertTime": "2017-11-15 08:51:19",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "241.10.111.63",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24888,
        "AlertTime": "2017-11-14 19:12:05",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "133.117.204.100",
        "Protocol": "FTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24889,
        "AlertTime": "2017-11-03 21:45:53",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "90.129.58.11",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24890,
        "AlertTime": "2017-10-28 20:22:21",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "136.48.99.193",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24891,
        "AlertTime": "2017-10-25 14:33:12",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "230.98.254.50",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24892,
        "AlertTime": "2017-10-23 08:34:39",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "84.68.112.128",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24893,
        "AlertTime": "2017-10-11 06:24:40",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "48.112.219.141",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24894,
        "AlertTime": "2017-10-10 05:33:09",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "19.34.79.140",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24895,
        "AlertTime": "2017-10-05 07:18:47",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "253.245.51.227",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24896,
        "AlertTime": "2017-10-01 14:47:57",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "161.125.194.135",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24897,
        "AlertTime": "2017-09-22 04:20:38",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "176.37.239.39",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24898,
        "AlertTime": "2017-09-19 17:24:23",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "217.15.94.117",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24899,
        "AlertTime": "2017-09-18 02:28:32",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "173.157.77.90",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24900,
        "AlertTime": "2017-09-17 07:47:46",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "79.229.181.121",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24901,
        "AlertTime": "2017-09-15 05:48:41",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "150.51.123.10",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24902,
        "AlertTime": "2017-09-14 03:30:00",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "244.157.216.121",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24903,
        "AlertTime": "2017-09-07 02:27:37",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "0.134.161.79",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24904,
        "AlertTime": "2017-09-06 08:04:17",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "106.173.47.247",
        "Protocol": "SMTP",
        "ClientCountry": "Australia"
      },
      {
        "AlertId": 24905,
        "AlertTime": "2017-09-01 18:40:23",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "191.76.169.255",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24906,
        "AlertTime": "2017-08-30 22:10:30",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "240.143.31.185",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24907,
        "AlertTime": "2017-08-27 15:52:34",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "101.190.131.178",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24908,
        "AlertTime": "2017-08-27 10:20:40",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "164.218.114.86",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24909,
        "AlertTime": "2017-08-24 12:05:06",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "213.15.242.63",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24910,
        "AlertTime": "2017-08-21 01:43:33",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "130.217.149.97",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24911,
        "AlertTime": "2017-08-19 23:38:08",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "176.41.159.162",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24912,
        "AlertTime": "2017-08-15 23:11:46",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "119.255.47.68",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24913,
        "AlertTime": "2017-08-15 12:50:02",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "154.250.136.82",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24914,
        "AlertTime": "2017-08-15 09:05:28",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "5.29.5.74",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24915,
        "AlertTime": "2017-08-10 20:27:56",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "190.220.240.149",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24916,
        "AlertTime": "2017-08-07 20:22:37",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "62.28.204.46",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24917,
        "AlertTime": "2017-08-05 16:59:03",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "83.44.232.252",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24918,
        "AlertTime": "2017-08-05 02:02:04",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "200.9.104.109",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24919,
        "AlertTime": "2017-08-02 10:45:00",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "160.5.169.174",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24920,
        "AlertTime": "2017-08-01 11:08:31",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "203.206.197.156",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24921,
        "AlertTime": "2017-07-28 15:42:07",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "63.129.200.243",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24922,
        "AlertTime": "2017-07-25 01:50:24",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "125.248.86.231",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24923,
        "AlertTime": "2017-07-24 07:43:23",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "23.178.128.206",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24924,
        "AlertTime": "2017-07-11 16:40:58",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "146.210.155.110",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24925,
        "AlertTime": "2017-07-09 05:32:40",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "120.254.190.164",
        "Protocol": "TLS",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24926,
        "AlertTime": "2017-07-05 13:32:16",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "29.190.129.162",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24927,
        "AlertTime": "2017-06-30 05:34:12",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "197.56.42.251",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24928,
        "AlertTime": "2017-06-29 20:52:49",
        "Severity": "High",
        "ClientIP": "155.175.121.134",
        "ServerIP": "255.157.225.215",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24929,
        "AlertTime": "2017-06-20 20:10:17",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "153.8.21.105",
        "Protocol": "TLS",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24930,
        "AlertTime": "2017-06-19 04:39:16",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "237.101.238.128",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24931,
        "AlertTime": "2017-06-18 22:21:30",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "152.254.142.136",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24932,
        "AlertTime": "2017-06-18 13:20:35",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "158.81.16.91",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24933,
        "AlertTime": "2017-06-15 08:05:22",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "233.16.89.62",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24934,
        "AlertTime": "2017-06-07 19:42:28",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "27.58.41.62",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24935,
        "AlertTime": "2017-06-06 11:58:44",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "134.246.22.66",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24936,
        "AlertTime": "2017-06-04 15:04:45",
        "Severity": "Medium",
        "ClientIP": "155.175.121.134",
        "ServerIP": "93.48.233.225",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24937,
        "AlertTime": "2017-05-31 00:06:50",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "135.87.182.1",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24938,
        "AlertTime": "2017-05-27 18:16:19",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "84.34.192.87",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24939,
        "AlertTime": "2017-05-27 11:32:30",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "110.117.213.175",
        "Protocol": "FTP",
        "ClientCountry": "Germany"
      },
      {
        "AlertId": 24940,
        "AlertTime": "2017-05-27 00:02:10",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "234.13.144.164",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24941,
        "AlertTime": "2017-05-22 03:43:46",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "36.90.255.211",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24942,
        "AlertTime": "2017-05-21 01:31:08",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "146.43.162.243",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24943,
        "AlertTime": "2017-05-17 15:37:57",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "104.62.233.72",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24944,
        "AlertTime": "2017-05-13 03:35:34",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "64.249.97.176",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24945,
        "AlertTime": "2017-04-24 22:31:46",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "53.198.10.201",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24946,
        "AlertTime": "2017-04-21 05:21:06",
        "Severity": "Low",
        "ClientIP": "66.78.200.140",
        "ServerIP": "64.125.162.115",
        "Protocol": "FTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24947,
        "AlertTime": "2017-04-20 02:11:58",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "44.127.13.36",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24948,
        "AlertTime": "2017-04-03 06:36:50",
        "Severity": "High",
        "ClientIP": "43.172.24.178",
        "ServerIP": "20.191.122.251",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24949,
        "AlertTime": "2017-04-02 15:41:40",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "21.140.103.32",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24950,
        "AlertTime": "2017-03-31 19:56:53",
        "Severity": "Medium",
        "ClientIP": "43.172.24.178",
        "ServerIP": "212.32.127.26",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24951,
        "AlertTime": "2017-03-28 00:30:53",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "135.51.115.15",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24952,
        "AlertTime": "2017-03-23 03:31:12",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "162.200.157.71",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24953,
        "AlertTime": "2017-03-22 10:00:52",
        "Severity": "Low",
        "ClientIP": "43.172.24.178",
        "ServerIP": "170.74.151.55",
        "Protocol": "TLS",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24954,
        "AlertTime": "2017-03-19 09:30:31",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "158.23.89.250",
        "Protocol": "FTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24955,
        "AlertTime": "2017-03-18 07:41:10",
        "Severity": "High",
        "ClientIP": "66.78.200.140",
        "ServerIP": "213.188.151.109",
        "Protocol": "SMTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24956,
        "AlertTime": "2017-03-15 01:29:29",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "88.116.2.62",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      },
      {
        "AlertId": 24957,
        "AlertTime": "2017-03-10 01:02:11",
        "Severity": "Medium",
        "ClientIP": "97.28.36.120",
        "ServerIP": "250.97.71.15",
        "Protocol": "HTTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24958,
        "AlertTime": "2017-03-06 23:04:48",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "75.148.198.81",
        "Protocol": "HTTP",
        "ClientCountry": "United States"
      }
     ];
     this.alerts=this.originalAlerts;
     this.totalAlerts=this.alerts.length;
  }

  savefilters(filters:string[]){
    this.filters = this.getUniqueFilters(this.filters,filters);
    this.filters.forEach(element => {
      this.alerts=this.originalAlerts.filter((alert:any) => Object.values(alert).indexOf(element) > -1)
    });
    console.log(this.alerts.length);
    console.log(this.alerts);
    this.totalAlerts=this.alerts.length;
  }

  getUniqueFilters(existingFilters:string[],newFilters:string[]){
    return Array.from(new Set(Object.assign([],existingFilters.concat(newFilters))));
  }

  resetFilters(filters:string[]){
    this.filters=[];
    console.log(this.filters);
    this.alerts=this.originalAlerts;
    this.totalAlerts=this.alerts.length;
  }

}
