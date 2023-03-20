import request from 'umi-request';

const API_URL = 'http://purple-ipoffer.test/api/v1';

export async function sendMail(body) {
  return request(`${API_URL}/onboard/send-account-mail`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify(body),
  });
}
