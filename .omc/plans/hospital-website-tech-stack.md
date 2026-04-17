# 마취통증의학과 의원 병원 웹사이트 — 기술 스택 플랜

**작성일**: 2026-04-17  
**프로젝트**: 동네 소형 마취통증의학과 의원 웹사이트  
**범위**: 병원 홍보/소개 + 쉬는 날 공지 + 관리자 페이지

---

## 요구사항 요약

| 항목 | 내용 |
|------|------|
| 사이트 목적 | 병원 소개, 진료 안내, 쉬는 날 공지 |
| 관리자 기능 | 비기술직 직원도 공지 등록/수정 가능한 관리 페이지 |
| 방문자 대상 | 주변 지역 환자 (모바일 우선) |
| SEO 필요 여부 | 필수 (지역 검색 노출) |

---

## 확정 기술 스택

### Frontend
| 기술 | 버전 | 선택 이유 |
|------|------|---------|
| **Next.js** | 14+ (App Router) | SSR/SSG로 SEO 최적화, 관리자 API Route 내장 |
| **React** | 18+ | Next.js 기반 |
| **TypeScript** | 5+ | 타입 안전성, Prisma 스키마와 타입 자동 연동 |
| **Tailwind CSS** | 3+ | 빠른 스타일링, 반응형 디자인 용이 |
| **shadcn/ui** | latest | Tailwind 기반 접근성 있는 UI 컴포넌트 세트 |

### Backend / 데이터
| 기술 | 선택 이유 |
|------|---------|
| **Supabase** (PostgreSQL) | 관리형 DB, Row Level Security, 무료 티어 충분 |
| **Prisma ORM** | TypeScript 타입 자동 생성, Supabase PostgreSQL 연결 |
| **Next.js API Routes** | 별도 서버 불필요, 관리자 CRUD API 내장 처리 |

### 인증 (관리자 페이지)
| 기술 | 선택 이유 |
|------|---------|
| **Supabase Auth** | 이미 Supabase 사용 중, 추가 설정 최소화 |

### 배포
| 기술 | 선택 이유 |
|------|---------|
| **Vercel** | Next.js 공식 플랫폼, 무료 티어, CI/CD 자동화 |

---

## 프로젝트 구조 (예시)

```
hospital-website/
├── app/
│   ├── (public)/          # 방문자용 페이지
│   │   ├── page.tsx       # 메인(홈)
│   │   ├── about/         # 병원 소개
│   │   ├── services/      # 진료 안내
│   │   └── notices/       # 쉬는 날/공지 목록
│   ├── admin/             # 관리자 페이지 (인증 필요)
│   │   ├── login/
│   │   └── notices/       # 공지 등록/수정/삭제
│   └── api/
│       └── notices/       # CRUD API Routes
├── prisma/
│   └── schema.prisma      # DB 스키마 (Notice 모델 등)
├── components/            # 공용 컴포넌트
├── lib/
│   ├── prisma.ts          # Prisma 클라이언트
│   └── supabase.ts        # Supabase 클라이언트
└── middleware.ts           # 관리자 인증 미들웨어
```

---

## 핵심 데이터 모델 (Prisma)

```prisma
model Notice {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  date      DateTime
  isHoliday Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 수용 기준 (Acceptance Criteria)

- [ ] 모바일(375px) ~ 데스크탑(1440px) 반응형 렌더링 정상 동작
- [ ] Lighthouse SEO 점수 90점 이상
- [ ] 관리자 비로그인 시 `/admin/*` 접근 → 로그인 페이지 리다이렉트
- [ ] 공지 등록/수정/삭제 후 목록 페이지 즉시 반영 (ISR or revalidate)
- [ ] Vercel 배포 후 커스텀 도메인 연결 가능

---

## 리스크 및 대응

| 리스크 | 대응 |
|--------|------|
| Prisma + Supabase connection pool 초과 | `pgbouncer=true` 연결 옵션 사용 |
| 관리자 페이지 보안 취약 | Supabase Auth + middleware.ts로 서버사이드 인증 강제 |
| Vercel 무료 티어 용량 초과 | 이미지는 Supabase Storage 또는 외부 CDN 사용 |

---

## 다음 단계

1. `npx create-next-app@latest` 로 프로젝트 초기화
2. Tailwind CSS + shadcn/ui 설정
3. Supabase 프로젝트 생성 + Prisma 연결
4. 공개 페이지 레이아웃 구성 (헤더, 푸터, 메인)
5. Notice CRUD API + 관리자 페이지 구현
6. Supabase Auth 관리자 인증 적용
7. Vercel 배포 + 도메인 연결
