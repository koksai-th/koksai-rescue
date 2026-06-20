export type Role='admin'|'dispatch'|'leader'|'officer'|'public';
export type IncidentStatus='แจ้งใหม่'|'รับเรื่อง'|'กำลังออกเหตุ'|'ถึงที่เกิดเหตุ'|'ส่งโรงพยาบาล'|'ปิดเคส';
export interface Incident{id:string;code:string;type:string;detail:string;reporter:string;phone:string;lat:number;lng:number;status:IncidentStatus;assigned:string;created_at:string;image?:string}
export interface Ambulance{id:string;name:string;status:string;lat:number;lng:number;team:string;updated_at:string}
export interface Person{id:string;name:string;role:string;position:string;unit:string;phone:string;avatar?:string}
export interface Activity{id:string;title:string;date:string;kind:string;detail:string}
