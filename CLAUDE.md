@AGENTS.md

# 프로젝트 규칙

## 기술 스택
- **Next.js 16** (App Router) — `node_modules/next/dist/docs/` 를 반드시 먼저 읽고 코드 작성
- **React 19**, **TypeScript 5**, **Tailwind CSS 4**, **shadcn/ui**
- **Supabase** (PostgreSQL + Auth), **Prisma ORM 7**, **Vercel** 배포
- 패키지 매니저: **pnpm** (npm/yarn 금지)

## 아키텍처: Feature-Sliced Design (FSD)

```
src/
├── app/          # Next.js App Router — 라우팅 전용 (thin wrappers)
├── pages/        # FSD pages — 페이지 조합 레이어
├── widgets/      # FSD widgets — 독립적 UI 블록 (Header, Footer 등)
├── features/     # FSD features — 사용자 인터랙션 단위
├── entities/     # FSD entities — 비즈니스 엔티티 (notice 등)
└── shared/       # FSD shared — 공용 코드
    ├── ui/       # shadcn/ui 컴포넌트
    ├── lib/      # prisma.ts, supabase.ts, supabase-server.ts, utils.ts
    ├── api/      # API 클라이언트
    ├── config/   # 설정값
    └── types/    # 공용 TypeScript 타입
```

### FSD 레이어 의존성 규칙 (위 → 아래만 허용)
```
app → pages → widgets → features → entities → shared
```
- 같은 레이어 간 직접 import 금지
- 하위 레이어가 상위 레이어를 import 금지

### Import 경로 alias
```ts
@/*          → src/*
@app/*       → src/app/*
@pages/*     → src/pages/*
@widgets/*   → src/widgets/*
@features/*  → src/features/*
@entities/*  → src/entities/*
@shared/*    → src/shared/*
```

## 코딩 규칙

### 파일/폴더 구조
- 각 FSD 슬라이스는 `index.ts`로 퍼블릭 API 노출 (내부 구현 숨김)
- `src/app/` 안의 route 파일은 최대한 얇게 유지 — 로직은 하위 레이어에 위임

### Supabase Auth (관리자)
- 서버 컴포넌트/Route Handler: `@shared/lib/supabase-server.ts`의 `createClient()` 사용
- 클라이언트 컴포넌트: `@shared/lib/supabase.ts`의 `createClient()` 사용
- `/admin/*` 보호: `middleware.ts` (프로젝트 루트)에서 Supabase 세션 확인

### Prisma
- 싱글톤 클라이언트: `@shared/lib/prisma.ts`에서 import
- Supabase connection pooling: `DATABASE_URL`에 `?pgbouncer=true` 설정
- `DIRECT_URL`은 마이그레이션 전용

### 데이터 패칭
- 공개 페이지: Server Component에서 직접 Prisma 또는 Supabase fetch
- 관리자 CRUD: `src/app/api/` Route Handler 사용
- 변경 후 갱신: `revalidatePath()` 또는 `revalidateTag()` 사용

### UI 컴포넌트
- shadcn 컴포넌트 추가: `pnpm dlx shadcn@latest add <component>`
- 커스텀 컴포넌트: `src/shared/ui/` 에 배치
- 페이지별 전용 컴포넌트: 해당 FSD 슬라이스 내에 배치

## 환경 변수
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=          # Supabase pooler URL (pgbouncer=true)
DIRECT_URL=            # Supabase direct URL (마이그레이션용)
```
