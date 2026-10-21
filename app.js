/* Demo Estates ERP — demo SPA. All data lives in localStorage. */
const KEY = 'demoEstatesERP_v2';
const OLDKEY = 'demoEstatesERP_v1';
const TODAY = '2026-10-20';

const seed = {
  settings: { name: 'Demo Estates', logo: 'DE', wa: '923001234567' },
  properties: [
    { id: 1, title: '5 Marla Brand New House', area: 'Bahria Town, Lahore', type: 'House', size: '5 Marla', price: 'Rs. 1.85 Crore', status: 'Available' },
    { id: 2, title: '10 Marla Corner House', area: 'DHA Phase 6, Lahore', type: 'House', size: '10 Marla', price: 'Rs. 3.90 Crore', status: 'Available' },
    { id: 3, title: '2 Bed Luxury Apartment', area: 'Clifton Block 5, Karachi', type: 'Apartment', size: '1,150 sq ft', price: 'Rs. 1.20 Crore', status: 'Sold', docs: [{ name: 'Sale Deed — Clifton Apt.pdf', type: 'application/pdf', size: 245760, added: 'Oct 5, 2026' }] },
    { id: 4, title: '1 Kanal Modern Villa', area: 'DHA Phase 5, Islamabad', type: 'Villa', size: '1 Kanal', price: 'Rs. 6.50 Crore', status: 'Available' },
    { id: 5, title: '120 Sq Yd Plot', area: 'Bahria Town Precinct 12, Karachi', type: 'Plot', size: '120 Sq Yd', price: 'Contact for price', status: 'Available' },
    { id: 6, title: '3 Bed Apartment (Furnished)', area: 'Gulberg III, Lahore', type: 'Apartment', size: '1,650 sq ft', price: 'Rs. 85,000/mo', status: 'Rented' },
    { id: 7, title: '7 Marla House', area: 'Bahria Town Sector C, Islamabad', type: 'House', size: '7 Marla', price: 'Rs. 2.45 Crore', status: 'Available' },
    { id: 8, title: 'Commercial Shop — Main Boulevard', area: 'Johar Town, Lahore', type: 'Commercial', size: '450 sq ft', price: 'Rs. 95 Lakh', status: 'Sold' },
    { id: 9, title: '250 Sq Yd Plot', area: 'DHA Phase 8, Karachi', type: 'Plot', size: '250 Sq Yd', price: 'Contact for price', status: 'Available' },
    { id: 10, title: '1 Bed Studio Apartment', area: 'Bahria Enclave, Islamabad', type: 'Apartment', size: '620 sq ft', price: 'Rs. 38,000/mo', status: 'Rented' }
  ],
  leads: [
    { id: 1, name: 'Ahmed Raza', phone: '0301-2345678', interest: '5 Marla house, Bahria Lahore', source: 'TikTok', status: 'New', followUp: '2026-10-20', notes: [{ text: 'Called — budget confirmed, wants a corner unit if possible.', time: 'Oct 19, 2026 · 11:20 AM' }, { text: 'Shared listing brochure on WhatsApp.', time: 'Oct 20, 2026 · 9:05 AM' }] },
    { id: 2, name: 'Fatima Khan', phone: '0321-9876543', interest: '2 Bed apartment, Clifton', source: 'Facebook', status: 'Contacted', followUp: '2026-10-18' },
    { id: 3, name: 'Bilal Hussain', phone: '0333-1122334', interest: '10 Marla, DHA Phase 6', source: 'Walk-in', status: 'Visit Scheduled', followUp: '2026-10-21' },
    { id: 4, name: 'Ayesha Malik', phone: '0300-5566778', interest: '1 Kanal villa, Islamabad', source: 'Referral', status: 'Negotiating', followUp: '2026-10-20', notes: [{ text: 'Site visit done — liked the villa, negotiating on payment terms.', time: 'Oct 18, 2026 · 4:40 PM' }] },
    { id: 5, name: 'Usman Tariq', phone: '0345-6677889', interest: 'Plot, Bahria Karachi', source: 'WhatsApp', status: 'New', followUp: '2026-10-19' },
    { id: 6, name: 'Sana Iqbal', phone: '0312-3344556', interest: 'Studio, Bahria Enclave', source: 'Website', status: 'Closed', followUp: null, docs: [{ name: 'CNIC — Sana Iqbal.jpg', type: 'image/jpeg', size: 512000, added: 'Oct 14, 2026' }] },
    { id: 7, name: 'Hassan Sheikh', phone: '0308-7788990', interest: 'Commercial shop, Johar Town', source: 'Facebook', status: 'Closed', followUp: null },
    { id: 8, name: 'Maryam Nawaz', phone: '0322-4455667', interest: '7 Marla, Sector C Islamabad', source: 'TikTok', status: 'Contacted', followUp: '2026-10-25' },
    { id: 9, name: 'Ali Hamza', phone: '0334-9900112', interest: 'Apartment, Gulberg', source: 'WhatsApp', status: 'Lost', followUp: null },
    { id: 10, name: 'Zainab Bibi', phone: '0305-2211334', interest: '250 Sq Yd plot, DHA Karachi', source: 'Referral', status: 'Visit Scheduled', followUp: '2026-10-22' }
  ],
  commissions: [
    { id: 1, deal: '2 Bed Apartment — Clifton Block 5', agent: 'Imran Sheikh', salePrice: 12000000, pct: 2, date: '2026-10-05' },
    { id: 2, deal: 'Commercial Shop — Johar Town', agent: 'Imran Sheikh', salePrice: 9500000, pct: 2, date: '2026-10-11' },
    { id: 3, deal: 'Studio Apartment — Bahria Enclave (rental)', agent: 'Sara Ahmed', salePrice: 456000, pct: 50, date: '2026-10-14' },
    { id: 4, deal: '8 Marla House — Model Town', agent: 'Kashif Mehmood', salePrice: 27500000, pct: 1.5, date: '2026-09-22' },
    { id: 5, deal: 'Plot 200 Sq Yd — DHA Phase 7', agent: 'Adeel Rana', salePrice: 15800000, pct: 2, date: '2026-09-08' }
  ],
  agents: [
    { id: 1, name: 'Imran Sheikh', phone: '0300-1112233', area: 'Karachi — Clifton / DHA' },
    { id: 2, name: 'Sara Ahmed', phone: '0321-4445566', area: 'Islamabad — Bahria / DHA' },
    { id: 3, name: 'Kashif Mehmood', phone: '0333-7778899', area: 'Lahore — Model Town / Johar Town' },
    { id: 4, name: 'Adeel Rana', phone: '0301-9990011', area: 'Lahore — DHA' },
    { id: 5, name: 'Nadia Farooq', phone: '0345-2223344', area: 'Karachi — Bahria Town' }
  ],
  installments: [
    { id: 1, buyer: 'Ahmed Raza', property: '5 Marla House — Bahria Town, Lahore', total: 18500000, down: 3700000, monthly: 250000, months: 48, paid: 7, start: '2026-04-05' },
    { id: 2, buyer: 'Fatima Khan', property: '120 Sq Yd Plot — Bahria Town, Karachi', total: 9500000, down: 1900000, monthly: 158333, months: 48, paid: 6, start: '2026-04-10' },
    { id: 3, buyer: 'Bilal Hussain', property: '10 Marla Corner House — DHA Phase 6, Lahore', total: 39000000, down: 9750000, monthly: 608333, months: 48, paid: 2, start: '2026-08-01' },
    { id: 4, buyer: 'Usman Tariq', property: '250 Sq Yd Plot — DHA Phase 8, Karachi', total: 12500000, down: 2500000, monthly: 208333, months: 48, paid: 3, start: '2026-07-20' },
    { id: 5, buyer: 'Sana Iqbal', property: '2 Bed Apartment — Gulberg III, Lahore', total: 6000000, down: 1200000, monthly: 133333, months: 36, paid: 36, start: '2023-10-15' }
  ],
  expenses: [
    { id: 1, title: 'Office Rent — Gulberg', category: 'Office', amount: 85000, date: '2026-10-01', note: 'Monthly rent' },
    { id: 2, title: 'Facebook Ads — Bahria listings', category: 'Marketing', amount: 32000, date: '2026-10-06', note: 'Boosted posts' },
    { id: 3, title: 'Fuel — site visits', category: 'Transport', amount: 12500, date: '2026-10-09', note: 'Karachi team' },
    { id: 4, title: 'Electricity & internet bill', category: 'Utilities', amount: 18750, date: '2026-10-12', note: '' },
    { id: 5, title: 'Photography — Clifton apartment', category: 'Marketing', amount: 15000, date: '2026-09-18', note: 'Listing shoot' },
    { id: 6, title: 'Printing — brochures', category: 'Office', amount: 6400, date: '2026-09-25', note: '' }
  ],
  activity: [
    { text: 'New lead added: Usman Tariq (WhatsApp)', time: 'Today, 10:24 AM' },
    { text: 'Deal closed: Commercial Shop — Johar Town by Imran Sheikh', time: 'Oct 11, 4:10 PM' },
    { text: 'Visit scheduled: Bilal Hussain — DHA Phase 6', time: 'Oct 10, 1:05 PM' },
    { text: 'Property added: 1 Kanal Modern Villa, Islamabad', time: 'Oct 9, 11:42 AM' },
    { text: 'Lead moved to Negotiating: Ayesha Malik', time: 'Oct 8, 6:30 PM' }
  ],
  dealsByMonth: { labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], values: [3, 5, 4, 6, 5, 3] }
};

let DB = load();
let charts = {};

function normalize(d) {
  // Backfill fields added in later versions so old saved data keeps working.
  if (!Array.isArray(d.expenses)) d.expenses = JSON.parse(JSON.stringify(seed.expenses));
  d.properties = (d.properties || []).map(p => ({ docs: [], ...p }));
  d.leads = (d.leads || []).map(l => ({ notes: [], docs: [], ...l }));
  return d;
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return normalize(JSON.parse(raw));
  } catch (e) {}
  // graceful migration from v1: keep old data, backfill new fields
  try {
    const old = localStorage.getItem(OLDKEY);
    if (old) {
      const d = JSON.parse(old);
      d.leads = (d.leads || []).map(l => ({ followUp: null, ...l }));
      d.installments = JSON.parse(JSON.stringify(seed.installments));
      localStorage.setItem(KEY, JSON.stringify(normalize(d)));
      return normalize(d);
    }
  } catch (e) {}
  return normalize(JSON.parse(JSON.stringify(seed)));
}
function save() { localStorage.setItem(KEY, JSON.stringify(DB)); }
function nextId(arr) { return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1; }
function fmt(n) { return 'Rs. ' + n.toLocaleString('en-PK'); }
function $(id) { return document.getElementById(id); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function nowStamp() {
  const d = new Date();
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    + ' · ' + d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
function dateStamp() {
  return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtSize(bytes) {
  const n = Number(bytes) || 0;
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
  return (n / (1024 * 1024)).toFixed(2) + ' MB';
}

/* ---------- Roles (demo-level) ---------- */
const ROLE_KEY = 'demoEstatesERP_role';
let ROLE = localStorage.getItem(ROLE_KEY) || 'Admin';
function canEdit() { return ROLE === 'Admin' || ROLE === 'Agent'; }
function canDelete() { return ROLE === 'Admin'; }
function setRole(r) {
  ROLE = r;
  localStorage.setItem(ROLE_KEY, r);
  applyRole();
  const cur = document.querySelector('.view:not(.hidden)');
  if (cur) showView(cur.id.replace('view-', ''));
}
function applyRole() {
  const sel = $('role-select');
  if (sel) sel.value = ROLE;
  document.body.classList.toggle('role-viewer', ROLE === 'Viewer');
  document.body.classList.toggle('role-agent', ROLE === 'Agent');
  const settingsBtn = document.querySelector('.nav-item[data-view="settings"]');
  if (settingsBtn) settingsBtn.style.display = ROLE === 'Admin' ? '' : 'none';
  if (ROLE !== 'Admin' && !$('view-settings').classList.contains('hidden')) showView('dashboard');
}
/* ---------- Helpers ---------- */
function waLink(phone) {
  let d = String(phone || '').replace(/\D/g, '');
  if (d.startsWith('0')) d = '92' + d.slice(1);
  return d;
}
function addMonths(dateStr, n) {
  const [y, m, d] = String(dateStr).split('-').map(Number);
  const dt = new Date(y, m - 1 + n, d);
  const yy = dt.getFullYear(), mm = String(dt.getMonth() + 1).padStart(2, '0'), dd = String(dt.getDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}
function planStatus(p) {
  if (p.paid >= p.months) return 'Completed';
  const next = addMonths(p.start, p.paid);
  return next < TODAY ? 'Overdue' : 'Active';
}
function installmentsDueThisMonth() {
  const m = TODAY.slice(0, 7);
  return DB.installments
    .filter(p => planStatus(p) !== 'Completed' && addMonths(p.start, p.paid).startsWith(m))
    .reduce((s, p) => s + p.monthly, 0);
}

/* ---------- Auth ---------- */
function doLogin() {
  sessionStorage.setItem('erpLoggedIn', '1');
  $('login-view').classList.add('hidden');
  $('app-view').classList.remove('hidden');
  init();
}
function doLogout() {
  sessionStorage.removeItem('erpLoggedIn');
  location.reload();
}

/* ---------- Nav ---------- */
function toggleSidebar() { $('sidebar').classList.toggle('open'); }
document.querySelectorAll('.nav-item[data-view]').forEach(b => {
  b.addEventListener('click', () => showView(b.dataset.view));
});
const VIEW_TITLES = { dashboard: 'Dashboard', properties: 'Properties', leads: 'Leads',
  followups: 'Follow-ups', installments: 'Installments', commissions: 'Commissions',
  expenses: 'Expenses', agents: 'Agents', reports: 'Reports', settings: 'Settings' };
function showView(name) {
  if (name === 'settings' && ROLE !== 'Admin') name = 'dashboard';
  document.querySelectorAll('.nav-item[data-view]').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  $('view-' + name).classList.remove('hidden');
  $('view-title').textContent = VIEW_TITLES[name] || name;
  $('sidebar').classList.remove('open');
  ({ dashboard: renderDashboard, properties: renderProperties, leads: renderLeads,
     followups: renderFollowups, installments: renderInstallments,
     commissions: renderCommissions, expenses: renderExpenses, agents: renderAgents,
     reports: renderReports, settings: renderSettings }[name] || renderDashboard)();
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  const openLeads = DB.leads.filter(l => !['Closed', 'Lost'].includes(l.status)).length;
  const pendingDeals = DB.leads.filter(l => ['Visit Scheduled', 'Negotiating'].includes(l.status)).length;
  const monthComm = DB.commissions.filter(c => c.date.startsWith('2026-10'))
    .reduce((s, c) => s + c.salePrice * c.pct / 100, 0);
  const fuDue = DB.leads.filter(l => l.followUp && l.followUp <= TODAY).length;
  const monthExp = DB.expenses.filter(e => e.date.startsWith(TODAY.slice(0, 7)))
    .reduce((s, e) => s + e.amount, 0);
  $('kpi-grid').innerHTML = [
    ['Total Properties', DB.properties.length, DB.properties.filter(p => p.status === 'Available').length + ' available'],
    ['Active Leads', openLeads, DB.leads.length + ' total in pipeline'],
    ["This Month's Commission", fmt(monthComm), 'Oct 2026 closed deals'],
    ['Pending Deals', pendingDeals, 'visits + negotiations'],
    ['Follow-ups Due Today', fuDue, DB.leads.filter(l => l.followUp && l.followUp < TODAY).length + ' overdue'],
    ["This Month's Expenses", fmt(monthExp), DB.expenses.length + ' expense entries total']
  ].map(([l, v, s]) => `<div class="kpi"><div class="k-label">${l}</div><div class="k-value">${v}</div><div class="k-sub">${s}</div></div>`).join('');
  $('activity-feed').innerHTML = DB.activity.map(a => `<li>${a.text}<span class="a-time">${a.time}</span></li>`).join('');
  drawChart('chart-deals', 'bar', DB.dealsByMonth.labels, DB.dealsByMonth.values, 'Deals closed', '#2563eb');
}

/* ---------- Properties ---------- */
function renderProperties() {
  const q = ($('prop-search').value || '').toLowerCase();
  const f = $('prop-status-filter').value;
  const rows = DB.properties.filter(p =>
    (!q || (p.title + p.area + p.type).toLowerCase().includes(q)) && (!f || p.status === f));
  $('props-body').innerHTML = rows.map(p => `<tr>
    <td><strong>${p.title}</strong></td><td>${p.area}</td><td>${p.type}</td><td>${p.size}</td><td>${p.price}</td>
    <td><span class="badge ${p.status === 'Available' ? 'b-avail' : p.status === 'Sold' ? 'b-sold' : 'b-rented'}">${p.status}</span></td>
    <td><a class="btn btn-sm btn-wa" href="https://wa.me/${waLink(DB.settings.wa)}?text=${encodeURIComponent(`Salam, I'm interested in ${p.title} — ${p.area} (${p.price}).`)}" target="_blank" rel="noopener">💬 Inquire</a>
        <button class="btn btn-sm" onclick="openDocsModal('property', ${p.id})">📎 Docs (${(p.docs || []).length})</button>
        ${canEdit() ? `<button class="btn btn-sm" onclick="openPropModal(${p.id})">Edit</button>` : ''}
        ${canDelete() ? `<button class="btn btn-sm btn-danger" onclick="delProperty(${p.id})">Delete</button>` : ''}</td></tr>`).join('')
    || '<tr><td colspan="7">No properties match.</td></tr>';
}
function openPropModal(id) {
  if (!canEdit()) return;
  const p = id ? DB.properties.find(x => x.id === id) : { title: '', area: '', type: 'House', size: '', price: 'Contact for price', status: 'Available' };
  openModal(id ? 'Edit Property' : 'Add Property', `
    <label>Title <input id="m-title" value="${p.title}"></label>
    <label>Area <input id="m-area" value="${p.area}"></label>
    <label>Type <select id="m-type">${['House','Apartment','Plot','Villa','Commercial'].map(t => `<option ${t === p.type ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
    <label>Size <input id="m-size" value="${p.size}" placeholder="5 Marla / 1,200 sq ft"></label>
    <label>Price <input id="m-price" value="${p.price}" placeholder="Rs. 1.85 Crore or Contact for price"></label>
    <label>Status <select id="m-status">${['Available','Sold','Rented'].map(s => `<option ${s === p.status ? 'selected' : ''}>${s}</option>`).join('')}</select></label>
  `, () => {
    const data = { title: $('m-title').value, area: $('m-area').value, type: $('m-type').value, size: $('m-size').value, price: $('m-price').value, status: $('m-status').value };
    if (id) Object.assign(DB.properties.find(x => x.id === id), data);
    else { DB.properties.push({ id: nextId(DB.properties), ...data }); DB.activity.unshift({ text: 'Property added: ' + data.title, time: 'Just now' }); }
    save(); closeModal(); renderProperties();
  });
}
function delProperty(id) {
  if (!canDelete()) return;
  if (!confirm('Delete this property?')) return;
  DB.properties = DB.properties.filter(x => x.id !== id);
  save(); renderProperties();
}

/* ---------- Documents (properties & leads) ---------- */
/* Only file metadata (name/type/size) is stored — never file contents. */
let modalRefresh = null;
let leadNoteDraft = '';
function stashNoteDraft() { const t = $('m-note'); if (t) leadNoteDraft = t.value; }
function docOwner(kind, id) {
  return kind === 'property' ? DB.properties.find(x => x.id === id) : DB.leads.find(x => x.id === id);
}
function docsListHTML(kind, owner) {
  const docs = owner.docs || [];
  if (!docs.length) return '<p class="doc-empty">No documents attached yet.</p>';
  return docs.map((d, i) => `<div class="doc-item">
      <span class="doc-icon">📄</span>
      <span class="doc-main"><span class="doc-name">${esc(d.name)}</span>
      <span class="doc-meta">${esc(d.type || 'file')} · ${fmtSize(d.size)} · added ${esc(d.added || '')}</span></span>
      ${canDelete() ? `<button class="btn btn-sm btn-danger" onclick="removeDoc('${kind}', ${owner.id}, ${i})">Remove</button>` : ''}
    </div>`).join('');
}
function openDocsModal(kind, id) {
  const owner = docOwner(kind, id);
  if (!owner) return;
  const label = kind === 'property' ? owner.title : owner.name;
  openModal('Documents — ' + label, `
    <div class="doc-list">${docsListHTML(kind, owner)}</div>
    ${canEdit() ? `<label class="doc-attach">Attach a document
      <input type="file" onchange="attachDoc('${kind}', ${id}, this)"></label>
      <p class="doc-hint">Demo: only the file name, type and size are saved — the file itself is not uploaded.</p>` : '<p class="doc-hint">Read-only role — attachments are disabled.</p>'}
  `, () => closeModal());
  $('modal-save').textContent = 'Done';
  modalRefresh = () => openDocsModal(kind, id);
}
function attachDoc(kind, id, input) {
  if (!canEdit()) return;
  const f = input.files && input.files[0];
  if (!f) return;
  const owner = docOwner(kind, id);
  if (!owner) return;
  owner.docs = owner.docs || [];
  owner.docs.push({ name: f.name, type: f.type || 'file', size: f.size, added: dateStamp() });
  save();
  if (kind === 'property') renderProperties(); else renderLeads();
  if (modalRefresh) modalRefresh();
}
function removeDoc(kind, id, idx) {
  if (!canDelete()) return;
  const owner = docOwner(kind, id);
  if (!owner || !owner.docs) return;
  owner.docs.splice(idx, 1);
  save();
  if (kind === 'property') renderProperties(); else renderLeads();
  if (modalRefresh) modalRefresh();
}

/* ---------- Leads (kanban) ---------- */
const STAGES = ['New', 'Contacted', 'Visit Scheduled', 'Negotiating', 'Closed', 'Lost'];
function renderLeads() {
  const cols = ['New', 'Contacted', 'Visit Scheduled', 'Negotiating', 'Closed / Lost'];
  $('kanban').innerHTML = cols.map(col => {
    const inCol = DB.leads.filter(l => col === 'Closed / Lost' ? ['Closed', 'Lost'].includes(l.status) : l.status === col);
    return `<div class="kcol"><h4>${col} (${inCol.length})</h4>${inCol.map(l => `
      <div class="kcard"><div class="kc-name">${l.name}</div>
        <div class="kc-meta">${l.phone}<br>${l.interest}<br>Source: ${l.source}${l.followUp ? `<br>📅 Follow-up: ${l.followUp}` : ''}</div>
        <a class="btn btn-wa btn-sm kc-wa" href="https://wa.me/${waLink(l.phone)}?text=${encodeURIComponent(`Salam ${l.name}, following up on your interest in ${l.interest}...`)}" target="_blank" rel="noopener">💬 WhatsApp</a>
        <button class="btn btn-sm kc-notes" onclick="openLeadDetail(${l.id})">📝 Notes (${(l.notes || []).length}) · 📎 ${(l.docs || []).length}</button>
        <select onchange="moveLead(${l.id}, this.value)" ${canEdit() ? '' : 'disabled'}>${STAGES.map(s => `<option ${s === l.status ? 'selected' : ''}>${s}</option>`).join('')}</select>
      </div>`).join('')}</div>`;
  }).join('');
}
function moveLead(id, status) {
  if (!canEdit()) return;
  DB.leads.find(l => l.id === id).status = status;
  save(); renderLeads();
}
function openLeadDetail(id) {
  const l = DB.leads.find(x => x.id === id);
  if (!l) return;
  const notes = (l.notes || []).slice().reverse();
  openModal('Lead — ' + l.name, `
    <div class="lead-head">
      <div><strong>${l.name}</strong> · ${l.phone}</div>
      <div class="kc-meta">${l.interest}<br>Source: ${l.source} · Status: ${l.status}${l.followUp ? ` · 📅 Follow-up: ${l.followUp}` : ''}</div>
    </div>
    <h4 class="detail-h">📝 Notes &amp; History</h4>
    <div class="note-list">${notes.length ? notes.map(n => `<div class="note-item"><div class="note-text">${esc(n.text)}</div><div class="note-time">${esc(n.time)}</div></div>`).join('') : '<p class="doc-empty">No notes yet.</p>'}</div>
    ${canEdit() ? `<label>Add a note <textarea id="m-note" rows="2" placeholder="e.g. Called — asked for a visit on Saturday">${esc(leadNoteDraft)}</textarea></label>` : '<p class="doc-hint">Read-only role — notes are disabled.</p>'}
    <h4 class="detail-h">📎 Documents (${(l.docs || []).length})</h4>
    <div class="doc-list">${docsListHTML('lead', l)}</div>
    ${canEdit() ? `<label class="doc-attach">Attach a document
      <input type="file" onchange="stashNoteDraft(); attachDoc('lead', ${l.id}, this)"></label>
      <p class="doc-hint">Demo: only the file name, type and size are saved.</p>` : ''}
  `, () => {
    if (!canEdit()) { closeModal(); return; }
    const text = ($('m-note').value || '').trim();
    if (text) {
      l.notes = l.notes || [];
      l.notes.push({ text, time: nowStamp() });
      DB.activity.unshift({ text: `Note added on lead: ${l.name}`, time: 'Just now' });
      save(); renderLeads();
    }
    closeModal();
  });
  $('modal-save').textContent = canEdit() ? 'Add Note' : 'Done';
  modalRefresh = () => openLeadDetail(id);
  leadNoteDraft = '';
}
function openLeadModal() {
  if (!canEdit()) return;
  openModal('Add Lead', `
    <label>Name <input id="m-lname"></label>
    <label>Phone <input id="m-lphone" placeholder="03xx-xxxxxxx"></label>
    <label>Interest <input id="m-linterest" placeholder="e.g. 5 Marla house, Bahria"></label>
    <label>Source <select id="m-lsource">${['TikTok','Facebook','WhatsApp','Website','Walk-in','Referral'].map(s => `<option>${s}</option>`).join('')}</select></label>
    <label>Follow-up date <input type="date" id="m-lfollowup"></label>
  `, () => {
    DB.leads.push({ id: nextId(DB.leads), name: $('m-lname').value, phone: $('m-lphone').value, interest: $('m-linterest').value, source: $('m-lsource').value, status: 'New', followUp: $('m-lfollowup').value || null, notes: [], docs: [] });
    save(); closeModal(); renderLeads();
  });
}

/* ---------- Follow-ups ---------- */
function renderFollowups() {
  const fu = DB.leads.filter(l => l.followUp);
  const groups = [
    ['Overdue', 'fu-overdue', fu.filter(l => l.followUp < TODAY).sort((a, b) => a.followUp.localeCompare(b.followUp))],
    ['Due Today', 'fu-today', fu.filter(l => l.followUp === TODAY)],
    ['Upcoming', 'fu-upcoming', fu.filter(l => l.followUp > TODAY).sort((a, b) => a.followUp.localeCompare(b.followUp))]
  ];
  $('followups-wrap').innerHTML = groups.map(([title, cls, items]) => `
    <div class="fu-section ${cls}"><div class="fu-head">${title} (${items.length})</div>
      <div class="fu-list">${items.length ? items.map(l => `
        <div class="fu-item">
          <div class="fu-main"><div class="fu-name">${l.name}</div>
            <div class="fu-meta">${l.phone} · ${l.interest} · ${l.status}</div></div>
          <div class="fu-date">📅 ${l.followUp}</div>
          <a class="btn btn-wa btn-sm" href="https://wa.me/${waLink(l.phone)}?text=${encodeURIComponent(`Salam ${l.name}, following up on your interest in ${l.interest}...`)}" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>`).join('') : '<div class="fu-item"><div class="fu-meta">None.</div></div>'}
      </div>
    </div>`).join('');
}

/* ---------- Installments ---------- */
function renderInstallments() {
  $('plans-grid').innerHTML = DB.installments.map(p => {
    const paidAmt = p.down + p.monthly * p.paid;
    const remaining = Math.max(0, p.total - paidAmt);
    const pct = Math.min(100, Math.round(paidAmt / p.total * 100));
    const st = planStatus(p);
    const next = st === 'Completed' ? '—' : addMonths(p.start, p.paid);
    return `<div class="icard">
      <h4>${p.buyer}</h4><div class="i-prop">${p.property}</div>
      <div class="pbar"><div class="pbar-fill" style="width:${pct}%"></div></div>
      <div class="i-row"><span>Paid</span><strong>${fmt(paidAmt)} (${pct}%)</strong></div>
      <div class="i-row"><span>Remaining</span><strong>${fmt(remaining)}</strong></div>
      <div class="i-row"><span>Schedule</span><span>${p.paid} / ${p.months} × ${fmt(p.monthly)}/mo</span></div>
      <div class="i-row"><span>Next due</span><span>${next}</span></div>
      <div class="i-row"><span>Status</span><span class="badge ${st === 'Active' ? 'st-active' : st === 'Overdue' ? 'st-overdue' : 'st-completed'}">${st}</span></div>
      ${st !== 'Completed' && canEdit() ? `<div class="i-actions"><button class="btn btn-primary btn-sm" onclick="markPayment(${p.id})">✓ Mark Payment (${fmt(p.monthly)})</button></div>` : ''}
    </div>`;
  }).join('');
}
function markPayment(id) {
  if (!canEdit()) return;
  const p = DB.installments.find(x => x.id === id);
  if (!p || p.paid >= p.months) return;
  p.paid += 1;
  DB.activity.unshift({ text: `Installment received: ${p.buyer} — ${fmt(p.monthly)}`, time: 'Just now' });
  save(); renderInstallments();
}
function openPlanModal() {
  if (!canEdit()) return;
  openModal('Add Installment Plan', `
    <label>Buyer name <input id="m-pbuyer"></label>
    <label>Property <input id="m-pprop" placeholder="e.g. 5 Marla House — Bahria Town"></label>
    <label>Total price (PKR) <input type="number" id="m-ptotal" placeholder="18500000"></label>
    <label>Down payment (PKR) <input type="number" id="m-pdown" placeholder="3700000"></label>
    <label>Monthly amount (PKR) <input type="number" id="m-pmonthly" placeholder="250000"></label>
    <label>Months <input type="number" id="m-pmonths" placeholder="48"></label>
    <label>Start date <input type="date" id="m-pstart" value="${TODAY}"></label>
  `, () => {
    DB.installments.push({
      id: nextId(DB.installments),
      buyer: $('m-pbuyer').value, property: $('m-pprop').value,
      total: +$('m-ptotal').value || 0, down: +$('m-pdown').value || 0,
      monthly: +$('m-pmonthly').value || 0, months: +$('m-pmonths').value || 0,
      paid: 0, start: $('m-pstart').value || TODAY
    });
    DB.activity.unshift({ text: 'Installment plan created: ' + $('m-pbuyer').value, time: 'Just now' });
    save(); closeModal(); renderInstallments();
  });
}

/* ---------- Commissions ---------- */
function renderCommissions() {
  const total = DB.commissions.reduce((s, c) => s + c.salePrice * c.pct / 100, 0);
  const month = DB.commissions.filter(c => c.date.startsWith('2026-10')).reduce((s, c) => s + c.salePrice * c.pct / 100, 0);
  $('comm-kpis').innerHTML = [
    ['Total Commission (all time)', fmt(total)], ["This Month (Oct 2026)", fmt(month)], ['Deals Closed', DB.commissions.length], ['Installment Receivables (Oct)', fmt(installmentsDueThisMonth())]
  ].map(([l, v]) => `<div class="kpi"><div class="k-label">${l}</div><div class="k-value">${v}</div></div>`).join('');
  $('comm-body').innerHTML = DB.commissions.map(c => `<tr><td>${c.deal}</td><td>${c.agent}</td>
    <td>${fmt(c.salePrice)}</td><td>${c.pct}%</td><td><strong>${fmt(c.salePrice * c.pct / 100)}</strong></td><td>${c.date}</td></tr>`).join('');
}

/* ---------- Expenses ---------- */
const EXP_CATEGORIES = ['Office', 'Marketing', 'Transport', 'Utilities', 'Staff', 'Other'];
function renderExpenses() {
  const monthKey = TODAY.slice(0, 7);
  const monthTotal = DB.expenses.filter(e => e.date.startsWith(monthKey)).reduce((s, e) => s + e.amount, 0);
  const allTotal = DB.expenses.reduce((s, e) => s + e.amount, 0);
  const topCat = EXP_CATEGORIES
    .map(c => [c, DB.expenses.filter(e => e.category === c && e.date.startsWith(monthKey)).reduce((s, e) => s + e.amount, 0)])
    .sort((a, b) => b[1] - a[1])[0];
  $('exp-kpis').innerHTML = [
    ["This Month's Expenses", fmt(monthTotal), 'Oct 2026'],
    ['Total Expenses (all time)', fmt(allTotal), DB.expenses.length + ' entries'],
    ['Top Category (this month)', topCat && topCat[1] ? topCat[0] : '—', topCat && topCat[1] ? fmt(topCat[1]) : 'no expenses this month']
  ].map(([l, v, s]) => `<div class="kpi"><div class="k-label">${l}</div><div class="k-value">${v}</div><div class="k-sub">${s}</div></div>`).join('');
  const rows = DB.expenses.slice().sort((a, b) => b.date.localeCompare(a.date));
  $('exp-body').innerHTML = rows.map(e => `<tr>
    <td>${e.date}</td><td><strong>${esc(e.title)}</strong></td><td>${esc(e.category)}</td>
    <td><strong>${fmt(e.amount)}</strong></td><td>${esc(e.note || '')}</td>
    <td>${canDelete() ? `<button class="btn btn-sm btn-danger" onclick="delExpense(${e.id})">Delete</button>` : ''}</td></tr>`).join('')
    || '<tr><td colspan="6">No expenses recorded.</td></tr>';
}
function openExpenseModal() {
  if (!canEdit()) return;
  openModal('Add Expense', `
    <label>Title <input id="m-etitle" placeholder="e.g. Office rent"></label>
    <label>Category <select id="m-ecat">${EXP_CATEGORIES.map(c => `<option>${c}</option>`).join('')}</select></label>
    <label>Amount (PKR) <input type="number" id="m-eamount" placeholder="15000"></label>
    <label>Date <input type="date" id="m-edate" value="${TODAY}"></label>
    <label>Note <input id="m-enote" placeholder="Optional"></label>
  `, () => {
    DB.expenses.push({ id: nextId(DB.expenses), title: $('m-etitle').value, category: $('m-ecat').value,
      amount: +$('m-eamount').value || 0, date: $('m-edate').value || TODAY, note: $('m-enote').value });
    DB.activity.unshift({ text: 'Expense added: ' + $('m-etitle').value + ' — ' + fmt(+$('m-eamount').value || 0), time: 'Just now' });
    save(); closeModal(); renderExpenses();
  });
}
function delExpense(id) {
  if (!canDelete()) return;
  if (!confirm('Delete this expense?')) return;
  DB.expenses = DB.expenses.filter(x => x.id !== id);
  save(); renderExpenses();
}

/* ---------- Export (CSV) ---------- */
function csvCell(v) {
  const s = String(v == null ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function downloadCSV(filename, headers, rows) {
  const csv = [headers.join(',')].concat(rows.map(r => r.map(csvCell).join(','))).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function exportCSV(kind) {
  if (kind === 'leads') {
    downloadCSV('leads.csv', ['ID', 'Name', 'Phone', 'Interest', 'Source', 'Status', 'Follow-up'],
      DB.leads.map(l => [l.id, l.name, l.phone, l.interest, l.source, l.status, l.followUp || '']));
  } else if (kind === 'properties') {
    downloadCSV('properties.csv', ['ID', 'Title', 'Area', 'Type', 'Size', 'Price', 'Status'],
      DB.properties.map(p => [p.id, p.title, p.area, p.type, p.size, p.price, p.status]));
  } else if (kind === 'commissions') {
    downloadCSV('commissions.csv', ['ID', 'Deal', 'Agent', 'Sale Price (PKR)', 'Commission %', 'Commission Amount (PKR)', 'Date'],
      DB.commissions.map(c => [c.id, c.deal, c.agent, c.salePrice, c.pct, Math.round(c.salePrice * c.pct / 100), c.date]));
  } else if (kind === 'expenses') {
    downloadCSV('expenses.csv', ['ID', 'Date', 'Title', 'Category', 'Amount (PKR)', 'Note'],
      DB.expenses.map(e => [e.id, e.date, e.title, e.category, e.amount, e.note || '']));
  }
}

/* ---------- Agents ---------- */
function agentStats(name) {
  const deals = DB.commissions.filter(c => c.agent === name);
  return { deals: deals.length, comm: deals.reduce((s, c) => s + c.salePrice * c.pct / 100, 0) };
}
function renderAgents() {
  $('agents-grid').innerHTML = DB.agents.map(a => {
    const s = agentStats(a.name);
    return `<div class="acard"><div class="a-ava">${a.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
      <h4>${a.name}</h4><p>${a.area}<br>${a.phone}</p>
      <div class="a-stats"><span>🏆 ${s.deals} deals closed</span><span>💰 ${fmt(s.comm)}</span></div></div>`;
  }).join('');
}
function openAgentModal() {
  if (!canEdit()) return;
  openModal('Add Agent', `
    <label>Name <input id="m-aname"></label>
    <label>Phone <input id="m-aphone" placeholder="03xx-xxxxxxx"></label>
    <label>Area / Territory <input id="m-aarea" placeholder="e.g. Lahore — DHA"></label>
  `, () => {
    DB.agents.push({ id: nextId(DB.agents), name: $('m-aname').value, phone: $('m-aphone').value, area: $('m-aarea').value });
    save(); closeModal(); renderAgents();
  });
}

/* ---------- Reports ---------- */
function drawChart(id, type, labels, data, label, color) {
  const el = $(id);
  if (!el || typeof Chart === 'undefined') return;
  if (charts[id]) charts[id].destroy();
  charts[id] = new Chart(el, { type, data: { labels, datasets: [{ label, data, backgroundColor: color, borderColor: color, borderWidth: 1 }] },
    options: { responsive: true, plugins: { legend: { display: type !== 'bar' } }, scales: type === 'bar' ? { y: { beginAtZero: true, ticks: { stepSize: 1 } } } : {} } });
}
function renderReports() {
  drawChart('chart-monthly', 'bar', DB.dealsByMonth.labels, DB.dealsByMonth.values, 'Deals', '#2563eb');
  const sources = ['TikTok', 'Facebook', 'WhatsApp', 'Website', 'Walk-in', 'Referral'];
  drawChart('chart-source', 'pie', sources, sources.map(s => DB.leads.filter(l => l.source === s).length), 'Leads',
    ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4']);
  const names = DB.agents.map(a => a.name);
  drawChart('chart-agents', 'bar', names, names.map(n => agentStats(n).comm), 'Commission (PKR)', '#10b981');
}

/* ---------- Settings ---------- */
function renderSettings() {
  $('set-name').value = DB.settings.name;
  $('set-logo').value = DB.settings.logo;
  $('set-wa').value = DB.settings.wa;
}
function saveSettings() {
  if (ROLE !== 'Admin') return;
  DB.settings = { name: $('set-name').value, logo: ($('set-logo').value || 'DE').toUpperCase(), wa: $('set-wa').value };
  save(); applySettings(); alert('Settings saved (demo).');
}
function applySettings() {
  $('brand-name').textContent = DB.settings.name;
  $('brand-logo').textContent = DB.settings.logo;
  $('login-company-name').textContent = DB.settings.name + ' ERP';
  $('login-logo-text').textContent = DB.settings.logo;
}

/* ---------- Modal ---------- */
let modalSaveFn = null;
function openModal(title, bodyHTML, onSave) {
  modalRefresh = null;
  $('modal-title').textContent = title;
  $('modal-body').innerHTML = bodyHTML;
  modalSaveFn = onSave;
  $('modal-save').textContent = 'Save';
  $('modal-save').style.display = '';
  $('modal').classList.remove('hidden');
}
function closeModal() { $('modal').classList.add('hidden'); }
$('modal-save').addEventListener('click', () => { if (modalSaveFn) modalSaveFn(); });
$('modal').addEventListener('click', e => { if (e.target === $('modal')) closeModal(); });

/* ---------- Init ---------- */
function init() { applySettings(); applyRole(); renderDashboard(); }
applySettings();
applyRole();
if (sessionStorage.getItem('erpLoggedIn') === '1') {
  $('login-view').classList.add('hidden');
  $('app-view').classList.remove('hidden');
  init();
}
