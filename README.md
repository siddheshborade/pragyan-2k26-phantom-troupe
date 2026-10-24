# SmartQuote AI

> **"AI co-pilot for MSME quotations, with human approval"**  
> *Production-ready quotation operations desk for Indian MSMEs, local workshops & manufacturers.*

---

## 🚀 Tech Stack

- **Framework**: Vite + React 18 (JavaScript)
- **Styling**: Tailwind CSS v3.4 (Strictly v3.4, NOT v4)
- **Routing**: `react-router-dom` v6
- **Database / Auth**: `@supabase/supabase-js` (PostgreSQL + RLS + persistent sessions)
- **Icons**: `lucide-react`
- **Charts**: `recharts`
- **Deployment**: Configured for Vercel with single-page app rewrite in `vercel.json`

---

## 🎨 Design System

- **Primary Green**: `#16A34A` (Hover `#15803D`, Soft `#DCFCE7`)
- **Accent Purple**: `#7C3AED` (Hover `#6D28D9`, Soft `#EDE9FE`)
- **Accent Pink**: `#EC4899` (Hover `#DB2777`, Soft `#FCE7F3`)
- **Page Background**: White with light green-tinted sections (`#F6FBF8`)
- **Text**: `#0F172A` (Primary), `#64748B` (Muted), Border `#E2E8F0`
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Component Geometry**: `rounded-xl` / `rounded-2xl`, soft shadows, 8px rhythm
- **Status Badges**:
  - `draft`: Gray (`bg-slate-100 text-slate-700`)
  - `pending_review`: Purple (`bg-[#EDE9FE] text-[#7C3AED]`)
  - `approved`: Green (`bg-[#DCFCE7] text-[#15803D]`)
  - `rejected`: Pink (`bg-[#FCE7F3] text-[#EC4899]`)

---

## 🧩 Reusable Components (`src/components`)

- `Button.jsx`: Variants (`primary`, `secondary`, `purple`, `pink`, `ghost`, `danger`, `soft-green`, `soft-purple`), sizes (`sm`, `md`, `lg`), `isLoading` spinner support.
- `Card.jsx`: `CardHeader`, `CardContent`, `CardFooter`, optional tinted mode, soft shadow.
- `Badge.jsx`: Status badge mapping for `draft`, `pending_review`, `approved`, `rejected` with indicator dots.
- `Modal.jsx`: Accessible dialog with backdrop blur, escape key listener, and animated entrance.
- `Toast.jsx`: `ToastProvider` & `useToast` hook for `toast.success`, `toast.error`, `toast.info`, `toast.warning`.
- `EmptyState.jsx`: Clean placeholder with icon, message, and action button.
- `Spinner.jsx`: Multi-size animated SVG spinner.
- `ConfirmDialog.jsx`: Confirmation modal for destructive or critical actions.
- `PageHeader.jsx`: Unified title, subtitle, icon, and right-hand action buttons.
- `SetupScreen.jsx`: Clear instructions screen when `.env.local` credentials are not yet set.

---

## 🗺️ Application Routes

| Route | Page | Description |
|---|---|---|
| `/login` | Login | Split layout: pitch gradient panel + Supabase email/password tabs & One-Click Demo |
| `/` or `/dashboard` | Dashboard | Operations KPIs, Recharts pipeline charts, and pending review approval desk |
| `/new-quotation` | New Quotation | AI RFQ Ingestion parser, line-item calculator, real-time margin guardrail |
| `/quotations` | Quotations | Register with status tabs (All, Pending Review, Approved, Draft, Rejected) |
| `/price-list` | Price List | Master MSME SKU catalog, unit costs, floor pricing, and lead-time tracker |
| `/productivity` | Productivity | Benchmark charts: Turnaround reduction (1.4h vs 26h) & margin leakage protection |
| `/calculation-validation` | Calculation & Validation | Deterministic integer paise test bench for test cases A, B, C, D |
| `/approvals` | Human Review & Approvals | Mandatory human verification desk, blocker flag gating, and digital sign-off |
| `*` | NotFound | Catch-all 404 page with return to dashboard action |

---

## 🛠️ How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Supabase (Optional for Demo Mode)
Open `.env.local` and paste your project URL and public anon key:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```
*(If left as `<paste>`, the app will display a setup guide and allow launching in full **Demo / Offline Prototype Mode** without crashing).*

### 3. Start development server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4. Build for Production
```bash
npm run build
```
Outputs optimized static assets to `/dist` with SPA routing supported by `vercel.json`.
