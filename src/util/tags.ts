import { COLOR_KEYS, TAG_COLORS } from "@/constants/colors";

/**
 * 태그 이름을 기반으로 고유한 인덱스를 생성하여 일관된 색상을 반환합니다.
 */
export const getTagColor = (tagName: string): string => {
  // 값 유효성 검사
  if (!tagName) return TAG_COLORS["violet"];

  // 간단한 해시 계산 (문자열 -> 숫자)
  let hash = 0;
  for (let i = 0; i < tagName.length; i++) {
    hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
  }

  // 인덱스 추출 (0 ~ 6)
  const index = Math.abs(hash) % COLOR_KEYS.length;
  const selectedKey = COLOR_KEYS[index];

  return TAG_COLORS[selectedKey];
};
