import request from 'umi-request';
// const API_URL = 'https://invest.purple.xyz/api/v1';
// local
const API_URL = 'https://purple-ipoffer.test/api/v1';

export async function sendMail(email, name) {
  return request(`${API_URL}/onboard/send-account-mail/${email}/${name}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  });
}
