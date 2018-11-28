import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1000,
  duration: '60s',
};
const numberOfRecords = 10 * 1000000;
const generateRandomProjectId = max => Math.ceil(Math.random() * max);
const projectId = generateRandomProjectId(numberOfRecords);

const url = `http://localhost:3002/api/projects/${projectId}/updates`;

export default function () {
  const res = http.get(url);
  check(res, {
    'is status 200': r => r.status === 200,
    'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  });
  sleep(1);
}
