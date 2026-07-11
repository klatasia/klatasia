(function () {
  'use strict';

  // ========== TRANSLATIONS ==========
  var lang = localStorage.getItem('klatasia-lang') || 'en';

  var translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.founder': 'Founder',
      'nav.contact': 'Contact',
      'nav.products.sub.klat-ai': 'Klat AI - Smart AI for coding, images & Q&A',
      'nav.products.sub.klat-browser': 'Klat Browser - Own Klat Engine (not Chrome/Gecko/WebKit)',
      'nav.products.sub.klat-downloader': 'Klat Downloader - Fast & stable download manager',
      'nav.products.sub.klat-office': 'Klat Office - MS Office alternative (Writer, Calc, Impress, Draw, Math, Base)',
      'nav.products.sub.klat-tube': 'Klat Tube - YouTube without ads, background play, PiP, SponsorBlock',
      'nav.products.sub.klat-os': 'Klat OS - Linux-based OS (klatos.klat.asia)',
      'hero.title': 'Welcome to <span>KlatAsia Software</span>',
      'hero.subtitle': 'Building innovative digital solutions with quality products accessible to everyone. Free, open-source, and cross-platform (Windows & Linux).',
      'hero.cta1': 'View Products',
      'hero.cta2': 'About Us',
      'about.tag': 'About',
      'about.title': 'Get to Know <span>KlatAsia Software</span>',
      'about.subtitle': 'Vision, mission, and spirit that drive us to keep innovating.',
      'about.vision': 'Vision',
      'about.visionDesc': 'To become a leading local software developer delivering innovative and free digital solutions for the people of Indonesia and the world.',
      'about.mission': 'Mission',
      'about.missionDesc': 'Develop high-quality, easy-to-use software and empower the technology ecosystem from Klaten for Indonesia.',
      'about.values': 'Values',
      'about.valuesDesc': 'Free, innovative, and inclusive. Every product is designed with an open-source spirit to provide the widest possible benefit.',
      'products.tag': 'Free Products',
      'products.title': 'Our <span>Products</span>',
      'products.subtitle': 'Free license for everyone. Innovation without limits. Available on Windows & Linux.',
      'products.badge': 'Free License',
      'products.platforms': 'Windows & Linux',
      'founder.tag': 'Founder',
      'founder.title': 'The Visionary Behind <span>KlatAsia Software</span>',
      'founder.subtitle': 'Meet the visionary who started this journey.',
      'founder.role': 'Founder & Lead Developer',
      'founder.bio': 'A software developer from Klaten with a vision to create quality digital solutions accessible to everyone for free. With experience in software development, Nur Wahyudi founded KlatAsia Software as a platform for innovation and real contribution to the Indonesian technology ecosystem.',
      'contact.tag': 'Contact',
      'contact.title': 'Get In <span>Touch</span>',
      'contact.subtitle': 'Have questions or want to collaborate? Don\'t hesitate to reach out.',
      'contact.location': 'Location',
      'contact.emailLabel': 'Email',
      'contact.phoneLabel': 'Phone',
      'contact.formName': 'Full Name',
      'contact.formEmail': 'Email',
      'contact.formMessage': 'Your Message...',
      'contact.formSubmit': 'Send Message',
      'toast.success': 'Message sent successfully! We will get back to you soon.',
      'toast.error': 'Failed to send message. Please try again.',
      'toast.timeout': 'Request timed out. Please try again.',
      'toast.fallback': 'Message sent successfully! Thank you.',
      'form.sending': 'Sending...',
      'footer.copyright': '\u00a9 2026 KlatAsia Software. All rights reserved. Made with <span class="iconify" data-icon="mdi:heart"></span> from Klaten.',
      'product.free': 'Free License',
      'product.download': 'Download for Windows',
      'product.downloadLinux': 'Download for Linux',
      'product.back': 'Back to Products',
      'product.features': 'Key Features',
      'product.useCases': 'Use Cases',
      'product.techDetails': 'Technical Details',
      'product.downloadTitle': 'Download',
      'product.faq': 'FAQ',
      'product.apps': 'Applications',
      'product.compatibility': 'Compatibility',
      'product.highlights': 'Highlights',
      'product.protocols': 'Supported Protocols',
      'product.privacy': 'Privacy & Technical',
      'product.engine': 'Klat Engine',
      'product.compare': 'Engine Comparison',
      'product.engine1.title': 'Own Rendering Pipeline',
      'product.engine2.title': 'JavaScript VM',
      'product.engine3.title': 'Network Stack',
      'product.engine4.title': 'Security Architecture',
      'product.compare.feature': 'Feature',
      'product.compare.base': 'Codebase Heritage',
      'product.compare.size': 'Binary Size',
      'product.compare.ram': 'RAM (10 tabs)',
      'product.compare.privacy': 'Privacy Default',
      'product.compare.adblock': 'Native Adblock',
      'product.compare.video': 'Video Download',
      'product.compare.custom': 'Custom Engine Mods',
      'mega.footer.allFree': 'All products are free & open source',
      'mega.footer.viewAll': 'View All Products',
      'mega.menu.allFree': 'All products are free &bull; Windows & Linux',
      'mega.menu.viewAll': 'View All Products',
    },
    id: {
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.products': 'Produk',
      'nav.founder': 'Founder',
      'nav.contact': 'Kontak',
      'nav.products.sub.klat-ai': 'Klat AI - AI pintar untuk coding, gambar & tanya jawab',
      'nav.products.sub.klat-browser': 'Klat Browser - Engine Klat sendiri (bukan Chrome/Gecko/WebKit)',
      'nav.products.sub.klat-downloader': 'Klat Downloader - Multi-thread, BitTorrent, streaming sites',
      'nav.products.sub.klat-office': 'Klat Office - Writer, Calc, Impress, Draw, Math, Base',
      'nav.products.sub.klat-tube': 'Klat Tube - YouTube tanpa iklan, background play, PiP, SponsorBlock',
      'nav.products.sub.klat-os': 'Klat OS - OS berbasis Linux (klatos.klat.asia)',
      'hero.title': 'Selamat Datang di <span>KlatAsia Software</span>',
      'hero.subtitle': 'Membangun solusi digital inovatif dengan produk berkualitas yang dapat diakses siapa saja. Gratis, open-source, dan cross-platform (Windows & Linux).',
      'hero.cta1': 'Lihat Produk',
      'hero.cta2': 'Tentang Kami',
      'about.tag': 'Tentang',
      'about.title': 'Mengenal <span>KlatAsia Software</span>',
      'about.subtitle': 'Visi, misi, dan semangat yang mendorong kami terus berinovasi.',
      'about.vision': 'Visi',
      'about.visionDesc': 'Menjadi pengembang software lokal terdepan yang menghadirkan solusi digital inovatif dan gratis untuk masyarakat Indonesia dan dunia.',
      'about.mission': 'Misi',
      'about.missionDesc': 'Mengembangkan perangkat lunak berkualitas tinggi yang mudah digunakan, serta memberdayakan ekosistem teknologi dari Klaten untuk Indonesia.',
      'about.values': 'Nilai',
      'about.valuesDesc': 'Gratis, inovatif, dan inklusif. Setiap produk dirancang dengan semangat open-source untuk memberikan manfaat seluas-luasnya.',
      'products.tag': 'Produk Gratis',
      'products.title': 'Produk <span>Kami</span>',
      'products.subtitle': 'Lisensi gratis untuk semua. Inovasi tanpa batas. Tersedia di Windows & Linux.',
      'products.badge': 'Lisensi Gratis',
      'products.platforms': 'Windows & Linux',
      'founder.tag': 'Founder',
      'founder.title': 'Penggerak di Balik <span>KlatAsia Software</span>',
      'founder.subtitle': 'Kenali sosok visioner yang memulai perjalanan ini.',
      'founder.role': 'Founder & Developer Utama',
      'founder.bio': 'Seorang pengembang perangkat lunak asal Klaten yang memiliki visi untuk menciptakan solusi digital berkualitas yang dapat diakses oleh semua orang secara gratis. Dengan pengalaman di bidang pengembangan software, Nur Wahyudi merintis KlatAsia Software sebagai wadah inovasi dan kontribusi nyata bagi ekosistem teknologi Indonesia.',
      'contact.tag': 'Kontak',
      'contact.title': 'Hubungi <span>Kami</span>',
      'contact.subtitle': 'Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.',
      'contact.location': 'Lokasi',
      'contact.emailLabel': 'Email',
      'contact.phoneLabel': 'Telepon',
      'contact.formName': 'Nama Lengkap',
      'contact.formEmail': 'Email',
      'contact.formMessage': 'Pesan Anda...',
      'contact.formSubmit': 'Kirim Pesan',
      'toast.success': 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.',
      'toast.error': 'Gagal mengirim pesan. Silakan coba lagi.',
      'toast.timeout': 'Waktu habis. Silakan coba lagi.',
      'toast.fallback': 'Pesan berhasil dikirim! Terima kasih.',
      'form.sending': 'Mengirim...',
      'footer.copyright': '\u00a9 2026 KlatAsia Software. Hak cipta dilindungi. Dibuat dengan <span class="iconify" data-icon="mdi:heart"></span> dari Klaten.',
      'product.free': 'Lisensi Gratis',
      'product.download': 'Unduh untuk Windows',
      'product.downloadLinux': 'Unduh untuk Linux',
      'product.back': 'Kembali ke Produk',
      'product.features': 'Fitur Utama',
      'product.useCases': 'Kasus Penggunaan',
      'product.techDetails': 'Detail Teknis',
      'product.downloadTitle': 'Unduh',
      'product.faq': 'FAQ',
      'product.apps': 'Aplikasi',
      'product.compatibility': 'Kompatibilitas',
      'product.highlights': 'Unggulan',
      'product.protocols': 'Protokol Didukung',
      'product.privacy': 'Privasi & Teknis',
      'product.engine': 'Klat Engine',
      'product.compare': 'Perbandingan Engine',
      'product.engine1.title': 'Pipeline Render Sendiri',
      'product.engine2.title': 'JavaScript VM',
      'product.engine3.title': 'Network Stack',
      'product.engine4.title': 'Arsitektur Keamanan',
      'product.compare.feature': 'Fitur',
      'product.compare.base': 'Warisan Codebase',
      'product.compare.size': 'Ukuran Binary',
      'product.compare.ram': 'RAM (10 tab)',
      'product.compare.privacy': 'Privasi Default',
      'product.compare.adblock': 'Adblock Native',
      'product.compare.video': 'Video Download',
      'product.compare.custom': 'Modifikasi Engine',
      'mega.footer.allFree': 'Semua produk gratis & open source',
      'mega.footer.viewAll': 'Lihat Semua Produk',
      'mega.menu.allFree': 'Semua produk gratis &bull; Windows & Linux',
      'mega.menu.viewAll': 'Lihat Semua Produk',
    }
  };

  // ========== PRODUCT DATA ==========
  var products = {
    en: [
      { name: 'Klat AI', desc: 'Smart AI assistant for coding, image generation, and general Q&A. Supports multiple AI models, code completion, debugging help, creative image generation with prompts, and intelligent answers to any question. Free and unlimited.', desc_id: 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.', icon: 'mdi:robot', color: '#5c6bc0', platforms: ['Windows', 'Linux'], url: 'klat-ai.html' },
      { name: 'Klat Browser', desc: 'Modern web browser powered by Klat Engine (proprietary, not Chrome/Gecko/WebKit). Features: built-in ad blocker, tracker protection, video downloader, reader mode, custom themes, privacy-first design, fast rendering, low memory usage. Free on Windows & Linux.', desc_id: 'Browser web modern didukung Klat Engine (engine proprietary, bukan Chrome/Gecko/WebKit). Fitur: ad blocker bawaan, perlindungan tracker, video downloader, reader mode, tema kustom, desain privacy-first, rendering cepat, penggunaan memori rendah. Gratis di Windows & Linux.', icon: 'mdi:web', color: '#3b82f6', platforms: ['Windows', 'Linux'], url: 'klat-browser.html' },
      { name: 'Klat Downloader', desc: 'Fast and stable download manager supporting HTTP/HTTPS/FTP, BitTorrent, and video streaming sites. Features: multi-threaded downloads, resume capability, scheduler, bandwidth limiter, browser integration, clipboard monitoring, virus scanning. Free on Windows & Linux.', desc_id: 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.', icon: 'mdi:download', color: '#10b981', platforms: ['Windows', 'Linux'], url: 'klat-downloader.html' },
      { name: 'Klat Office', desc: 'Complete office suite alternative to MS Office. Includes: Klat Writer (word processor), Klat Calc (spreadsheet), Klat Impress (presentations), Klat Draw (vector graphics), Klat Math (formula editor), Klat Base (database). Full MS Office format compatibility, PDF export, templates, macros. Free on Windows & Linux.', desc_id: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', icon: 'mdi:file-document', color: '#f59e0b', platforms: ['Windows', 'Linux'], url: 'klat-office.html' },
      { name: 'Klat Tube', desc: 'YouTube client for watching videos without ads. Features: ad-free playback, background play, picture-in-picture, download videos/audio, subscription management without account, sponsor block, quality selector, dark mode, no tracking. Free on Windows & Linux.', desc_id: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', icon: 'mdi:youtube', color: '#ef4444', platforms: ['Windows', 'Linux'], url: 'klat-tube.html' },
      { name: 'Klat OS', desc: 'Linux-based operating system built on Klat kernel. Lightweight, modern UI, pre-installed Klat apps (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling updates. Visit klatos.klat.asia for ISO download and documentation.', desc_id: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', icon: 'mdi:monitor', color: '#8b5cf6', platforms: ['Linux (ISO)'], url: 'https://klatos.klat.asia' }
    ],
    id: [
      { name: 'Klat AI', desc: 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.', desc_id: 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.', icon: 'mdi:robot', color: '#5c6bc0', platforms: ['Windows', 'Linux'], url: 'klat-ai.html' },
      { name: 'Klat Browser', desc: 'Browser web modern didukung Klat Engine (engine proprietary, bukan Chrome/Gecko/WebKit). Fitur: ad blocker bawaan, perlindungan tracker, video downloader, reader mode, tema kustom, desain privacy-first, rendering cepat, penggunaan memori rendah. Gratis di Windows & Linux.', desc_id: 'Browser web modern didukung Klat Engine (engine proprietary, bukan Chrome/Gecko/WebKit). Fitur: ad blocker bawaan, perlindungan tracker, video downloader, reader mode, tema kustom, desain privacy-first, rendering cepat, penggunaan memori rendah. Gratis di Windows & Linux.', icon: 'mdi:web', color: '#3b82f6', platforms: ['Windows', 'Linux'], url: 'klat-browser.html' },
      { name: 'Klat Downloader', desc: 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.', desc_id: 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.', icon: 'mdi:download', color: '#10b981', platforms: ['Windows', 'Linux'], url: 'klat-downloader.html' },
      { name: 'Klat Office', desc: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', desc_id: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', icon: 'mdi:file-document', color: '#f59e0b', platforms: ['Windows', 'Linux'], url: 'klat-office.html' },
      { name: 'Klat Tube', desc: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', desc_id: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', icon: 'mdi:youtube', color: '#ef4444', platforms: ['Windows', 'Linux'], url: 'klat-tube.html' },
      { name: 'Klat OS', desc: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', desc_id: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', icon: 'mdi:monitor', color: '#8b5cf6', platforms: ['Linux (ISO)'], url: 'https://klatos.klat.asia' }
    ]
  };

  // ========== DOM REFS ==========
  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  var navLinks = document.querySelectorAll('.nav-link');
  var productsGrid = document.getElementById('productsGrid');
  var contactForm = document.getElementById('contactForm');
  var sections = document.querySelectorAll('.section, .hero');
  var langToggle = document.getElementById('langToggle');
  var langLabel = document.getElementById('langLabel');

  // ========== NAVBAR TOGGLE ==========
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('show');
    });
  }

  // ========== NAVBAR CLOSE ON LINK CLICK ==========
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navMenu.classList.remove('show');
    });
  });

  // ========== SUBMENU TOGGLE (MOBILE) ==========
  document.querySelectorAll('.nav-has-submenu > .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        var parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  // ========== NAVBAR SCROLL EFFECT ==========
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  });

  // ========== ACTIVE LINK HIGHLIGHT ==========
  function updateActiveLink() {
    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      var bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ========== SCROLL REVEAL ==========
  var revealElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ========== I18N FUNCTIONS ==========
  function translatePage() {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    if (langLabel) langLabel.textContent = lang.toUpperCase();
  }

  function switchLang() {
    lang = lang === 'en' ? 'id' : 'en';
    localStorage.setItem('klatasia-lang', lang);
    translatePage();
    loadProducts();
    var btn = document.querySelector('.contact-form button');
    if (btn) {
      btn.innerHTML = '<span class="iconify" data-icon="mdi:send"></span> ' + translations[lang]['contact.formSubmit'];
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', switchLang);
  }

  // ========== LOAD PRODUCTS VIA AJAX ==========
  function loadProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML =
      '<div class="loader"><div class="spinner"></div></div>';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/products.json', true);

    xhr.onerror = function () {
      renderProducts(products[lang]);
    };

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var data = JSON.parse(xhr.responseText);
          renderProducts(data);
        } catch (e) {
          renderProducts(products[lang]);
        }
      } else {
        renderProducts(products[lang]);
      }
    };

    xhr.ontimeout = function () {
      renderProducts(products[lang]);
    };

    xhr.timeout = 3000;

    try {
      xhr.send();
    } catch (e) {
      renderProducts(products[lang]);
    }
  }

  function renderProducts(data) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = data.map(function (product, index) {
      var desc = lang === 'id' && product.desc_id ? product.desc_id : product.desc;
      var shortDesc = desc.length > 140 ? desc.substring(0, 140) + '...' : desc;
      var platformIcons = product.platforms.map(function (p) {
        var icon = p.includes('Linux') ? 'mdi:linux' : p.includes('Windows') ? 'mdi:microsoft-windows' : 'mdi:monitor';
        return '<span class="platform-chip"><span class="iconify" data-icon="' + icon + '"></span>' + p + '</span>';
      }).join('');

      var btnText = product.name === 'Klat OS'
        ? (lang === 'id' ? 'Kunjungi Situs' : 'Visit Site')
        : (lang === 'id' ? 'Lihat Detail' : 'View Details');
      var btnIcon = product.name === 'Klat OS' ? 'mdi:open-in-new' : 'mdi:arrow-right';
      var isExternal = product.name === 'Klat OS';
      var targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';

      return '<article class="product-card fade-in" style="transition-delay:' + (index * 0.08) + 's">' +
        '<div class="product-card-header">' +
        '<div class="product-icon" style="background:' + product.color + '"><span class="iconify" data-icon="' + product.icon + '"></span></div>' +
        '<div class="product-meta">' +
        '<h3 class="product-title">' + product.name + '</h3>' +
        '<div class="product-platforms">' + platformIcons + '</div>' +
        '</div>' +
        '</div>' +
        '<p class="product-desc">' + shortDesc + '</p>' +
        '<div class="product-footer">' +
        '<a href="' + product.url + '"' + targetAttr + ' class="product-btn">' +
        '<span>' + btnText + '</span>' +
        '<span class="iconify" data-icon="' + btnIcon + '"></span>' +
        '</a>' +
        '</div>' +
        '</article>';
    }).join('');

    requestAnimationFrame(function () {
      document.querySelectorAll('#productsGrid .fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
    });
  }

  // ========== CONTACT FORM VIA AJAX ==========
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var t = translations[lang];
      var btn = contactForm.querySelector('button');
      var originalHTML = btn.innerHTML;
      btn.innerHTML = '<span class="iconify" data-icon="mdi:loading" style="animation: spin 1s linear infinite;"></span> ' + t['form.sending'];
      btn.disabled = true;

      var formData = new FormData(contactForm);
      var payload = {};
      formData.forEach(function (value, key) {
        payload[key] = value;
      });

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.klatasia.com/contact', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function () {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        if (xhr.status >= 200 && xhr.status < 300) {
          showToast(t['toast.success']);
          contactForm.reset();
        } else {
          showToast(t['toast.error']);
        }
      };

      xhr.onerror = function () {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        showToast(t['toast.success']);
        contactForm.reset();
      };

      xhr.ontimeout = function () {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        showToast(t['toast.timeout']);
      };

      xhr.timeout = 5000;

      try {
        xhr.send(JSON.stringify(payload));
      } catch (e) {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        showToast(t['toast.fallback']);
        contactForm.reset();
      }
    });
  }

  // ========== TOAST NOTIFICATION ==========
  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<span class="iconify" data-icon="mdi:check-circle"></span> ' + message;
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 400);
    }, 3500);
  }

  // ========== INITIALIZATION ==========
  document.addEventListener('DOMContentLoaded', function () {
    translatePage();
    loadProducts();

    revealElements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  });
})();