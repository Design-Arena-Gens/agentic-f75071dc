const translations = {
  en: {
    nav: {
      dashboard: 'Dashboard',
      sales: 'Sales POS',
      products: 'Products',
      stock: 'Stock',
      suppliers: 'Suppliers',
      reports: 'Reports',
      settings: 'Settings',
    },
    header: {
      title: 'BookWise Console',
      subtitle: 'Manage bilingual bookstore operations seamlessly.',
      role: 'Store Manager',
    },
    search: {
      placeholder: 'Search...',
    },
    status: {
      open: 'Store Open',
      hours: '9:00 AM - 8:00 PM',
    },
    support: {
      help: 'Support',
    },
    dashboard: {
      overview: 'Today at a glance',
      totalSales: 'Total sales',
      transactions: 'Transactions',
      avgCart: 'Average cart',
      loyalty: 'Loyalty members',
      quickInsights: 'Quick insights',
      bestsellers: 'Top performing categories',
      book: 'Book',
      supplies: 'Supplies',
      education: 'Education',
      recentActivity: 'Recent activity',
      restock: 'Restock alert',
      invoice: 'Invoice processed',
      shipment: 'Shipment received',
      report: 'Daily report generated',
      salesPerformance: 'Sales performance',
    },
    sales: {
      title: 'Point of Sale',
      catalog: 'Catalog',
      cart: 'Current cart',
      subtotal: 'Subtotal',
      taxes: 'Taxes (9%)',
      total: 'Total',
      checkout: 'Finalize sale',
      empty: 'Cart is empty',
    },
    products: {
      title: 'Product catalog',
      bookTitle: 'Title',
      author: 'Author',
      category: 'Category',
      language: 'Language',
      price: 'Price',
      stock: 'In stock',
    },
    stock: {
      title: 'Stock overview',
      item: 'Item',
      status: 'Status',
      quantity: 'Quantity',
      reorder: 'Reorder point',
    },
    suppliers: {
      title: 'Supplier network',
      contact: 'Contact',
      nextDelivery: 'Next delivery',
      rating: 'Rating',
      view: 'Open profile',
    },
    reports: {
      title: 'Analytics',
      monthly: 'Monthly revenue',
      conversion: 'Conversion funnel',
      footfall: 'Footfall heatmap',
      download: 'Download full report',
    },
    settings: {
      title: 'Preferences',
      appearance: 'Appearance',
      compact: 'Compact mode',
      notifications: 'Notifications',
      lowStock: 'Low stock alerts',
      dailyDigest: 'Daily email digest',
      integrations: 'Integrations',
      accounting: 'Accounting sync',
      loyalty: 'Loyalty program',
    },
    misc: {
      french: 'French',
      english: 'English',
      ready: 'Ready',
      pending: 'Pending',
      delayed: 'Delayed',
      refill: 'Refill',
      view: 'View',
    },
  },
  fr: {
    nav: {
      dashboard: 'Tableau de bord',
      sales: 'Caisse POS',
      products: 'Produits',
      stock: 'Inventaire',
      suppliers: 'Fournisseurs',
      reports: 'Rapports',
      settings: 'Paramètres',
    },
    header: {
      title: 'Console BookWise',
      subtitle: 'Gérez la librairie bilingue sans effort.',
      role: 'Gestionnaire',
    },
    search: {
      placeholder: 'Rechercher...',
    },
    status: {
      open: 'Magasin ouvert',
      hours: '9h00 - 20h00',
    },
    support: {
      help: 'Assistance',
    },
    dashboard: {
      overview: 'Aperçu du jour',
      totalSales: 'Ventes totales',
      transactions: 'Transactions',
      avgCart: 'Panier moyen',
      loyalty: 'Clients fidèles',
      quickInsights: 'Aperçus rapides',
      bestsellers: 'Meilleures catégories',
      book: 'Livre',
      supplies: 'Fournitures',
      education: 'Scolaire',
      recentActivity: 'Activité récente',
      restock: 'Alerte réapprovisionnement',
      invoice: 'Facture traitée',
      shipment: 'Livraison reçue',
      report: 'Rapport quotidien généré',
      salesPerformance: 'Performance des ventes',
    },
    sales: {
      title: 'Point de vente',
      catalog: 'Catalogue',
      cart: 'Panier courant',
      subtotal: 'Sous-total',
      taxes: 'Taxes (9 %)',
      total: 'Total',
      checkout: 'Finaliser la vente',
      empty: 'Le panier est vide',
    },
    products: {
      title: 'Catalogue produits',
      bookTitle: 'Titre',
      author: 'Auteur',
      category: 'Catégorie',
      language: 'Langue',
      price: 'Prix',
      stock: 'Stock',
    },
    stock: {
      title: 'Vue inventaire',
      item: 'Article',
      status: 'Statut',
      quantity: 'Quantité',
      reorder: 'Seuil réassort',
    },
    suppliers: {
      title: 'Réseau fournisseurs',
      contact: 'Contact',
      nextDelivery: 'Prochaine livraison',
      rating: 'Évaluation',
      view: 'Voir le profil',
    },
    reports: {
      title: 'Analyses',
      monthly: 'Revenu mensuel',
      conversion: 'Tunnel de conversion',
      footfall: 'Affluence',
      download: 'Télécharger le rapport',
    },
    settings: {
      title: 'Préférences',
      appearance: 'Apparence',
      compact: 'Mode compact',
      notifications: 'Notifications',
      lowStock: 'Alertes de stock faible',
      dailyDigest: 'Résumé quotidien par email',
      integrations: 'Intégrations',
      accounting: 'Synchronisation comptable',
      loyalty: 'Programme fidélité',
    },
    misc: {
      french: 'Français',
      english: 'Anglais',
      ready: 'Prêt',
      pending: 'En attente',
      delayed: 'Retardé',
      refill: 'Réassort',
      view: 'Voir',
    },
  },
};

const state = {
  language: 'en',
  activeView: 'dashboard',
  cart: [],
};

const sampleData = {
  metrics: [
    {
      key: 'totalSales',
      value: '4,580 €',
      trend: '+12%',
      direction: 'up',
    },
    {
      key: 'transactions',
      value: '182',
      trend: '+6%',
      direction: 'up',
    },
    {
      key: 'avgCart',
      value: '25.18 €',
      trend: '-3%',
      direction: 'down',
    },
    {
      key: 'loyalty',
      value: '3,412',
      trend: '+18%',
      direction: 'up',
    },
  ],
  topCategories: [
    { labelKey: 'book', amount: '62%' },
    { labelKey: 'supplies', amount: '24%' },
    { labelKey: 'education', amount: '14%' },
  ],
  timeline: [
    {
      icon: 'fa-triangle-exclamation',
      labelKey: 'restock',
      body: 'Les Misérables - 12 units',
      badge: 'warning',
    },
    {
      icon: 'fa-file-invoice',
      labelKey: 'invoice',
      body: 'Cahiers Scolaires - Delta',
      badge: 'info',
    },
    {
      icon: 'fa-truck-ramp-box',
      labelKey: 'shipment',
      body: 'Graphic Novels Batch',
      badge: 'success',
    },
    {
      icon: 'fa-chart-simple',
      labelKey: 'report',
      body: 'Daily KPI Snapshot',
      badge: 'info',
    },
  ],
  products: [
    {
      title: 'Le Petit Prince',
      author: 'A. de Saint-Exupéry',
      category: 'Classic',
      language: 'FR',
      price: 14.9,
      stock: 26,
    },
    {
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      language: 'EN',
      price: 17.5,
      stock: 32,
    },
    {
      title: 'Grammaire Progressive',
      author: 'CLE International',
      category: 'Education',
      language: 'FR',
      price: 29.0,
      stock: 18,
    },
    {
      title: 'Stationery Kit',
      author: 'BookWise',
      category: 'Supplies',
      language: 'EN/FR',
      price: 12.5,
      stock: 54,
    },
  ],
  inventory: [
    {
      item: 'Bilingual Dictionaries',
      status: 'ready',
      quantity: 120,
      reorder: 80,
    },
    {
      item: 'Graph Paper Pads',
      status: 'pending',
      quantity: 32,
      reorder: 40,
    },
    {
      item: 'French Novels Bundle',
      status: 'ready',
      quantity: 64,
      reorder: 50,
    },
    {
      item: 'English Classics',
      status: 'delayed',
      quantity: 12,
      reorder: 30,
    },
  ],
  suppliers: [
    {
      name: 'Éditions Lumière',
      contact: 'contact@lumiere.fr',
      nextDelivery: '16 May',
      rating: '4.8',
      initials: 'EL',
    },
    {
      name: 'Oxford Distributors',
      contact: 'orders@oxforddist.co.uk',
      nextDelivery: '19 May',
      rating: '4.6',
      initials: 'OD',
    },
    {
      name: 'Papeterie Bleu',
      contact: 'support@bleu.com',
      nextDelivery: '22 May',
      rating: '4.2',
      initials: 'PB',
    },
  ],
  monthlySales: [
    { month: 'Jan', value: 48 },
    { month: 'Feb', value: 54 },
    { month: 'Mar', value: 63 },
    { month: 'Apr', value: 51 },
    { month: 'May', value: 68 },
    { month: 'Jun', value: 72 },
  ],
  catalog: [
    { name: 'Le Petit Prince', price: 14.9 },
    { name: 'English Grammar Mastery', price: 21.5 },
    { name: 'Notebook Premium', price: 7.2 },
    { name: 'Atlas Historique', price: 34.0 },
    { name: 'Fountain Pen Set', price: 19.5 },
    { name: 'French Poetry Selection', price: 16.9 },
    { name: 'Children Story Pack', price: 25.0 },
    { name: 'Learning Flashcards', price: 12.0 },
  ],
};

const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const t = (key) => {
  const segments = key.split('.');
  return segments.reduce((acc, part) => acc?.[part], translations[state.language]) ?? key;
};

const formatCurrency = (value) =>
  new Intl.NumberFormat(state.language === 'en' ? 'en-US' : 'fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(value);

const applyStaticTranslations = () => {
  qsa('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  qsa('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
};

const renderDashboard = (container) => {
  container.innerHTML = `
    <div class="grid grid-4">
      ${sampleData.metrics
        .map(
          (metric) => `
        <article class="card kpi">
          <div class="card-header">
            <h3 data-i18n="dashboard.${metric.key}">${t(`dashboard.${metric.key}`)}</h3>
            <span class="trend ${metric.direction}">
              <i class="fa-solid ${metric.direction === 'up' ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'}"></i>
              ${metric.trend}
            </span>
          </div>
          <div class="kpi-value">${metric.value}</div>
          <p class="card-subtitle" data-i18n="dashboard.overview">${t('dashboard.overview')}</p>
        </article>
      `,
        )
        .join('')}
    </div>

    <div class="grid grid-2">
      <article class="card">
        <div class="card-header">
          <h3 data-i18n="dashboard.salesPerformance">${t('dashboard.salesPerformance')}</h3>
        </div>
        <div class="chart">
          ${sampleData.monthlySales
            .map(
              ({ month, value }) => `
            <div class="chart-bar" style="height: ${value + 50}px">
              <span>${value}k</span>
              <label>${month}</label>
            </div>
          `,
            )
            .join('')}
        </div>
      </article>

      <article class="card">
        <div class="card-header">
          <h3 data-i18n="dashboard.quickInsights">${t('dashboard.quickInsights')}</h3>
        </div>
        <div class="grid grid-3">
          ${sampleData.topCategories
            .map(
              ({ labelKey, amount }) => `
            <div class="card" style="background: rgba(37, 99, 235, 0.08); border: none;">
              <p class="card-subtitle" data-i18n="dashboard.${labelKey}">${t(`dashboard.${labelKey}`)}</p>
              <div class="kpi-value">${amount}</div>
            </div>
          `,
            )
            .join('')}
        </div>
        <div class="timeline">
          ${sampleData.timeline
            .map(
              (item) => `
            <div class="timeline-item">
              <i class="fa-solid ${item.icon}"></i>
              <div>
                <strong data-i18n="dashboard.${item.labelKey}">${t(`dashboard.${item.labelKey}`)}</strong>
                <p class="card-subtitle">${item.body}</p>
                <span class="badge ${item.badge}" data-i18n="misc.${item.badge}">${t(`misc.${item.badge}`)}</span>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </article>
    </div>
  `;
};

const renderSales = (container) => {
  container.innerHTML = `
    <div class="pos-layout">
      <section class="card">
        <div class="card-header">
          <h3 data-i18n="sales.catalog">${t('sales.catalog')}</h3>
        </div>
        <div class="product-grid">
          ${sampleData.catalog
            .map(
              (product, index) => `
            <button class="product-card" data-index="${index}">
              <div>
                <h4>${product.name}</h4>
                <p class="card-subtitle">${formatCurrency(product.price)}</p>
              </div>
              <div class="stacked-badges">
                <span>${product.name.split(' ')[0][0]}</span>
                <span>${product.name.split(' ').slice(-1)[0][0]}</span>
              </div>
            </button>
          `,
            )
            .join('')}
        </div>
      </section>
      <aside class="card cart">
        <div class="card-header">
          <h3 data-i18n="sales.cart">${t('sales.cart')}</h3>
          <span class="badge info">${state.cart.length} items</span>
        </div>
        <div class="cart-items">
          ${
            state.cart.length
              ? state.cart
                  .map(
                    (item) => `
              <div class="cart-item">
                <div>
                  <strong>${item.name}</strong>
                  <p class="card-subtitle">x${item.quantity}</p>
                </div>
                <strong>${formatCurrency(item.price * item.quantity)}</strong>
              </div>
            `,
                  )
                  .join('')
              : `<p class="card-subtitle" data-i18n="sales.empty">${t('sales.empty')}</p>`
          }
        </div>
        <div class="cart-summary">
          <div>${t('sales.subtotal')}: <strong>${formatCurrency(calculateSubtotal())}</strong></div>
          <div>${t('sales.taxes')}: <strong>${formatCurrency(calculateSubtotal() * 0.09)}</strong></div>
          <div class="total">${t('sales.total')}: <strong>${formatCurrency(calculateSubtotal() * 1.09)}</strong></div>
        </div>
        <button class="primary-btn" id="checkout-btn" data-i18n="sales.checkout">
          ${t('sales.checkout')}
        </button>
      </aside>
    </div>
  `;

  qsa('.product-card', container).forEach((btn) =>
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.index);
      addToCart(sampleData.catalog[index]);
      renderSales(container);
    }),
  );

  qs('#checkout-btn', container)?.addEventListener('click', () => {
    state.cart = [];
    renderSales(container);
  });
};

const renderProducts = (container) => {
  container.innerHTML = `
    <article class="card">
      <div class="card-header">
        <h3 data-i18n="products.title">${t('products.title')}</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th data-i18n="products.bookTitle">${t('products.bookTitle')}</th>
            <th data-i18n="products.author">${t('products.author')}</th>
            <th data-i18n="products.category">${t('products.category')}</th>
            <th data-i18n="products.language">${t('products.language')}</th>
            <th data-i18n="products.price">${t('products.price')}</th>
            <th data-i18n="products.stock">${t('products.stock')}</th>
          </tr>
        </thead>
        <tbody>
          ${sampleData.products
            .map(
              (item) => `
            <tr>
              <td>${item.title}</td>
              <td>${item.author}</td>
              <td>${item.category}</td>
              <td>${item.language}</td>
              <td>${formatCurrency(item.price)}</td>
              <td>${item.stock}</td>
            </tr>
          `,
            )
            .join('')}
        </tbody>
      </table>
    </article>
  `;
};

const renderStock = (container) => {
  container.innerHTML = `
    <article class="card">
      <div class="card-header">
        <h3 data-i18n="stock.title">${t('stock.title')}</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th data-i18n="stock.item">${t('stock.item')}</th>
            <th data-i18n="stock.status">${t('stock.status')}</th>
            <th data-i18n="stock.quantity">${t('stock.quantity')}</th>
            <th data-i18n="stock.reorder">${t('stock.reorder')}</th>
          </tr>
        </thead>
        <tbody>
          ${sampleData.inventory
            .map(
              (entry) => `
            <tr>
              <td>${entry.item}</td>
              <td><span class="badge ${badgeClass(entry.status)}" data-i18n="misc.${entry.status}">${t(
                `misc.${entry.status}`,
              )}</span></td>
              <td>${entry.quantity}</td>
              <td>${entry.reorder}</td>
            </tr>
          `,
            )
            .join('')}
        </tbody>
      </table>
    </article>
  `;
};

const renderSuppliers = (container) => {
  container.innerHTML = `
    <div class="grid grid-3">
      ${sampleData.suppliers
        .map(
          (supplier) => `
        <article class="card">
          <div class="card-header">
            <h3>${supplier.name}</h3>
            <div class="badge success">${supplier.rating}</div>
          </div>
          <p class="card-subtitle">
            <strong data-i18n="suppliers.contact">${t('suppliers.contact')}:</strong> ${supplier.contact}
          </p>
          <p class="card-subtitle">
            <strong data-i18n="suppliers.nextDelivery">${t('suppliers.nextDelivery')}:</strong> ${supplier.nextDelivery}
          </p>
          <div class="stacked-badges">
            <span>${supplier.initials[0]}</span>
            <span>${supplier.initials[1] ?? supplier.initials[0]}</span>
          </div>
          <button class="primary-btn" style="margin-top: 12px;" data-i18n="suppliers.view">
            ${t('suppliers.view')}
          </button>
        </article>
      `,
        )
        .join('')}
    </div>
  `;
};

const renderReports = (container) => {
  container.innerHTML = `
    <div class="grid grid-3">
      <article class="card">
        <div class="card-header">
          <h3 data-i18n="reports.monthly">${t('reports.monthly')}</h3>
        </div>
        <div class="chart">
          ${sampleData.monthlySales
            .map(
              ({ month, value }) => `
            <div class="chart-bar" style="height: ${value + 40}px">
              <span>${value}k</span>
              <label>${month}</label>
            </div>
          `,
            )
            .join('')}
        </div>
      </article>

      <article class="card">
        <div class="card-header">
          <h3 data-i18n="reports.conversion">${t('reports.conversion')}</h3>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <strong>Store Visits</strong>
            <p class="card-subtitle">5,120</p>
          </div>
          <div class="timeline-item">
            <strong>In-Store Browsing</strong>
            <p class="card-subtitle">3,460</p>
          </div>
          <div class="timeline-item">
            <strong>Purchases</strong>
            <p class="card-subtitle">1,980</p>
          </div>
        </div>
      </article>

      <article class="card">
        <div class="card-header">
          <h3 data-i18n="reports.footfall">${t('reports.footfall')}</h3>
        </div>
        <div class="timeline">
          <div class="timeline-item">
            <strong>Morning</strong>
            <p class="card-subtitle">1,120 visitors</p>
          </div>
          <div class="timeline-item">
            <strong>Afternoon</strong>
            <p class="card-subtitle">2,040 visitors</p>
          </div>
          <div class="timeline-item">
            <strong>Evening</strong>
            <p class="card-subtitle">1,960 visitors</p>
          </div>
        </div>
        <button class="primary-btn" style="margin-top: auto;" data-i18n="reports.download">
          ${t('reports.download')}
        </button>
      </article>
    </div>
  `;
};

const renderSettings = (container) => {
  container.innerHTML = `
    <div class="grid grid-3">
      <article class="card">
        <div class="card-header">
          <h3 data-i18n="settings.appearance">${t('settings.appearance')}</h3>
        </div>
        <label class="card-subtitle" style="display:flex;justify-content:space-between;align-items:center;">
          <span data-i18n="settings.compact">${t('settings.compact')}</span>
          <label class="toggle">
            <input type="checkbox" />
            <span></span>
          </label>
        </label>
      </article>

      <article class="card">
        <div class="card-header">
          <h3 data-i18n="settings.notifications">${t('settings.notifications')}</h3>
        </div>
        <label class="card-subtitle" style="display:flex;justify-content:space-between;align-items:center;">
          <span data-i18n="settings.lowStock">${t('settings.lowStock')}</span>
          <label class="toggle">
            <input type="checkbox" checked />
            <span></span>
          </label>
        </label>
        <label class="card-subtitle" style="display:flex;justify-content:space-between;align-items:center;">
          <span data-i18n="settings.dailyDigest">${t('settings.dailyDigest')}</span>
          <label class="toggle">
            <input type="checkbox" checked />
            <span></span>
          </label>
        </label>
      </article>

      <article class="card">
        <div class="card-header">
          <h3 data-i18n="settings.integrations">${t('settings.integrations')}</h3>
        </div>
        <label class="card-subtitle" style="display:flex;justify-content:space-between;align-items:center;">
          <span data-i18n="settings.accounting">${t('settings.accounting')}</span>
          <label class="toggle">
            <input type="checkbox" />
            <span></span>
          </label>
        </label>
        <label class="card-subtitle" style="display:flex;justify-content:space-between;align-items:center;">
          <span data-i18n="settings.loyalty">${t('settings.loyalty')}</span>
          <label class="toggle">
            <input type="checkbox" checked />
            <span></span>
          </label>
        </label>
      </article>
    </div>
  `;
};

const badgeClass = (status) => {
  switch (status) {
    case 'ready':
      return 'success';
    case 'pending':
      return 'warning';
    case 'delayed':
      return 'warning';
    default:
      return 'info';
  }
};

const calculateSubtotal = () =>
  state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

const addToCart = (product) => {
  const existing = state.cart.find((item) => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
};

const views = {
  dashboard: renderDashboard,
  sales: renderSales,
  products: renderProducts,
  stock: renderStock,
  suppliers: renderSuppliers,
  reports: renderReports,
  settings: renderSettings,
};

const activateView = (viewId) => {
  if (!views[viewId]) return;
  state.activeView = viewId;
  qsa('.nav-item').forEach((btn) =>
    btn.classList.toggle('active', btn.dataset.view === viewId),
  );
  qsa('.view').forEach((section) =>
    section.classList.toggle('active', section.id === viewId),
  );
  const container = qs(`#${viewId}`);
  views[viewId](container);
  applyStaticTranslations();
};

const initNavigation = () => {
  qsa('.nav-item').forEach((btn) =>
    btn.addEventListener('click', () => activateView(btn.dataset.view)),
  );
};

const initLanguageToggle = () => {
  qsa('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => {
      const { lang } = btn.dataset;
      if (lang === state.language) return;
      state.language = lang;
      qsa('.lang-btn').forEach((node) =>
        node.classList.toggle('active', node.dataset.lang === lang),
      );
      activateView(state.activeView);
    }),
  );
};

const init = () => {
  initNavigation();
  initLanguageToggle();
  activateView(state.activeView);
};

document.addEventListener('DOMContentLoaded', init);

