import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

console.log("Setting up mock adapter");

export function setupMocks(axiosInstance: AxiosInstance) {
  // axios 인스턴스에 MockAdapter 연결
  const mock = new MockAdapter(axiosInstance);

  console.log("Setting up mock response");

  // ID 중복 검사 모의 응답 설정
  mock.onGet("/api/check-user-id").reply((config) => {
    console.log("Intercepted request with config:", config);

    const params = new URLSearchParams(config.params);
    const userId = params.get("userId");

    console.log(`Received userId: ${userId}`);

    if (userId === "user") {
      return [200, { isValid: false }];
    } else {
      return [200, { isValid: true }];
    }
  });

  /*
  // 이메일 인증코드 발송 요청에 대한 모의 응답 설정
  mock.onPost("/api/v1/business_users/email/sendemail/").reply((config) => {
    console.log("Email send request:", config);
    return [200, { message: "Verification code sent successfully." }];
  });

  // 이메일 인증코드 검증 요청에 대한 모의 응답 설정
  mock.onPost("/api/v1/business_users/email/verifyemail/").reply((config) => {
    try {
      const data = JSON.parse(config.data);
      console.log("Email verification request:", data);

      return data.token === "123456"
        ? [200, { verified: true }]
        : [400, { verified: false, message: "Invalid code" }];
    } catch (error) {
      console.error("Error parsing data:", error);
      return [500, { message: "Internal server error" }];
    }
  });
  */
}
