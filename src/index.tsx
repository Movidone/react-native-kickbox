import axios from 'axios';

interface KickboxResponse {
  result: 'deliverable' | 'undeliverable' | 'risky' | 'unknown';
  reason:
    | 'invalid_email'
    | 'invalid_domain'
    | 'rejected_email'
    | 'accepted_email'
    | 'low_quality'
    | 'low_deliverability'
    | 'no_connect'
    | 'timeout'
    | 'invalid_smtp'
    | 'unavailable_smtp'
    | 'unexpected_error';
  role: boolean;
  free: boolean;
  disposable: boolean;
  accept_all: boolean;
  did_you_mean: string | null;
  sendex: number;
  email: string;
  user: string;
  domain: string;
  success: boolean;
  message?: string;
}
export default class Kickbox {
  private BASE_URL = 'https://api.kickbox.com/v2';
  private apiKey: string;
  private timeout: number | undefined;

  constructor(apiKey: string, timeout?: number | undefined) {
    this.apiKey = apiKey;
    this.timeout = timeout;
  }

  async verify(email: string): Promise<KickboxResponse> {
    try {
      const url =
        this.BASE_URL + '/verify?email=' + email + '&apikey=' + this.apiKey;

      const resp = await axios.get(url, {
        timeout: this.timeout,
        validateStatus: function (status) {
          return status >= 200 && status < 500;
        },
      });

      return resp.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
