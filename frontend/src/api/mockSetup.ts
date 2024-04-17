import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

export function setupMocks(axiosInstance: AxiosInstance) {
  const mock = new MockAdapter(axiosInstance, { onNoMatch: "passthrough" });

  mock.onPost("/api/v1/business_user/checkid/").passThrough();
  // ID 중복 검사 모의 응답 설정
  /*
  mock.onGet("/api/check-user-id").reply((config) => {
    const params = new URLSearchParams(config.params);
    const userId = params.get("userId");

    if (userId === "existingUser") {
      return [200, { isValid: false }]; // 이미 존재하는 유저 ID
    } else {
      return [200, { isValid: true }]; // 사용 가능한 유저 ID
    }
  });
  */

  // 구현된 API 경로에 대해서는 모의 응답 설정을 하지 않습니다.
  // 예시: '/api/v1/business_users/email/sendemail/' 경로는 백엔드에서 구현되었다고 가정합니다.
  // mock.onPost("/api/v1/business_users/email/sendemail/").passthrough();
  // .onNoMatch: "passthrough" 옵션은 처리되지 않은 모든 요청에 대해 실제 네트워크 요청으로 전달되도록 설정
}
