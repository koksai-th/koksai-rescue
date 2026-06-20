# ระบบกู้ภัยกกไทร — Web / Android / iPhone (PWA)

โปรเจกต์นี้เป็น MVP พร้อมหน้าจอหลักครบตามรายการ ใช้งานได้ทันทีในโหมดสาธิต และเชื่อม Supabase เพื่อทำระบบออนไลน์หลายผู้ใช้ได้

## สิ่งที่มีใน ZIP
- Dashboard, แจ้งเหตุพร้อม GPS/กล้อง, ศูนย์สั่งการ, แชท, รถพยาบาล, เคส, รายงาน Excel/PDF, บุคลากร, กิจกรรม, ข่าว, เครื่องมือ และสิทธิ์ผู้ใช้
- PWA ติดตั้งบน Android/iPhone/คอมพิวเตอร์ได้
- SQL สำหรับ PostgreSQL/Supabase พร้อมตาราง, Storage, Realtime และ RLS
- Responsive UI ภาษาไทย

## เริ่มรันในเครื่อง
1. ติดตั้ง Node.js LTS
2. แตก ZIP แล้วเปิด Terminal ในโฟลเดอร์
3. รัน `npm install`
4. รัน `npm run dev`
5. เปิด `http://localhost:5173`
6. กด “เข้าโหมดสาธิต”

## ต่อฐานข้อมูล Supabase
1. สมัคร Supabase และสร้าง Project ใหม่
2. ไปที่ SQL Editor > New query
3. วางไฟล์ `supabase/schema.sql` แล้วกด Run
4. ไปที่ Project Settings > API คัดลอก Project URL และ anon public key
5. คัดลอก `.env.example` เป็น `.env.local`
6. ใส่ค่า `VITE_SUPABASE_URL` และ `VITE_SUPABASE_ANON_KEY`
7. ห้ามนำ service_role key ใส่ในเว็บเด็ดขาด
8. รัน `npm run dev` ใหม่

## เปิด Login
- Email: Authentication > Providers > Email เปิดใช้งาน
- Phone OTP: ต้องตั้ง SMS provider ซึ่งโดยทั่วไปมีค่า SMS ไม่ได้ฟรีไม่จำกัด
- Facebook: สร้าง Meta Developer App แล้วใส่ App ID/Secret ใน Authentication > Providers > Facebook
- LINE: ใช้ Custom OAuth/OIDC provider หรือทำ Edge Function เชื่อม LINE Login; ต้องสร้าง LINE Developers Channel
- หลังผู้ใช้สมัคร ให้ Admin เปลี่ยน `profiles.role` และ `approved=true` ใน Table Editor

## ขึ้นออนไลน์ฟรีด้วย Vercel
1. สร้าง GitHub repository และอัปโหลดไฟล์ทั้งหมด
2. เข้า Vercel > Add New Project > Import repository
3. Framework Preset เลือก Vite
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. เพิ่ม Environment Variables 2 ตัวจาก `.env.local`
7. Deploy แล้วนำ URL ไปใส่ใน Supabase > Authentication > URL Configuration
8. Site URL = URL ของ Vercel และเพิ่ม Redirect URL เป็น `https://โดเมนของคุณ/**`

## ติดตั้งบนโทรศัพท์
- Android: เปิด URL ด้วย Chrome > เมนู > Add to Home screen / Install app
- iPhone/iPad: เปิด URL ด้วย Safari > Share > Add to Home Screen
- วิธีนี้ไม่ต้องส่งขึ้น App Store หรือ Play Store

## จุดที่ต้องต่อ API จริงเพิ่มเติม
UI และ schema มีให้แล้ว แต่ไฟล์ตัวอย่างใช้ข้อมูลสาธิตในหลายหน้า เพื่อให้ทดสอบได้ทันที งาน production ต้องเปลี่ยนข้อมูลใน `src/lib/demo.ts` เป็น query/realtime ของ Supabase ในแต่ละหน้า, เพิ่ม server-side validation, audit logs, rate limiting, backup และการยินยอม PDPA

## ข้อจำกัดคำว่า “ฟรี”
Free tier เหมาะเริ่มต้น/ทดลอง แต่ไม่รับประกันฟรีตลอดหรือรองรับเหตุฉุกเฉินจำนวนมาก ค่า SMS OTP, โดเมน, Apple Developer/App Store, Google Play, แผนที่เชิงพาณิชย์ และปริมาณ Storage/Bandwidth ที่เกินโควตาอาจมีค่าใช้จ่าย ระบบฉุกเฉินจริงควรมี SLA, สำรองระบบ และช่องทางวิทยุ/โทรศัพท์ที่ไม่พึ่งอินเทอร์เน็ตเพียงอย่างเดียว
