import http from 'k6/http';
import { sleep } from 'k6';

// I can use various parameters
// k6 run script.js 
// k6 run --vus 10 --duration 30s script.js 
// docker run --rm -i grafana/k6 run - <script.js
export const options = {
    vus: 10,
    duration: '30s',
};
export default function() {
    http.get('http://172.17.0.1');
    sleep(2);
};