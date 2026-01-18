
import { Product, Translation } from './types';

export const TRANSLATIONS: Record<'en' | 'hi', Translation> = {
  en: {
    title: "Muskan PCO",
    subtitle: "Fast Stationery Delivery in Gonda",
    deliveryOnly: "Currently delivering only in Gonda city",
    categories: "Shop by Category",
    addToCart: "Add",
    checkout: "Checkout",
    contact: "Contact Us",
    admin: "Admin",
    uploadDoc: "Upload Document",
    services: "Our Services"
  },
  hi: {
    title: "मुस्कान पीसीओ",
    subtitle: "गोंडा में सबसे तेज़ स्टेशनरी डिलीवरी",
    deliveryOnly: "वर्तमान में केवल गोंडा शहर में डिलीवरी",
    categories: "श्रेणी के अनुसार",
    addToCart: "जोड़ें",
    checkout: "चेकआउट",
    contact: "संपर्क करें",
    admin: "एडमिन",
    uploadDoc: "दस्तावेज़ अपलोड करें",
    services: "हमारी सेवाएं"
  }
};

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Blue Gel Pen', nameHindi: 'नीला जेल पेन', price: 10, category: 'Pens', image: 'https://picsum.photos/seed/pen/300/300', description: 'Smooth writing gel pen' },
  { id: '2', name: 'A4 Register (120 pgs)', nameHindi: 'A4 रजिस्टर', price: 60, category: 'Registers', image: 'https://picsum.photos/seed/notebook/300/300', description: 'High quality A4 register' },
  { id: '3', name: 'Geometry Box', nameHindi: 'ज्यामिति बॉक्स', price: 150, category: 'School Items', image: 'https://picsum.photos/seed/geometry/300/300', description: 'Complete math set' },
  { id: '4', name: 'Camel Water Colors', nameHindi: 'वाटर कलर्स', price: 80, category: 'Art & Craft', image: 'https://picsum.photos/seed/paint/300/300', description: '12 vibrant shades' },
  { id: '5', name: 'Whiteboard Marker', nameHindi: 'व्हाइटबोर्ड मार्कर', price: 25, category: 'Office Supplies', image: 'https://picsum.photos/seed/marker/300/300', description: 'Dry erase marker' },
  { id: '6', name: 'Stapler', nameHindi: 'स्टेपलर', price: 45, category: 'Office Supplies', image: 'https://picsum.photos/seed/stapler/300/300', description: 'Medium size stapler' },
];

export const CATEGORIES = [
  { id: 'Pens', label: 'Pens', labelHindi: 'पेन', icon: '🖋️' },
  { id: 'Registers', label: 'Registers', labelHindi: 'रजिस्टर', icon: '📔' },
  { id: 'School Items', label: 'School', labelHindi: 'स्कूल', icon: '🎒' },
  { id: 'Office Supplies', label: 'Office', labelHindi: 'ऑफिस', icon: '📎' },
  { id: 'Art & Craft', label: 'Art', labelHindi: 'आर्ट', icon: '🎨' },
  { id: 'Services', label: 'Services', labelHindi: 'सेवाएं', icon: '🖨️' }
];

export const SHOP_PHONE = "+919918800690";
export const SHOP_WHATSAPP = "919794725337";
export const SHOP_MAPS_URL = "https://maps.app.goo.gl/Z3UF1YXwK3dhs8CP8";
