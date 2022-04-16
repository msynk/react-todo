import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
setTimeout(() => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
});