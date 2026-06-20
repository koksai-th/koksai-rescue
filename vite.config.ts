import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'กู้ภัยกกไทร',short_name:'กกไทร',description:'ระบบแจ้งเหตุและศูนย์สั่งการกู้ภัยกกไทร',theme_color:'#b91c1c',background_color:'#fff7ed',display:'standalone',start_url:'/',icons:[{src:'/icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]}})]});
