module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // 서버 사이드 값을 클라이언트 사이드에 전달
    apiKey: process.env.publicApiKey || '',
    authDomain: process.env.FIREBASE_AUTH_HOST,
    projectId: process.env.projectId || '',
  },
};
