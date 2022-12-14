import http from 'k6/http';
import { sleep } from 'k6';

// I can use various parameters
// k6 run script.js 
// k6 run --vus 10 --duration 30s script.js 

export default function() {
    http.get('http://localhost');
    sleep(2);    
    http.get('http://localhost');
    sleep(2);
}