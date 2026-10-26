// ==================== CURRENCIES WITH FLAGS ====================
const currencies = [
  {code:'SAR', symbol:'ر.س', name:'ريال سعودي', flag:'🇸', country:'SA'},
  {code:'AED', symbol:'د.إ', name:'درهم إماراتي', flag:'🇦🇪', country:'AE'},
  {code:'KWD', symbol:'د.ك', name:'دينار كويتي', flag:'🇰🇼', country:'KW'},
  {code:'QAR', symbol:'ر.ق', name:'ريال قطري', flag:'🇶🇦', country:'QA'},
  {code:'BHD', symbol:'د.ب', name:'دينار بحريني', flag:'🇧🇭', country:'BH'},
  {code:'OMR', symbol:'ر.ع', name:'ريال عماني', flag:'🇴🇲', country:'OM'},
  {code:'EGP', symbol:'ج.م', name:'جنيه مصري', flag:'🇬', country:'EG'},
  {code:'JOD', symbol:'د.أ', name:'دينار أردني', flag:'🇯🇴', country:'JO'},
  {code:'MAD', symbol:'د.م', name:'درهم مغربي', flag:'🇲🇦', country:'MA'},
  {code:'TND', symbol:'د.ت', name:'دينار تونسي', flag:'🇹🇳', country:'TN'},
  {code:'DZD', symbol:'د.ج', name:'دينار جزائري', flag:'🇩🇿', country:'DZ'},
  {code:'LYD', symbol:'د.ل', name:'دينار ليبي', flag:'🇱🇾', country:'LY'},
  {code:'SDG', symbol:'ج.س', name:'جنيه سوداني', flag:'🇸🇩', country:'SD'},
  {code:'IQD', symbol:'ع.د', name:'دينار عراقي', flag:'🇮🇶', country:'IQ'},
  {code:'LBP', symbol:'ل.ل', name:'ليرة لبنانية', flag:'🇱🇧', country:'LB'},
  {code:'SYP', symbol:'ل.س', name:'ليرة سورية', flag:'🇸🇾', country:'SY'},
  {code:'YER', symbol:'ر.ي', name:'ريال يمني', flag:'🇾', country:'YE'},
  {code:'USD', symbol:'$', name:'دولار أمريكي', flag:'🇺🇸', country:'US'},
  {code:'EUR', symbol:'€', name:'يورو', flag:'🇪🇺', country:'EU'},
  {code:'GBP', symbol:'£', name:'جنيه إسترليني', flag:'🇧', country:'GB'},
  {code:'JPY', symbol:'¥', name:'ين ياباني', flag:'🇯', country:'JP'},
  {code:'CNY', symbol:'¥', name:'يوان صيني', flag:'🇨🇳', country:'CN'},
  {code:'TRY', symbol:'', name:'ليرة تركية', flag:'🇷', country:'TR'},
  {code:'INR', symbol:'₹', name:'روبية هندية', flag:'🇮', country:'IN'},
  {code:'PKR', symbol:'₨', name:'روبية باكستانية', flag:'🇵', country:'PK'},
  {code:'BDT', symbol:'৳', name:'تاكا بنغلاديشي', flag:'🇧🇩', country:'BD'},
  {code:'IDR', symbol:'Rp', name:'روبية إندونيسية', flag:'🇮', country:'ID'},
  {code:'MYR', symbol:'RM', name:'رينغيت ماليزي', flag:'🇲🇾', country:'MY'},
  {code:'SGD', symbol:'S$', name:'دولار سنغافوري', flag:'🇸', country:'SG'},
  {code:'AUD', symbol:'A$', name:'دولار أسترالي', flag:'🇦🇺', country:'AU'},
  {code:'CAD', symbol:'C$', name:'دولار كندي', flag:'🇨🇦', country:'CA'},
  {code:'BRL', symbol:'R$', name:'ريال برازيلي', flag:'🇷', country:'BR'},
  {code:'MXN', symbol:'$', name:'بيزو مكسيكي', flag:'🇲', country:'MX'},
  {code:'ZAR', symbol:'R', name:'راند جنوب أفريقي', flag:'🇿🇦', country:'ZA'},
  {code:'NGN', symbol:'₦', name:'نايرا نيجيري', flag:'🇳🇬', country:'NG'},
  {code:'KES', symbol:'KSh', name:'شلن كيني', flag:'🇪', country:'KE'},
  {code:'RUB', symbol:'₽', name:'روبل روسي', flag:'🇷', country:'RU'},
  {code:'UAH', symbol:'₴', name:'هريفنا أوكرانية', flag:'🇺🇦', country:'UA'},
  {code:'PLN', symbol:'zł', name:'زلوتي بولندي', flag:'🇵🇱', country:'PL'},
  {code:'CHF', symbol:'CHF', name:'فرنك سويسري', flag:'🇨🇭', country:'CH'},
  {code:'KRW', symbol:'₩', name:'وون كوري', flag:'🇰', country:'KR'},
  {code:'THB', symbol:'฿', name:'بات تايلاندي', flag:'🇹🇭', country:'TH'},
  {code:'VND', symbol:'₫', name:'دونغ فيتنامي', flag:'🇻🇳', country:'VN'},
  {code:'PHP', symbol:'₱', name:'بيزو فلبيني', flag:'🇭', country:'PH'},
  {code:'ILS', symbol:'₪', name:'شيكل إسرائيلي', flag:'🇮', country:'IL'},
  {code:'MGA', symbol:'Ar', name:'أرياري مدغشقري', flag:'🇲', country:'MG'},
  {code:'XOF', symbol:'CFA', name:'فرنك غرب أفريقي', flag:'🌍', country:'XO'},
  {code:'XAF', symbol:'FCFA', name:'فرنك وسط أفريقي', flag:'🌍', country:'XA'},
  {code:'NZD', symbol:'NZ$', name:'دولار نيوزلندي', flag:'🇳', country:'NZ'},
];

// ==================== TRANSLATIONS ====================
const translations = {
  ar: {
    appName: 'نظام الفواتير',
    dashboardLabel: 'لوحة التحكم',
    dashboardTitle: 'إدارة شاملة لفواتيرك',
    dashboardDesc: 'أنشئ فواتير أولية، متقدمة، نهائية أو تسوية بتصميم احترافي وشاركها عبر البريد أو الواتساب أو PDF بنقرة واحدة',
    statInvoices: 'الفواتير', statBilled: 'المبلغ المفوتر', statAdvances: 'المدفوعات المقدمة', statProformas: 'الفواتير الأولية',
    typeProforma: 'فاتورة أولية', typeProformaDesc: 'عرض سعر / عرض تجاري بدون قيمة محاسبية',
    typeAvance: 'فاتورة مقدمة', typeAvanceDesc: 'فاتورة دفعة مقدمة: المبلغ المدفوع مسبقاً من العميل',
    typeSolde: 'فاتورة تسوية', typeSoldeDesc: 'المبلغ المتبقي بعد دفع الدفعة المقدمة',
    typeDefinitive: 'فاتورة نهائية', typeDefinitiveDesc: 'الفاتورة النهائية التي تلخص كامل الخدمة',
    typeSimple: 'فاتورة', typeSimpleDesc: 'فاتورة بسيطة قياسية',
    documents: 'مستند(ات)', invoicesList: 'الفواتير', filterAll: 'الكل',
    sectionInvoice: 'معلومات الفاتورة', sectionClient: 'بيانات العميل', sectionItems: 'بنود الفاتورة',
    invoiceNumber: 'رقم الفاتورة', invoiceDate: 'التاريخ', invoiceTime: 'الوقت', dueDate: 'تاريخ الاستحقاق',
    clientName: 'اسم العميل', clientPhone: 'الهاتف', clientEmail: 'البريد الإلكتروني', clientAddress: 'العنوان',
    itemDesc: 'الوصف', itemQty: 'الكمية', itemPrice: 'السعر', itemTotal: 'الإجمالي',
    addItem: 'إضافة بند', subtotal: 'المجموع الفرعي:', discount: 'الخصم:', tax: 'الضريبة:', grandTotal: 'الإجمالي النهائي:',
    percent: '%', fixed: 'مبلغ', notes: 'ملاحظات', cancel: 'إلغاء', save: 'حفظ',
    viewInvoice: 'عرض الفاتورة', sendEmail: 'إرسال بالبريد', sendWhatsApp: 'إرسال واتساب',
    downloadPDF: 'تحميل PDF', print: 'طباعة', edit: 'تعديل', delete: 'حذف',
    confirmDelete: 'تأكيد الحذف', deleteMessage: 'هل أنت متأكد من حذف هذه الفاتورة؟', confirmDeleteBtn: 'نعم، احذف',
    createFirst: 'إنشاء أول فاتورة', noInvoices: 'لا توجد فواتير حتى الآن', noResults: 'لا توجد نتائج',
    invoice: 'فاتورة', from: 'من', to: 'إلى', due: 'الاستحقاق', total: 'المجموع',
    taxLabel: 'الضريبة', discountLabel: 'الخصم', finalTotal: 'الإجمالي النهائي',
    newInvoice: 'فاتورة جديدة', editInvoice: 'تعديل فاتورة', view: 'عرض',
    emailSubject: 'فاتورة جديدة', emailBody: 'مرحباً،\n\nمرفق فاتورة جديدة رقم',
    whatsappMsg: 'مرحباً، إليك فاتورة جديدة',
    saved: 'تم الحفظ بنجاح', updated: 'تم التحديث بنجاح', deleted: 'تم الحذف بنجاح',
    fillRequired: 'الرجاء ملء الحقول المطلوبة', addItemRequired: 'الرجاء إضافة بند واحد على الأقل',
    proforma: 'أولية', avance: 'مقدمة', solde: 'تسوية', definitive: 'نهائية', simple: 'بسيطة',
    settingsTitle: 'إعدادات الشركة', settingsSubtitle: 'تظهر هذه المعلومات على جميع الفواتير وملفات PDF المولدة',
    companyIdentity: '🏢 هوية الشركة', companyName: 'الاسم التجاري', phones: 'الهواتف',
    email: 'البريد الإلكتروني', address: 'العنوان',
    brandingSettings: ' الشعار والعملة والتوقيع', logo: 'الشعار (Logo)',
    chooseImage: '📷 اختر صورة', removeLogo: 'إزالة الشعار', currency: 'العملة الافتراضية', signatory: 'الموقع / التوقيع',
    communicationSettings: '📱 الواتساب ووسائل التواصل', whatsappNumber: 'رقم الواتساب',
    defaultConditions: ' الشروط الافتراضية', conditions: 'شروط الفاتورة',
    defaultTaxRate: 'نسبة الضريبة الافتراضية (%)', paymentTerms: 'شروط الدفع', invoiceFooter: 'تذييل الفاتورة',
    headerPreview: '👁️ معاينة الترويسة', previewPlaceholder: 'ابدأ بملء البيانات لرؤية المعاينة',
    settingsSaved: 'تم حفظ الإعدادات بنجاح', companyInfo: 'معلومات الشركة', clientInfo: 'معلومات العميل',
    items: 'البنود', printTitle: 'فاتورة', printDashboard: 'طباعة القائمة',
    archiveTitle: 'أرشيف الفواتير حسب السنة', hideArchive: 'إخفاء', showArchive: 'إظهار',
    allYears: 'جميع السنوات', year: 'سنة', invoices: 'فاتورة', totalAmount: 'المجموع',
    createdAt: 'تاريخ الإنشاء', updatedAt: 'آخر تحديث',
  },
  fr: {
    appName: 'Système de Facturation',
    dashboardLabel: 'TABLEAU DE BORD',
    dashboardTitle: 'Gestion complète de vos factures',
    dashboardDesc: 'Créez des factures proforma, d\'avance, de solde ou définitives au format de votre charte graphique, puis exportez-les en PDF en un clic.',
    statInvoices: 'FACTURES', statBilled: 'MONTANT FACTURÉ', statAdvances: 'AVANCES ENCAISSÉES', statProformas: 'PROFORMAS',
    typeProforma: 'Facture Proforma', typeProformaDesc: 'Devis / offre commerciale sans valeur comptable.',
    typeAvance: 'Facture Avance', typeAvanceDesc: 'Facture d\'acompte : montant avancé par le client.',
    typeSolde: 'Facture Solde', typeSoldeDesc: 'Reste à payer après le versement de l\'avance.',
    typeDefinitive: 'Facture Définitive', typeDefinitiveDesc: 'Facture finale récapitulant toute la prestation.',
    typeSimple: 'Facture', typeSimpleDesc: 'Facture simple standard.',
    documents: 'document(s)', invoicesList: 'Factures', filterAll: 'Toutes',
    sectionInvoice: 'Informations facture', sectionClient: 'Informations client', sectionItems: 'Articles',
    invoiceNumber: 'Numéro de facture', invoiceDate: 'Date', invoiceTime: 'Heure', dueDate: 'Date d\'échéance',
    clientName: 'Nom du client', clientPhone: 'Téléphone', clientEmail: 'Email', clientAddress: 'Adresse',
    itemDesc: 'Description', itemQty: 'Quantité', itemPrice: 'Prix unitaire', itemTotal: 'Total',
    addItem: 'Ajouter un article', subtotal: 'Sous-total:', discount: 'Remise:', tax: 'TVA:', grandTotal: 'Total TTC:',
    percent: '%', fixed: 'Montant', notes: 'Notes', cancel: 'Annuler', save: 'Enregistrer',
    viewInvoice: 'Voir la facture', sendEmail: 'Envoyer par email', sendWhatsApp: 'Envoyer WhatsApp',
    downloadPDF: 'Télécharger PDF', print: 'Imprimer', edit: 'Modifier', delete: 'Supprimer',
    confirmDelete: 'Confirmer la suppression', deleteMessage: 'Êtes-vous sûr de vouloir supprimer cette facture ?', confirmDeleteBtn: 'Oui, supprimer',
    createFirst: 'Créer ma première facture', noInvoices: 'Aucune facture pour le moment.', noResults: 'Aucun résultat',
    invoice: 'Facture', from: 'De', to: 'À', due: 'Échéance', total: 'Total',
    taxLabel: 'TVA', discountLabel: 'Remise', finalTotal: 'Total TTC',
    newInvoice: 'Nouvelle facture', editInvoice: 'Modifier la facture', view: 'Voir',
    emailSubject: 'Nouvelle facture', emailBody: 'Bonjour,\n\nVeuillez trouver ci-joint une nouvelle facture numéro',
    whatsappMsg: 'Bonjour, voici une nouvelle facture',
    saved: 'Enregistré avec succès', updated: 'Mis à jour avec succès', deleted: 'Supprimé avec succès',
    fillRequired: 'Veuillez remplir les champs obligatoires', addItemRequired: 'Veuillez ajouter au moins un article',
    proforma: 'Proforma', avance: 'Avance', solde: 'Solde', definitive: 'Définitive', simple: 'Simple',
    settingsTitle: 'Paramètres de l\'entreprise', settingsSubtitle: 'Ces informations apparaissent sur toutes les factures et les PDF générés.',
    companyIdentity: 'IDENTITÉ DE L\'ENTREPRISE', companyName: 'Raison sociale', phones: 'Téléphones',
    email: 'Email', address: 'Adresse',
    brandingSettings: 'LOGO, DEVISE & SIGNATAIRE', logo: 'Logo',
    chooseImage: '📷 Choisir une image', removeLogo: 'Supprimer le logo', currency: 'Devise par défaut', signatory: 'Signataire',
    communicationSettings: 'WHATSAPP & RÉSEAUX SOCIAUX', whatsappNumber: 'Numéro WhatsApp',
    defaultConditions: 'CONDITIONS PAR DÉFAUT', conditions: 'Conditions',
    defaultTaxRate: 'Taux de TVA par défaut (%)', paymentTerms: 'Conditions de paiement', invoiceFooter: 'Pied de page facture',
    headerPreview: 'APERÇU EN-TÊTE', previewPlaceholder: 'Commencez à remplir les données pour voir l\'aperçu',
    settingsSaved: 'Paramètres enregistrés avec succès', companyInfo: 'Infos entreprise', clientInfo: 'Infos client',
    items: 'Articles', printTitle: 'Facture', printDashboard: 'Imprimer la liste',
    archiveTitle: 'Archive des factures par année', hideArchive: 'Masquer', showArchive: 'Afficher',
    allYears: 'Toutes les années', year: 'Année', invoices: 'factures', totalAmount: 'Montant total',
    createdAt: 'Créé le', updatedAt: 'Dernière modification',
  },
  en: {
    appName: 'Invoice System',
    dashboardLabel: 'DASHBOARD',
    dashboardTitle: 'Complete Invoice Management',
    dashboardDesc: 'Create proforma, advance, final or balance invoices with professional design and share them via email, WhatsApp or PDF with one click.',
    statInvoices: 'INVOICES', statBilled: 'BILLED AMOUNT', statAdvances: 'ADVANCES RECEIVED', statProformas: 'PROFORMAS',
    typeProforma: 'Proforma Invoice', typeProformaDesc: 'Quotation / commercial offer without accounting value.',
    typeAvance: 'Advance Invoice', typeAvanceDesc: 'Advance payment invoice: amount prepaid by client.',
    typeSolde: 'Balance Invoice', typeSoldeDesc: 'Remaining amount after advance payment.',
    typeDefinitive: 'Final Invoice', typeDefinitiveDesc: 'Final invoice summarizing the entire service.',
    typeSimple: 'Invoice', typeSimpleDesc: 'Standard simple invoice.',
    documents: 'document(s)', invoicesList: 'Invoices', filterAll: 'All',
    sectionInvoice: 'Invoice Information', sectionClient: 'Client Information', sectionItems: 'Invoice Items',
    invoiceNumber: 'Invoice Number', invoiceDate: 'Date', invoiceTime: 'Time', dueDate: 'Due Date',
    clientName: 'Client Name', clientPhone: 'Phone', clientEmail: 'Email', clientAddress: 'Address',
    itemDesc: 'Description', itemQty: 'Quantity', itemPrice: 'Unit Price', itemTotal: 'Total',
    addItem: 'Add Item', subtotal: 'Subtotal:', discount: 'Discount:', tax: 'Tax:', grandTotal: 'Grand Total:',
    percent: '%', fixed: 'Amount', notes: 'Notes', cancel: 'Cancel', save: 'Save',
    viewInvoice: 'View Invoice', sendEmail: 'Send by Email', sendWhatsApp: 'Send via WhatsApp',
    downloadPDF: 'Download PDF', print: 'Print', edit: 'Edit', delete: 'Delete',
    confirmDelete: 'Confirm Deletion', deleteMessage: 'Are you sure you want to delete this invoice?', confirmDeleteBtn: 'Yes, delete',
    createFirst: 'Create my first invoice', noInvoices: 'No invoices yet.', noResults: 'No results',
    invoice: 'Invoice', from: 'From', to: 'To', due: 'Due', total: 'Total',
    taxLabel: 'Tax', discountLabel: 'Discount', finalTotal: 'Grand Total',
    newInvoice: 'New Invoice', editInvoice: 'Edit Invoice', view: 'View',
    emailSubject: 'New Invoice', emailBody: 'Hello,\n\nPlease find attached a new invoice number',
    whatsappMsg: 'Hello, here is a new invoice',
    saved: 'Saved successfully', updated: 'Updated successfully', deleted: 'Deleted successfully',
    fillRequired: 'Please fill required fields', addItemRequired: 'Please add at least one item',
    proforma: 'Proforma', avance: 'Advance', solde: 'Balance', definitive: 'Final', simple: 'Simple',
    settingsTitle: 'Company Settings', settingsSubtitle: 'This information appears on all invoices and generated PDFs.',
    companyIdentity: 'COMPANY IDENTITY', companyName: 'Company Name', phones: 'Phones',
    email: 'Email', address: 'Address',
    brandingSettings: 'LOGO, CURRENCY & SIGNATORY', logo: 'Logo',
    chooseImage: '📷 Choose an image', removeLogo: 'Remove logo', currency: 'Default currency', signatory: 'Signatory',
    communicationSettings: 'WHATSAPP & SOCIAL MEDIA', whatsappNumber: 'WhatsApp Number',
    defaultConditions: 'DEFAULT CONDITIONS', conditions: 'Invoice conditions',
    defaultTaxRate: 'Default tax rate (%)', paymentTerms: 'Payment terms', invoiceFooter: 'Invoice footer',
    headerPreview: 'HEADER PREVIEW', previewPlaceholder: 'Start filling data to see the preview',
    settingsSaved: 'Settings saved successfully', companyInfo: 'Company Info', clientInfo: 'Client Info',
    items: 'Items', printTitle: 'Invoice', printDashboard: 'Print List',
    archiveTitle: 'Invoice Archive by Year', hideArchive: 'Hide', showArchive: 'Show',
    allYears: 'All Years', year: 'Year', invoices: 'invoices', totalAmount: 'Total Amount',
    createdAt: 'Created at', updatedAt: 'Last updated',
  }
};

// ==================== STATE ====================
let state = {
  lang: localStorage.getItem('lang') || 'ar',
  currency: localStorage.getItem('currency') || 'SAR',
  theme: localStorage.getItem('theme') || 'light',
  invoices: JSON.parse(localStorage.getItem('invoices') || '[]'),
  settings: JSON.parse(localStorage.getItem('companySettings') || '{}'),
  currentFilter: 'all',
  currentYearFilter: 'all',
  currentViewId: null,
  items: [],
  archiveVisible: true,
};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  initCurrencySelects();
  applyLanguage(state.lang);
  applyTheme(state.theme);
  document.getElementById('langSelect').value = state.lang;
  document.getElementById('currencySelect').value = state.currency;
  loadSettingsToForm();
  startClock();
  renderAll();
});

function initCurrencySelects() {
  const options = currencies.map(c => 
    `<option value="${c.code}" data-flag="${c.flag}">${c.flag} ${c.code} - ${c.name}</option>`
  ).join('');
  document.getElementById('currencySelect').innerHTML = options;
  document.getElementById('s_currency').innerHTML = options;
}

// ==================== CLOCK ====================
function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const locale = state.lang === 'ar' ? 'ar-EG' : (state.lang === 'fr' ? 'fr-FR' : 'en-US');
  
  const dateStr = now.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const timeStr = now.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  document.getElementById('currentDate').textContent = `📅 ${dateStr}`;
  document.getElementById('currentTime').textContent = `🕐 ${timeStr}`;
}

// ==================== LANGUAGE ====================
function changeLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
  updateClock();
  renderAll();
}

function applyLanguage(lang) {
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

function t(key) { return translations[state.lang][key] || key; }

// ==================== THEME ====================
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', state.theme);
  applyTheme(state.theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeBtn').textContent = theme === 'light' ? '🌙' : '☀️';
}

// ==================== CURRENCY ====================
function changeCurrency(code) {
  state.currency = code;
  localStorage.setItem('currency', code);
  document.getElementById('currencySelect').value = code;
  document.getElementById('s_currency').value = code;
  renderAll();
}

function getCurrency() { return currencies.find(c => c.code === state.currency) || currencies[0]; }

function formatMoney(amount) {
  const cur = getCurrency();
  const num = parseFloat(amount) || 0;
  const formatted = num.toLocaleString(state.lang === 'ar' ? 'ar-SA' : (state.lang === 'fr' ? 'fr-FR' : 'en-US'), {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  });
  return `${formatted} ${cur.symbol}`;
}

// ==================== ARCHIVE ====================
function getYearsData() {
  const yearsMap = {};
  state.invoices.forEach(inv => {
    const year = new Date(inv.createdAt || inv.invoiceDate).getFullYear();
    if (!yearsMap[year]) {
      yearsMap[year] = { count: 0, total: 0, types: {} };
    }
    yearsMap[year].count++;
    yearsMap[year].total += inv.grandTotal || 0;
    yearsMap[year].types[inv.type] = (yearsMap[year].types[inv.type] || 0) + 1;
  });
  return yearsMap;
}

function renderArchive() {
  const yearsData = getYearsData();
  const years = Object.keys(yearsData).sort((a, b) => b - a);
  
  const totalInvoices = state.invoices.length;
  const totalAmount = state.invoices.reduce((s, i) => s + (i.grandTotal || 0), 0);
  const currentYear = new Date().getFullYear();
  const currentYearData = yearsData[currentYear] || { count: 0, total: 0 };
  
  // Archive Stats
  const statsHTML = `
    <div class="archive-stat-item">
      <div class="archive-stat-label">${t('statInvoices')}</div>
      <div class="archive-stat-value">${totalInvoices}</div>
    </div>
    <div class="archive-stat-item">
      <div class="archive-stat-label">${t('statBilled')}</div>
      <div class="archive-stat-value">${formatMoney(totalAmount)}</div>
    </div>
    <div class="archive-stat-item">
      <div class="archive-stat-label">${currentYear}</div>
      <div class="archive-stat-value">${currentYearData.count} ${t('invoices')}</div>
    </div>
    <div class="archive-stat-item">
      <div class="archive-stat-label">${currentYear} ${t('totalAmount')}</div>
      <div class="archive-stat-value">${formatMoney(currentYearData.total)}</div>
    </div>
  `;
  document.getElementById('archiveStats').innerHTML = statsHTML;
  
  // Years Grid
  if (years.length === 0) {
    document.getElementById('yearsGrid').innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:20px; color:var(--text-muted);">
        ${t('noInvoices')}
      </div>
    `;
    return;
  }
  
  const yearsHTML = years.map(year => {
    const data = yearsData[year];
    const isActive = state.currentYearFilter === year;
    return `
      <div class="year-card ${isActive ? 'active' : ''}" onclick="filterByYear(${year})">
        <div class="year-icon">📁</div>
        <div class="year-number">${year}</div>
        <div class="year-count">${data.count} ${t('invoices')}</div>
        <div class="year-total">${formatMoney(data.total)}</div>
      </div>
    `;
  }).join('');
  
  document.getElementById('yearsGrid').innerHTML = yearsHTML;
  
  // Update year filter dropdown
  const yearFilter = document.getElementById('yearFilter');
  const currentVal = yearFilter.value;
  yearFilter.innerHTML = `<option value="all">${t('allYears')}</option>` + 
    years.map(y => `<option value="${y}">${y}</option>`).join('');
  yearFilter.value = currentVal || 'all';
}

function filterByYear(year) {
  state.currentYearFilter = state.currentYearFilter === year ? 'all' : year;
  document.getElementById('yearFilter').value = state.currentYearFilter;
  renderArchive();
  renderInvoices();
}

function applyFilters() {
  state.currentYearFilter = document.getElementById('yearFilter').value;
  renderArchive();
  renderInvoices();
}

function toggleArchive() {
  state.archiveVisible = !state.archiveVisible;
  const content = document.getElementById('archiveContent');
  const btn = document.getElementById('archiveToggleBtn');
  if (state.archiveVisible) {
    content.classList.remove('hidden');
    btn.innerHTML = `<span>${t('hideArchive')}</span>`;
  } else {
    content.classList.add('hidden');
    btn.innerHTML = `<span>${t('showArchive')}</span>`;
  }
}

// ==================== SETTINGS ====================
function openSettings() {
  loadSettingsToForm();
  updatePreview();
  openModal('settingsModal');
}

function loadSettingsToForm() {
  const s = state.settings;
  document.getElementById('s_companyName').value = s.companyName || '';
  document.getElementById('s_nif').value = s.nif || '';
  document.getElementById('s_stat').value = s.stat || '';
  document.getElementById('s_rcs').value = s.rcs || '';
  document.getElementById('s_phones').value = s.phones || '';
  document.getElementById('s_email').value = s.email || '';
  document.getElementById('s_address').value = s.address || '';
  document.getElementById('s_signatory').value = s.signatory || '';
  document.getElementById('s_whatsapp').value = s.whatsapp || '';
  document.getElementById('s_facebook').value = s.facebook || '';
  document.getElementById('s_instagram').value = s.instagram || '';
  document.getElementById('s_twitter').value = s.twitter || '';
  document.getElementById('s_linkedin').value = s.linkedin || '';
  document.getElementById('s_telegram').value = s.telegram || '';
  document.getElementById('s_youtube').value = s.youtube || '';
  document.getElementById('s_website').value = s.website || '';
  document.getElementById('s_email2').value = s.email2 || '';
  document.getElementById('s_conditions').value = s.conditions || '';
  document.getElementById('s_defaultTax').value = s.defaultTax || 15;
  document.getElementById('s_paymentTerms').value = s.paymentTerms || '';
  document.getElementById('s_footer').value = s.footer || '';
  document.getElementById('s_currency').value = state.currency;

  if (s.logo) {
    document.getElementById('logoPreviewSmall').src = s.logo;
    document.getElementById('logoPreviewSmall').style.display = 'block';
    document.getElementById('removeLogoBtn').style.display = 'inline-block';
  }
}

function saveSettings(e) {
  e.preventDefault();
  state.settings = {
    companyName: document.getElementById('s_companyName').value,
    nif: document.getElementById('s_nif').value,
    stat: document.getElementById('s_stat').value,
    rcs: document.getElementById('s_rcs').value,
    phones: document.getElementById('s_phones').value,
    email: document.getElementById('s_email').value,
    address: document.getElementById('s_address').value,
    signatory: document.getElementById('s_signatory').value,
    whatsapp: document.getElementById('s_whatsapp').value,
    facebook: document.getElementById('s_facebook').value,
    instagram: document.getElementById('s_instagram').value,
    twitter: document.getElementById('s_twitter').value,
    linkedin: document.getElementById('s_linkedin').value,
    telegram: document.getElementById('s_telegram').value,
    youtube: document.getElementById('s_youtube').value,
    website: document.getElementById('s_website').value,
    email2: document.getElementById('s_email2').value,
    conditions: document.getElementById('s_conditions').value,
    defaultTax: parseFloat(document.getElementById('s_defaultTax').value) || 15,
    paymentTerms: document.getElementById('s_paymentTerms').value,
    footer: document.getElementById('s_footer').value,
    logo: document.getElementById('logoPreviewSmall').src || '',
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem('companySettings', JSON.stringify(state.settings));
  showToast('✅ ' + t('settingsSaved'), 'success');
  closeModal('settingsModal');
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('logoPreviewSmall').src = e.target.result;
    document.getElementById('logoPreviewSmall').style.display = 'block';
    document.getElementById('removeLogoBtn').style.display = 'inline-block';
    updatePreview();
  };
  reader.readAsDataURL(file);
}

function removeLogo() {
  document.getElementById('logoPreviewSmall').src = '';
  document.getElementById('logoPreviewSmall').style.display = 'none';
  document.getElementById('removeLogoBtn').style.display = 'none';
  document.getElementById('logoInput').value = '';
  updatePreview();
}

function updatePreview() {
  const s = {
    companyName: document.getElementById('s_companyName').value,
    nif: document.getElementById('s_nif').value,
    stat: document.getElementById('s_stat').value,
    rcs: document.getElementById('s_rcs').value,
    phones: document.getElementById('s_phones').value,
    email: document.getElementById('s_email').value,
    address: document.getElementById('s_address').value,
    signatory: document.getElementById('s_signatory').value,
    logo: document.getElementById('logoPreviewSmall').src || '',
    facebook: document.getElementById('s_facebook').value,
    instagram: document.getElementById('s_instagram').value,
    twitter: document.getElementById('s_twitter').value,
    linkedin: document.getElementById('s_linkedin').value,
    telegram: document.getElementById('s_telegram').value,
    youtube: document.getElementById('s_youtube').value,
    website: document.getElementById('s_website').value,
    email2: document.getElementById('s_email2').value,
    whatsapp: document.getElementById('s_whatsapp').value,
  };

  const hasData = Object.values(s).some(v => v && v !== window.location.href);
  if (!hasData) {
    document.getElementById('headerPreview').innerHTML = `<div style="color:#94a3b8; font-size:0.9rem;">${t('previewPlaceholder')}</div>`;
    return;
  }

  const logoHtml = s.logo && s.logo !== window.location.href ? `<img src="${s.logo}" class="preview-logo">` : `<div style="font-size:2rem; margin-bottom:10px;">🏢</div>`;
  const nameHtml = s.companyName ? `<div class="preview-company-name">${escapeHtml(s.companyName)}</div>` : `<div class="preview-company-name" style="color:#94a3b8;">Nom de entreprise ou fournisseur</div>`;

  const infoRows = [];
  if (s.nif) infoRows.push(`<div class="preview-info-row"><strong>NIF:</strong> ${escapeHtml(s.nif)}</div>`);
  if (s.stat) infoRows.push(`<div class="preview-info-row"><strong>STAT:</strong> ${escapeHtml(s.stat)}</div>`);
  if (s.rcs) infoRows.push(`<div class="preview-info-row"><strong>RCS:</strong> ${escapeHtml(s.rcs)}</div>`);
  if (s.phones) infoRows.push(`<div class="preview-info-row">${escapeHtml(s.phones)}</div>`);
  if (s.email) infoRows.push(`<div class="preview-info-row">✉️ ${escapeHtml(s.email)}</div>`);
  if (s.email2) infoRows.push(`<div class="preview-info-row">✉️ ${escapeHtml(s.email2)}</div>`);
  if (s.address) infoRows.push(`<div class="preview-info-row">📍 ${escapeHtml(s.address)}</div>`);
  if (s.signatory) infoRows.push(`<div class="preview-info-row" style="margin-top:10px; font-weight:700;">✍️ ${escapeHtml(s.signatory)}</div>`);

  const socials = [];
  if (s.whatsapp) socials.push(`<a href="https://wa.me/${s.whatsapp.replace(/\D/g,'')}" title="WhatsApp">💬</a>`);
  if (s.facebook) socials.push(`<a href="${s.facebook}" title="Facebook">📘</a>`);
  if (s.instagram) socials.push(`<a href="${s.instagram}" title="Instagram">📸</a>`);
  if (s.twitter) socials.push(`<a href="${s.twitter}" title="Twitter"></a>`);
  if (s.linkedin) socials.push(`<a href="${s.linkedin}" title="LinkedIn">💼</a>`);
  if (s.telegram) socials.push(`<a href="${s.telegram}" title="Telegram">✈️</a>`);
  if (s.youtube) socials.push(`<a href="${s.youtube}" title="YouTube"></a>`);
  if (s.website) socials.push(`<a href="${s.website}" title="Website">🌐</a>`);

  const socialHtml = socials.length ? `<div class="preview-social">${socials.join('')}</div>` : '';

  document.getElementById('headerPreview').innerHTML = `${logoHtml}${nameHtml}${infoRows.join('')}${socialHtml}`;
}

// ==================== RENDER ====================
function renderAll() { renderStats(); renderArchive(); renderInvoices(); }

function renderStats() {
  const total = state.invoices.length;
  const billed = state.invoices.reduce((s, i) => s + (i.grandTotal || 0), 0);
  const advances = state.invoices.filter(i => i.type === 'avance').reduce((s, i) => s + (i.grandTotal || 0), 0);
  const proformas = state.invoices.filter(i => i.type === 'proforma').length;

  document.getElementById('statInvoices').textContent = total;
  document.getElementById('statBilled').textContent = formatMoney(billed);
  document.getElementById('statAdvances').textContent = formatMoney(advances);
  document.getElementById('statProformas').textContent = proformas;

  document.getElementById('countProforma').textContent = state.invoices.filter(i => i.type === 'proforma').length;
  document.getElementById('countAvance').textContent = state.invoices.filter(i => i.type === 'avance').length;
  document.getElementById('countSolde').textContent = state.invoices.filter(i => i.type === 'solde').length;
  document.getElementById('countDefinitive').textContent = state.invoices.filter(i => i.type === 'definitive').length;
  document.getElementById('countSimple').textContent = state.invoices.filter(i => i.type === 'simple').length;
}

function renderInvoices() {
  const container = document.getElementById('invoicesList');
  let filtered = state.invoices;
  
  // Apply type filter
  if (state.currentFilter !== 'all') {
    filtered = filtered.filter(i => i.type === state.currentFilter);
  }
  
  // Apply year filter
  if (state.currentYearFilter !== 'all') {
    const year = parseInt(state.currentYearFilter);
    filtered = filtered.filter(i => {
      const invYear = new Date(i.createdAt || i.invoiceDate).getFullYear();
      return invYear === year;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="icon">📭</div><h3>${state.invoices.length === 0 ? t('noInvoices') : t('noResults')}</h3>${state.invoices.length === 0 ? `<button class="btn-primary" onclick="openForm('simple')" style="margin-top:15px;">➕ ${t('createFirst')}</button>` : ''}</div>`;
    return;
  }

  container.innerHTML = filtered.map(inv => `
    <div class="invoice-row">
      <div class="inv-number">#${escapeHtml(inv.invoiceNumber)}</div>
      <div><div class="inv-client">${escapeHtml(inv.clientName)}</div><div style="font-size:0.8rem; color:var(--text-muted);">${getTypeBadge(inv.type)}</div></div>
      <div class="inv-date">${formatDate(inv.invoiceDate)}${inv.invoiceTime ? `<br><small>🕐 ${inv.invoiceTime}</small>` : ''}</div>
      <div class="inv-total">${formatMoney(inv.grandTotal)}</div>
      <div class="inv-actions">
        <button class="icon-btn view" onclick="viewInvoice('${inv.id}')" title="${t('view')}">👁️</button>
        <button class="icon-btn edit" onclick="editInvoice('${inv.id}')" title="${t('edit')}">✏️</button>
        <button class="icon-btn pdf" onclick="quickPDF('${inv.id}')" title="PDF"></button>
        <button class="icon-btn email" onclick="quickEmail('${inv.id}')" title="Email">📧</button>
        <button class="icon-btn whatsapp" onclick="quickWhatsApp('${inv.id}')" title="WhatsApp">💬</button>
        <button class="icon-btn delete" onclick="openDeleteModal('${inv.id}')" title="${t('delete')}">🗑️</button>
      </div>
    </div>
  `).join('');
}

function getTypeBadge(type) {
  const badges = {
    proforma: '<span class="type-badge badge-proforma" style="font-size:0.7rem;">PROFORMA</span>',
    avance: '<span class="type-badge badge-avance" style="font-size:0.7rem;">FACTAVC</span>',
    solde: '<span class="type-badge badge-solde" style="font-size:0.7rem;">FACTSLD</span>',
    definitive: '<span class="type-badge badge-definitive" style="font-size:0.7rem;">FACTDEF</span>',
    simple: '<span class="type-badge badge-simple" style="font-size:0.7rem;">FACT</span>',
  };
  return badges[type] || '';
}

function filterInvoices(type, btn) {
  state.currentFilter = type;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderInvoices();
}

// ==================== FORM ====================
function openForm(type) {
  state.items = [{ description: '', quantity: 1, price: 0 }];
  document.getElementById('invoiceForm').reset();
  document.getElementById('invoiceId').value = '';
  document.getElementById('invoiceType').value = type;
  document.getElementById('formTitle').textContent = '➕ ' + t('newInvoice');
  document.getElementById('invoiceNumber').value = generateNumber(type);
  document.getElementById('invoiceDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('invoiceTime').value = new Date().toTimeString().slice(0, 5);
  const due = new Date(); due.setDate(due.getDate() + 30);
  document.getElementById('dueDate').value = due.toISOString().split('T')[0];
  document.getElementById('taxRate').value = state.settings.defaultTax || 15;
  renderItems();
  openModal('formModal');
}

function editInvoice(id) {
  const inv = state.invoices.find(i => i.id === id);
  if (!inv) return;
  document.getElementById('invoiceId').value = inv.id;
  document.getElementById('invoiceType').value = inv.type;
  document.getElementById('formTitle').textContent = '️ ' + t('editInvoice');
  document.getElementById('invoiceNumber').value = inv.invoiceNumber;
  document.getElementById('invoiceDate').value = inv.invoiceDate;
  document.getElementById('invoiceTime').value = inv.invoiceTime || '';
  document.getElementById('dueDate').value = inv.dueDate || '';
  document.getElementById('clientName').value = inv.clientName;
  document.getElementById('clientPhone').value = inv.clientPhone || '';
  document.getElementById('clientEmail').value = inv.clientEmail || '';
  document.getElementById('clientAddress').value = inv.clientAddress || '';
  document.getElementById('discount').value = inv.discount || 0;
  document.getElementById('discountType').value = inv.discountType || 'percent';
  document.getElementById('taxRate').value = inv.taxRate || state.settings.defaultTax || 15;
  document.getElementById('notes').value = inv.notes || '';
  state.items = JSON.parse(JSON.stringify(inv.items));
  renderItems();
  openModal('formModal');
}

function renderItems() {
  const tbody = document.getElementById('itemsBody');
  tbody.innerHTML = state.items.map((item, i) => `
    <tr>
      <td style="text-align:center; font-weight:700; color:var(--text-muted);">${i + 1}</td>
      <td><input type="text" value="${escapeHtml(item.description)}" onchange="updateItem(${i},'description',this.value)" placeholder="${t('itemDesc')}"></td>
      <td><input type="number" min="0" step="0.01" value="${item.quantity}" onchange="updateItem(${i},'quantity',this.value)"></td>
      <td><input type="number" min="0" step="0.01" value="${item.price}" onchange="updateItem(${i},'price',this.value)"></td>
      <td style="font-weight:700; color:var(--success); text-align:center;">${formatMoney(item.quantity * item.price)}</td>
      <td><button type="button" class="icon-btn delete" onclick="removeItem(${i})" ${state.items.length === 1 ? 'disabled style="opacity:0.4;"' : ''}>✕</button></td>
    </tr>
  `).join('');
  updateSummary();
}

function addItem() { state.items.push({ description: '', quantity: 1, price: 0 }); renderItems(); }
function removeItem(i) { if (state.items.length === 1) return; state.items.splice(i, 1); renderItems(); }
function updateItem(i, field, value) {
  if (field === 'description') state.items[i].description = value;
  else state.items[i][field] = parseFloat(value) || 0;
  renderItems();
}

function updateSummary() {
  const subtotal = state.items.reduce((s, i) => s + (i.quantity * i.price), 0);
  const discountVal = parseFloat(document.getElementById('discount').value) || 0;
  const discountType = document.getElementById('discountType').value;
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
  let discountAmount = discountType === 'percent' ? (subtotal * discountVal / 100) : discountVal;
  if (discountAmount > subtotal) discountAmount = subtotal;
  const afterDiscount = subtotal - discountAmount;
  const taxAmount = afterDiscount * taxRate / 100;
  const grandTotal = afterDiscount + taxAmount;
  document.getElementById('subtotal').textContent = formatMoney(subtotal);
  document.getElementById('grandTotal').textContent = formatMoney(grandTotal);
}

function saveInvoice(e) {
  e.preventDefault();
  if (!document.getElementById('clientName').value.trim()) { showToast(t('fillRequired'), 'error'); return; }
  if (state.items.length === 0 || !state.items.some(i => i.description.trim())) { showToast(t('addItemRequired'), 'error'); return; }

  const subtotal = state.items.reduce((s, i) => s + (i.quantity * i.price), 0);
  const discountVal = parseFloat(document.getElementById('discount').value) || 0;
  const discountType = document.getElementById('discountType').value;
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
  let discountAmount = discountType === 'percent' ? (subtotal * discountVal / 100) : discountVal;
  if (discountAmount > subtotal) discountAmount = subtotal;
  const afterDiscount = subtotal - discountAmount;
  const taxAmount = afterDiscount * taxRate / 100;
  const grandTotal = afterDiscount + taxAmount;

  const invoice = {
    id: document.getElementById('invoiceId').value || 'inv_' + Date.now(),
    type: document.getElementById('invoiceType').value,
    invoiceNumber: document.getElementById('invoiceNumber').value,
    invoiceDate: document.getElementById('invoiceDate').value,
    invoiceTime: document.getElementById('invoiceTime').value,
    dueDate: document.getElementById('dueDate').value,
    clientName: document.getElementById('clientName').value,
    clientPhone: document.getElementById('clientPhone').value,
    clientEmail: document.getElementById('clientEmail').value,
    clientAddress: document.getElementById('clientAddress').value,
    items: state.items,
    subtotal, discount: discountVal, discountType, discountAmount,
    taxRate, taxAmount, grandTotal,
    notes: document.getElementById('notes').value,
    createdAt: document.getElementById('invoiceId').value ? (state.invoices.find(i => i.id === document.getElementById('invoiceId').value)?.createdAt || new Date().toISOString()) : new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const existingIdx = state.invoices.findIndex(i => i.id === invoice.id);
  if (existingIdx >= 0) { state.invoices[existingIdx] = invoice; showToast(t('updated'), 'success'); }
  else { state.invoices.unshift(invoice); showToast(t('saved'), 'success'); }

  localStorage.setItem('invoices', JSON.stringify(state.invoices));
  closeModal('formModal');
  renderAll();
}

// ==================== VIEW ====================
function viewInvoice(id) {
  const inv = state.invoices.find(i => i.id === id);
  if (!inv) return;
  state.currentViewId = id;
  const s = state.settings;

  const socialLinks = [];
  if (s.whatsapp) socialLinks.push(`💬 ${escapeHtml(s.whatsapp)}`);
  if (s.facebook) socialLinks.push(`📘 Facebook`);
  if (s.instagram) socialLinks.push(`📸 Instagram`);
  if (s.twitter) socialLinks.push(` Twitter`);
  if (s.linkedin) socialLinks.push(`💼 LinkedIn`);
  if (s.telegram) socialLinks.push(`✈️ Telegram`);
  if (s.youtube) socialLinks.push(`📺 YouTube`);
  if (s.website) socialLinks.push(`🌐 ${escapeHtml(s.website)}`);
  const socialHtml = socialLinks.length ? `<div style="margin-top:10px; font-size:0.85rem; color:#64748b;"><strong>📱 ${t('communicationSettings').replace(' ','')}:</strong> ${socialLinks.join(' | ')}</div>` : '';

  const logoHtml = s.logo && s.logo !== window.location.href ? `<img src="${s.logo}" style="max-width:120px; max-height:100px; margin-bottom:10px;">` : '';

  const html = `
    <div class="invoice-view" id="invoiceViewContent">
      <div class="view-header">
        <div class="view-company">
          ${logoHtml}
          <h2>${escapeHtml(s.companyName || t('appName'))}</h2>
          ${s.address ? `<p>📍 ${escapeHtml(s.address)}</p>` : ''}
          ${s.phones ? `<p>📞 ${escapeHtml(s.phones)}</p>` : ''}
          ${s.email ? `<p>✉️ ${escapeHtml(s.email)}</p>` : ''}
          ${s.nif ? `<p>NIF: ${escapeHtml(s.nif)}</p>` : ''}
          ${s.stat ? `<p>STAT: ${escapeHtml(s.stat)}</p>` : ''}
          ${s.rcs ? `<p>RCS: ${escapeHtml(s.rcs)}</p>` : ''}
          ${socialHtml}
        </div>
        <div class="view-invoice-info">
          <div class="view-badge">${getTypeName(inv.type)} #${escapeHtml(inv.invoiceNumber)}</div>
          <div class="view-datetime">
            <div>📅 ${t('invoiceDate')}: ${formatDate(inv.invoiceDate)}</div>
            ${inv.invoiceTime ? `<div>🕐 ${t('invoiceTime')}: ${inv.invoiceTime}</div>` : ''}
            ${inv.dueDate ? `<div>⏰ ${t('dueDate')}: ${formatDate(inv.dueDate)}</div>` : ''}
          </div>
        </div>
      </div>

      <div class="view-parties">
        <div class="view-party">
          <h4> ${t('from')}</h4>
          <p><strong>${escapeHtml(s.companyName || t('appName'))}</strong></p>
          ${s.address ? `<p>📍 ${escapeHtml(s.address)}</p>` : ''}
          ${s.phones ? `<p>📞 ${escapeHtml(s.phones)}</p>` : ''}
          ${s.email ? `<p>✉️ ${escapeHtml(s.email)}</p>` : ''}
        </div>
        <div class="view-party">
          <h4>👤 ${t('to')}</h4>
          <p><strong>${escapeHtml(inv.clientName)}</strong></p>
          ${inv.clientAddress ? `<p>📍 ${escapeHtml(inv.clientAddress)}</p>` : ''}
          ${inv.clientPhone ? `<p>📞 ${escapeHtml(inv.clientPhone)}</p>` : ''}
          ${inv.clientEmail ? `<p>✉️ ${escapeHtml(inv.clientEmail)}</p>` : ''}
        </div>
      </div>

      <table class="view-table">
        <thead><tr><th>#</th><th>${t('itemDesc')}</th><th>${t('itemQty')}</th><th>${t('itemPrice')}</th><th>${t('itemTotal')}</th></tr></thead>
        <tbody>
          ${inv.items.map((item, i) => `<tr><td style="text-align:center;">${i+1}</td><td>${escapeHtml(item.description)}</td><td style="text-align:center;">${item.quantity}</td><td style="text-align:center;">${formatMoney(item.price)}</td><td style="text-align:center; font-weight:700; color:#059669;">${formatMoney(item.quantity * item.price)}</td></tr>`).join('')}
        </tbody>
      </table>

      <div class="view-total-box">
        <div class="summary-row"><span>${t('subtotal')}</span><span>${formatMoney(inv.subtotal)}</span></div>
        ${inv.discountAmount > 0 ? `<div class="summary-row"><span>${t('discountLabel')}:</span><span>-${formatMoney(inv.discountAmount)}</span></div>` : ''}
        <div class="summary-row"><span>${t('taxLabel')} (${inv.taxRate}%):</span><span>${formatMoney(inv.taxAmount)}</span></div>
        <div class="summary-row total"><span>${t('finalTotal')}:</span><span>${formatMoney(inv.grandTotal)}</span></div>
      </div>

      ${inv.notes ? `<div class="view-notes"><h4 style="color:var(--warning); margin-bottom:8px;">📝 ${t('notes')}</h4><p>${escapeHtml(inv.notes)}</p></div>` : ''}
      ${s.conditions ? `<div class="view-notes" style="background:#eff6ff; border-color:#3b82f6;"><h4 style="color:#2563eb; margin-bottom:8px;">📋 ${t('conditions')}</h4><p>${escapeHtml(s.conditions)}</p></div>` : ''}
      ${s.footer ? `<div style="text-align:center; margin-top:20px; padding:15px; background:#f8fafc; border-radius:10px; color:#64748b; font-weight:600;">${escapeHtml(s.footer)}</div>` : ''}
      ${s.signatory ? `<div style="margin-top:30px; text-align:left;"><div style="border-top:2px solid #0f172a; display:inline-block; padding-top:5px; min-width:200px; text-align:center;"><strong>${escapeHtml(s.signatory)}</strong><br><small style="color:#64748b;">${t('signatory')}</small></div></div>` : ''}
      
      <div class="view-footer-info">
        <span>📅 ${t('createdAt')}: ${formatDateTime(inv.createdAt)}</span>
        <span>🔄 ${t('updatedAt')}: ${formatDateTime(inv.updatedAt)}</span>
      </div>
    </div>
  `;

  document.getElementById('viewContent').innerHTML = html;
  openModal('viewModal');
}

function getTypeName(type) {
  const names = { proforma: t('typeProforma'), avance: t('typeAvance'), solde: t('typeSolde'), definitive: t('typeDefinitive'), simple: t('typeSimple') };
  return names[type] || t('invoice');
}

function formatDateTime(isoStr) {
  if (!isoStr) return '--';
  const d = new Date(isoStr);
  const locale = state.lang === 'ar' ? 'ar-EG' : (state.lang === 'fr' ? 'fr-FR' : 'en-US');
  return d.toLocaleString(locale, {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// ==================== SHARE ====================
function shareEmail() {
  const inv = state.invoices.find(i => i.id === state.currentViewId);
  if (!inv) return;
  const subject = encodeURIComponent(`${t('emailSubject')} #${inv.invoiceNumber}`);
  const body = encodeURIComponent(`${t('emailBody')} #${inv.invoiceNumber}\n\n${t('clientName')}: ${inv.clientName}\n${t('finalTotal')}: ${formatMoney(inv.grandTotal)}\n\n${t('invoiceDate')}: ${formatDate(inv.invoiceDate)}${inv.invoiceTime ? ' ' + t('invoiceTime') + ': ' + inv.invoiceTime : ''}`);
  const to = inv.clientEmail ? inv.clientEmail : '';
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  showToast('📧 ' + t('sendEmail'), 'success');
}

function shareWhatsApp() {
  const inv = state.invoices.find(i => i.id === state.currentViewId);
  if (!inv) return;
  const phone = (inv.clientPhone || state.settings.whatsapp || '').replace(/\D/g, '');
  const msg = encodeURIComponent(`${t('whatsappMsg')} #${inv.invoiceNumber}\n\n${t('clientName')}: ${inv.clientName}\n${t('finalTotal')}: ${formatMoney(inv.grandTotal)}\n${t('invoiceDate')}: ${formatDate(inv.invoiceDate)}${inv.invoiceTime ? ' ' + t('invoiceTime') + ': ' + inv.invoiceTime : ''}`);
  const url = phone ? `https://wa.me/${phone}?text=${msg}` : `https://wa.me/?text=${msg}`;
  window.open(url, '_blank');
  showToast('💬 ' + t('sendWhatsApp'), 'success');
}

function quickEmail(id) { state.currentViewId = id; shareEmail(); }
function quickWhatsApp(id) { state.currentViewId = id; shareWhatsApp(); }

// ==================== PDF & PRINT ====================
function downloadPDF() {
  const inv = state.invoices.find(i => i.id === state.currentViewId);
  if (!inv) return;
  const element = document.getElementById('invoiceViewContent');
  const opt = {
    margin: 10, filename: `${t('invoice')}_${inv.invoiceNumber}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  showToast('📄 ' + t('downloadPDF'), 'success');
  html2pdf().set(opt).from(element).save();
}

function quickPDF(id) { state.currentViewId = id; viewInvoice(id); setTimeout(() => downloadPDF(), 500); }

function printInvoice() {
  const content = document.getElementById('invoiceViewContent').innerHTML;
  const printArea = document.getElementById('printArea');
  printArea.innerHTML = `<div style="padding:20px; font-family:Cairo, sans-serif;">${content}</div>`;
  printArea.style.display = 'block';
  setTimeout(() => {
    window.print();
    setTimeout(() => printArea.style.display = 'none', 500);
  }, 100);
}

function printDashboard() {
  const printArea = document.getElementById('printArea');
  const dashboardHTML = `
    <div style="padding:20px; font-family:Cairo, sans-serif; direction:${document.body.dir};">
      <h1 style="color:#1e40af; text-align:center; margin-bottom:10px;">${t('invoicesList')}</h1>
      <p style="text-align:center; color:#64748b; margin-bottom:20px;">${t('statInvoices')}: ${state.invoices.length} | ${t('statBilled')}: ${formatMoney(state.invoices.reduce((s, i) => s + (i.grandTotal || 0), 0))}</p>
      <table style="width:100%; border-collapse:collapse;">
        <thead>
          <tr style="background:#1e40af; color:white;">
            <th style="padding:10px; border:1px solid #ddd;">#</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('invoiceNumber')}</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('clientName')}</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('type')}</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('invoiceDate')}</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('invoiceTime')}</th>
            <th style="padding:10px; border:1px solid #ddd;">${t('total')}</th>
          </tr>
        </thead>
        <tbody>
          ${state.invoices.map((inv, i) => `
            <tr>
              <td style="padding:10px; border:1px solid #ddd;">${i + 1}</td>
              <td style="padding:10px; border:1px solid #ddd;">${escapeHtml(inv.invoiceNumber)}</td>
              <td style="padding:10px; border:1px solid #ddd;">${escapeHtml(inv.clientName)}</td>
              <td style="padding:10px; border:1px solid #ddd;">${getTypeName(inv.type)}</td>
              <td style="padding:10px; border:1px solid #ddd;">${formatDate(inv.invoiceDate)}</td>
              <td style="padding:10px; border:1px solid #ddd;">${inv.invoiceTime || '--'}</td>
              <td style="padding:10px; border:1px solid #ddd; font-weight:bold; color:#059669;">${formatMoney(inv.grandTotal)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  printArea.innerHTML = dashboardHTML;
  printArea.style.display = 'block';
  setTimeout(() => {
    window.print();
    setTimeout(() => printArea.style.display = 'none', 500);
  }, 100);
}

// ==================== DELETE ====================
function openDeleteModal(id) { state.deleteTargetId = id; openModal('deleteModal'); }
function confirmDelete() {
  if (!state.deleteTargetId) return;
  state.invoices = state.invoices.filter(i => i.id !== state.deleteTargetId);
  localStorage.setItem('invoices', JSON.stringify(state.invoices));
  showToast(t('deleted'), 'success');
  closeModal('deleteModal');
  closeModal('viewModal');
  renderAll();
}
function deleteFromView() { openDeleteModal(state.currentViewId); }
function editFromView() { closeModal('viewModal'); editInvoice(state.currentViewId); }

// ==================== HELPERS ====================
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function generateNumber(type) {
  const year = new Date().getFullYear();
  const prefixes = { proforma: 'PRO', avance: 'AVC', solde: 'SLD', definitive: 'DEF', simple: 'FAC' };
  const prefix = prefixes[type] || 'FAC';
  const count = state.invoices.filter(i => i.type === type).length + 1;
  return `${prefix}-${year}-${String(count).padStart(4, '0')}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const locale = state.lang === 'ar' ? 'ar-EG' : (state.lang === 'fr' ? 'fr-FR' : 'en-US');
  return new Date(dateStr).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });
});