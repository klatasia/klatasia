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
      'nav.products.sub.klat-ai': 'Klat AI',
      'nav.products.sub.klat-browser': 'Klat Browser',
      'nav.products.sub.klat-downloader': 'Klat Downloader',
      'nav.products.sub.klat-office': 'Klat Office',
      'nav.products.sub.klat-tube': 'Klat Tube',
      'nav.products.sub.klat-os': 'Klat OS',
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
      'nav.products.sub.klat-kasir': 'Klat Kasir',
      'hero.stat1': 'Products',
      'hero.stat2': 'Platforms',
      'hero.stat3': 'Free License',
      'product.featuresTitle': 'Powerful <span>Capabilities</span>',
      'product.useCasesTitle': 'Perfect for <span>Every Workflow</span>',
      'product.techTitle': 'Built for <span>Developers</span>',
      'product.downloadWin': 'Download for Windows',
      'product.freeLicense': 'Completely free \u2022 Open source (MIT) \u2022 No account required \u2022 No telemetry',
      'product.faqTitle': 'Frequently Asked <span>Questions</span>',
      'product.viewSource': 'View Source',
      'product.protocolsTitle': 'Universal <span>Compatibility</span>',
      'product.docs': 'Documentation',
      'product.downloadISO': 'Download x86_64 ISO',
      'product.downloadARM': 'Download ARM64 ISO',
      'product.downloadVM': 'Download for VirtualBox',
      'product.downloadPortable': 'Portable Version',
      'product.ai.desc': 'Smart AI assistant for coding, image generation, and general Q&A. Supports multiple AI models, code completion, debugging help, creative image generation with prompts, and intelligent answers to any question. Free and unlimited.',
      'product.ai.feat1.title': 'Code Assistant',
      'product.ai.feat1.desc': 'Intelligent code completion, debugging help, refactoring suggestions, and multi-language support for Python, JavaScript, TypeScript, and more.',
      'product.ai.feat2.title': 'Image Generation',
      'product.ai.feat2.desc': 'Create stunning images from text prompts with multiple AI models. Support for styles, aspect ratios, and iterative refinement.',
      'product.ai.feat3.title': 'General Q&A',
      'product.ai.feat3.desc': 'Answer questions on any topic - science, history, creative writing, analysis, translation, and more with citations.',
      'product.ai.feat4.title': 'Multi-Model Support',
      'product.ai.feat4.desc': 'Switch between different AI models (GPT, Claude, Llama, local models) based on your needs and privacy requirements.',
      'product.ai.feat5.title': 'Privacy First',
      'product.ai.feat5.desc': 'Run models locally on your device. No data sent to cloud unless you choose cloud models. Full offline capability.',
      'product.ai.feat6.title': 'API Integration',
      'product.ai.feat6.desc': 'REST API and Python SDK for integrating AI capabilities into your own applications and workflows.',
      'product.ai.use1.title': 'Software Development',
      'product.ai.use1.desc': 'Code generation, debugging, code review, documentation writing, and learning new frameworks.',
      'product.ai.use2.title': 'Content Creation',
      'product.ai.use2.desc': 'Blog posts, marketing copy, social media content, creative writing, and translation.',
      'product.ai.use3.title': 'Data Analysis',
      'product.ai.use3.desc': 'SQL queries, data visualization code, statistical analysis, and insights generation.',
      'product.ai.use4.title': 'Learning & Education',
      'product.ai.use4.desc': 'Explain complex concepts, practice coding, language learning, and homework assistance.',
      'product.ai.tech1.title': 'Supported Models',
      'product.ai.tech2.title': 'System Requirements',
      'product.ai.tech3.title': 'Local Inference',
      'product.ai.faq1.q': 'Is Klat AI completely free?',
      'product.ai.faq1.a': 'Yes! Klat AI is 100% free and open source (MIT license). No subscriptions, no usage limits, no hidden costs. Cloud models require your own API keys.',
      'product.ai.faq2.q': 'Can I run it offline?',
      'product.ai.faq2.a': 'Absolutely. Download local models (Llama, Mistral, CodeLlama) and use Klat AI completely offline. Perfect for privacy-sensitive work.',
      'product.ai.faq3.q': 'Which programming languages are supported?',
      'product.ai.faq3.a': 'All major languages: Python, JavaScript, TypeScript, Go, Rust, C++, Java, C#, PHP, Ruby, Swift, Kotlin, and many more.',
      'product.ai.faq4.q': 'How do I update Klat AI?',
      'product.ai.faq4.a': 'Windows installer has auto-update. Linux AppImage updates via AppImageUpdate. Or download latest from GitHub releases.',
      'product.ai.faq5.q': 'Can I use my own API keys?',
      'product.ai.faq5.a': 'Yes! Add your OpenAI, Anthropic, or other API keys in Settings to use cloud models alongside local ones.',
      'product.ai.faq6.q': 'Is my code/data sent anywhere?',
      'product.ai.faq6.a': 'Only if you use cloud models. Local models run entirely on your machine. No telemetry, no data collection, ever.',
      'product.office.desc': 'Complete office suite alternative to MS Office. Includes Writer, Calc, Impress, Draw, Math, and Base. Full MS Office format compatibility, PDF export, templates, macros. Free on Windows & Linux.',
      'product.office.writer.desc': 'Word processor with styles, templates, mail merge, track changes, comments, TOC, indexes, and full .docx/.odt compatibility.',
      'product.office.writer.f1': 'Advanced formatting & styles',
      'product.office.writer.f2': 'Mail merge & form letters',
      'product.office.writer.f3': 'Track changes & comments',
      'product.office.writer.f4': 'Master documents & subdocs',
      'product.office.calc.desc': 'Spreadsheet with 500+ functions, pivot tables, charts, conditional formatting, solver, scenarios, and full .xlsx/.ods support.',
      'product.office.calc.f1': '500+ financial/statistical functions',
      'product.office.calc.f2': 'Pivot tables & charts',
      'product.office.calc.f3': 'Solver & goal seek',
      'product.office.calc.f4': 'Multi-threaded calculation',
      'product.office.impress.desc': 'Presentation software with animations, transitions, master slides, presenter view, and full .pptx/.odp compatibility.',
      'product.office.impress.f1': 'Animations & slide transitions',
      'product.office.impress.f2': 'Master slides & layouts',
      'product.office.impress.f3': 'Presenter view & remote',
      'product.office.impress.f4': 'Export to PDF, video, images',
      'product.office.draw.desc': 'Vector graphics editor for diagrams, flowcharts, org charts, posters. Layers, connectors, 3D objects, SVG/PDF export.',
      'product.office.draw.f1': 'Flowcharts & diagrams',
      'product.office.draw.f2': 'Smart connectors & glue points',
      'product.office.draw.f3': '3D objects & effects',
      'product.office.draw.f4': 'SVG, PDF, EMF export',
      'product.office.math.desc': 'Formula editor with point-and-click interface, LaTeX import/export, MathML support. Integrates with all apps.',
      'product.office.math.f1': 'WYSIWYG equation editing',
      'product.office.math.f2': 'LaTeX & MathML import/export',
      'product.office.math.f3': 'Symbol catalog & templates',
      'product.office.math.f4': 'Inline & display modes',
      'product.office.base.desc': 'Database frontend with forms, reports, queries, SQL view. HSQLDB embedded, MySQL/PostgreSQL/JDBC/ODBC connectivity.',
      'product.office.base.f1': 'Forms & reports designer',
      'product.office.base.f2': 'Visual query builder',
      'product.office.base.f3': 'External DB connectivity',
      'product.office.base.f4': 'Macro & script automation',
      'product.office.use1.title': 'Document Creation',
      'product.office.use1.desc': 'Professional documents, reports, letters with advanced formatting, mail merge, and collaboration tools.',
      'product.office.use2.title': 'Data Analysis',
      'product.office.use2.desc': 'Complex spreadsheets, pivot tables, charts, statistical functions, and solver for business intelligence.',
      'product.office.use3.title': 'Presentations',
      'product.office.use3.desc': 'Stunning slides with animations, transitions, master templates, and presenter view for conferences.',
      'product.office.use4.title': 'Diagrams & Graphics',
      'product.office.use4.desc': 'Flowcharts, org charts, technical diagrams, posters with layers, connectors, and 3D effects.',
      'product.office.tech1.title': 'Performance',
      'product.office.tech2.title': 'Extensibility',
      'product.office.tech3.title': 'Collaboration',
      'product.office.tech4.title': 'Accessibility',
      'product.office.faq1.q': 'Is Klat Office compatible with Microsoft Office?',
      'product.office.faq1.a': 'Yes! Klat Office opens, edits, and saves .docx, .xlsx, .pptx files with high fidelity. Complex formatting, macros, and advanced features may have minor differences.',
      'product.office.faq2.q': 'Can I use VBA macros?',
      'product.office.faq2.a': 'Klat Office supports Basic macros (similar to VBA) and Python/JavaScript. VBA macros need conversion. Basic macros run natively; use the macro recorder to port logic.',
      'product.office.faq3.q': 'Does it support collaborative editing?',
      'product.office.faq3.a': 'Real-time co-editing via Nextcloud/ownCloud integration. Track changes and comments work offline. For Google Docs-style live editing, use the web version (coming soon).',
      'product.office.faq4.q': 'Can I install only Writer?',
      'product.office.faq4.a': 'The installer lets you choose components. Minimum install (Writer only) is ~80 MB. Flatpak/AppImage are monolithic but sandboxed.',
      'product.office.faq5.q': 'Is there a mobile version?',
      'product.office.faq5.a': 'Not yet. Klat Office Viewer for Android (read-only) is in beta. Full editing on mobile planned for 2027. Use web/cloud alternatives for now.',
      'product.office.faq6.q': 'How do I get templates?',
      'product.office.faq6.a': 'File \u2192 New \u2192 Templates. Built-in templates + online repository (templates.klatasia.com). Community templates in .otp/.ots/.ott format.',
      'product.tube.desc': 'YouTube client for watching videos without ads. Features: ad-free playback, background play, picture-in-picture, download videos/audio, subscription management without account, SponsorBlock, quality selector, dark mode, no tracking. Free on Windows & Linux.',
      'product.tube.feat1.title': 'Ad-Free Experience',
      'product.tube.feat1.desc': 'Blocks all YouTube ads automatically - pre-roll, mid-roll, banner, and overlay ads. Watch uninterrupted.',
      'product.tube.feat2.title': 'Background Playback',
      'product.tube.feat2.desc': 'Play videos with screen off or while using other apps. Perfect for music, podcasts, and long-form content.',
      'product.tube.feat3.title': 'Picture-in-Picture',
      'product.tube.feat3.desc': 'Float video window over other apps. Resize, move, and continue watching while multitasking.',
      'product.tube.feat4.title': 'Download Videos & Audio',
      'product.tube.feat4.desc': 'Save videos in up to 8K quality or extract audio as MP3/OGG. Batch download playlists and channels.',
      'product.tube.feat5.title': 'SponsorBlock Integration',
      'product.tube.feat5.desc': 'Automatically skip sponsorships, intros, outros, reminders, and filler. Community-powered segments.',
      'product.tube.feat6.title': 'No Account Required',
      'product.tube.feat6.desc': 'Manage subscriptions, watch later, and history locally. Import/export OPML. Zero tracking, zero Google account needed.',
      'product.tube.feat7.title': 'Customizable UI',
      'product.tube.feat7.desc': 'Dark/light themes, accent colors, compact mode, theater mode, custom CSS. Make it yours.',
      'product.tube.feat8.title': 'Privacy First',
      'product.tube.feat8.desc': 'No telemetry, no analytics, no data collection. Proxy requests through Invidious/Piped instances optionally.',
      'product.tube.use1.title': 'Music & Podcasts',
      'product.tube.use1.desc': 'Background playback lets you listen with screen off. Download playlists for offline listening.',
      'product.tube.use2.title': 'Multitasking',
      'product.tube.use2.desc': 'PiP mode keeps video visible while you work, browse, or chat. Resizable floating window.',
      'product.tube.use3.title': 'Offline Archive',
      'product.tube.use3.desc': 'Download tutorials, lectures, documentaries for offline viewing. Organize with custom tags.',
      'product.tube.use4.title': 'Privacy Conscious',
      'product.tube.use4.desc': 'No Google account, no tracking, no watch history sent to YouTube. Local subscriptions only.',
      'product.tube.tech1.title': 'Supported Sources',
      'product.tube.tech2.title': 'Video Quality',
      'product.tube.tech3.title': 'Audio Formats',
      'product.tube.tech4.title': 'System Requirements',
      'product.tube.faq1.q': 'Is Klat Tube legal?',
      'product.tube.faq1.a': 'Yes. Klat Tube uses public Invidious/Piped instances to fetch YouTube content. It\'s a client, not a scraper. Downloading for personal use falls under fair use in most jurisdictions.',
      'product.tube.faq2.q': 'Can I sign in with my Google account?',
      'product.tube.faq2.a': 'No, and that\'s by design. Klat Tube stores subscriptions locally. Import/export OPML to migrate from/to other clients or YouTube.',
      'product.tube.faq3.q': 'Does it work with YouTube Premium features?',
      'product.tube.faq3.a': 'Klat Tube provides ad-free, background play, PiP, and downloads for FREE - features YouTube locks behind Premium.',
      'product.tube.faq4.q': 'Can I use my own Invidious/Piped instance?',
      'product.tube.faq4.a': 'Yes! Go to Settings \u2192 Instance and enter your custom instance URL. Supports both Invidious and Piped APIs.',
      'product.tube.faq5.q': 'How do I update?',
      'product.tube.faq5.a': 'Windows: auto-update notification. Linux AppImage: use AppImageUpdate or re-download. Flatpak: system update. GitHub Releases always have latest.',
      'product.tube.faq6.q': 'Does it support live streams?',
      'product.tube.faq6.a': 'Yes! Watch live streams with chat (read-only), DVR controls, and quality selection. Chat replay available for past streams.',
      'product.downloader.desc': 'Fast and stable download manager supporting HTTP/HTTPS/FTP, BitTorrent, and video streaming sites. Features: multi-threaded downloads, resume capability, scheduler, bandwidth limiter, browser integration, clipboard monitoring, virus scanning. Free on Windows & Linux.',
      'product.dl.feat1.title': 'Multi-Threaded Downloads',
      'product.dl.feat1.desc': 'Split files into up to 64 segments for maximum speed. Dynamic segment allocation adapts to network conditions.',
      'product.dl.feat2.title': 'Resume & Recovery',
      'product.dl.feat2.desc': 'Automatic resume on connection loss, power failure, or system crash. Checksum verification ensures file integrity.',
      'product.dl.feat3.title': 'BitTorrent Support',
      'product.dl.feat3.desc': 'Full BitTorrent client built-in. Magnet links, DHT, PEX, encryption, selective file download, sequential download for media.',
      'product.dl.feat4.title': 'Smart Scheduler',
      'product.dl.feat4.desc': 'Queue downloads for off-peak hours. Start/stop based on time, network type, battery level, or custom triggers.',
      'product.dl.feat5.title': 'Bandwidth Limiter',
      'product.dl.feat5.desc': 'Global and per-download speed limits. Schedule limits (unlimited at night, 500 KB/s during work hours).',
      'product.dl.feat6.title': 'Browser Integration',
      'product.dl.feat6.desc': 'Chrome, Firefox, Edge extensions. Right-click \u2192 "Download with Klat". Auto-intercept downloads.',
      'product.dl.feat7.title': 'Clipboard Monitoring',
      'product.dl.feat7.desc': 'Auto-detect URLs in clipboard. Smart filtering for video/audio/page links. One-click add to queue.',
      'product.dl.feat8.title': 'Virus Scanning',
      'product.dl.feat8.desc': 'Integrate with Windows Defender, ClamAV, or VirusTotal API. Auto-scan completed downloads. Quarantine suspicious files.',
      'product.dl.feat9.title': 'Video Site Support',
      'product.dl.feat9.desc': 'Download from YouTube, Vimeo, Dailymotion, Twitch, Twitter, Instagram, TikTok, and 1000+ sites via yt-dlp backend.',
      'product.dl.feat10.title': 'Protocol Support',
      'product.dl.feat10.desc': 'HTTP/HTTPS, FTP/FTPS, SFTP, BitTorrent, Metalink, Magnet links. Proxy support (HTTP, SOCKS4/5).',
      'product.dl.feat11.title': 'Advanced Options',
      'product.dl.feat11.desc': 'Custom headers, cookies, auth, user-agent. Post-download actions (run script, extract, move). Categories & tags.',
      'product.dl.feat12.title': 'System Tray & Notifications',
      'product.dl.feat12.desc': 'Minimize to tray. Desktop notifications on completion. Speed graph in tray tooltip. Boss key support.',
      'product.dl.use1.title': 'Large File Downloads',
      'product.dl.use1.desc': 'ISO images, game installers, datasets. Multi-threading maximizes your bandwidth. Resume survives any interruption.',
      'product.dl.use2.title': 'Video Archiving',
      'product.dl.use2.desc': 'Download from 1000+ sites. Batch download playlists/channels. Auto-organize by creator, date, quality.',
      'product.dl.use3.title': 'Torrent Management',
      'product.dl.use3.desc': 'Lightweight BitTorrent client. Selective file download, sequential for streaming, RSS auto-download.',
      'product.dl.use4.title': 'Server & FTP',
      'product.dl.use4.desc': 'SFTP/FTP support with key auth. Mirror directories. Sync with remote servers. Bandwidth scheduling.',
      'product.dl.faq1.q': 'How many segments can I use?',
      'product.dl.faq1.a': 'Up to 64 segments per file. Default is 8. More segments = faster on high-latency connections, but diminishing returns after 16-32.',
      'product.dl.faq2.q': 'Can it download from YouTube?',
      'product.dl.faq2.a': 'Yes! Paste any YouTube URL. Uses yt-dlp backend supporting 1000+ sites. Choose quality, format, audio-only. Subtitles included.',
      'product.dl.faq3.q': 'Does it work with private trackers?',
      'product.dl.faq3.a': 'Yes. Add tracker cookies in settings. Supports passkey in URL. Announce interval respect. DHT/PEX can be disabled per-torrent.',
      'product.dl.faq4.q': 'How does clipboard monitoring work?',
      'product.dl.faq4.a': 'Enable in Settings \u2192 General. Klat monitors clipboard for URLs. Smart filter detects video/audio/page links. Notification asks to add to queue.',
      'product.dl.faq5.q': 'Can I limit speed on schedule?',
      'product.dl.faq5.a': 'Yes! Settings \u2192 Scheduler \u2192 Speed Limits. Example: 100 KB/s 9 AM - 6 PM, unlimited 6 PM - 9 AM. Per-download or global.',
      'product.dl.faq6.q': 'Is portable version fully functional?',
      'product.dl.faq6.a': 'Yes. All features work. Settings stored in app folder. Browser extensions need separate install. No admin rights needed.',
      'product.browser.desc': 'Fast, lightweight browser powered by Klat Engine - not Chromium, Gecko, or WebKit. Significantly more RAM-friendly with extensive features including vertical tabs, built-in adblock, split view, sidebar apps, reader mode, and more. Free and open source.',
      'product.browser.feat1.title': 'Ultra Lightweight',
      'product.browser.feat1.desc': 'Klat Engine uses ~70% less RAM than Chromium-based browsers. Runs smoothly on 2GB RAM devices. Perfect for older hardware and low-spec devices.',
      'product.browser.feat2.title': 'Vertical Tabs & Split View',
      'product.browser.feat2.desc': 'Vertical tab sidebar for better tab management. Split view lets you view two pages side-by-side. Perfect for research, coding, and multitasking.',
      'product.browser.feat3.title': 'Sidebar Apps',
      'product.browser.feat3.desc': 'Built-in sidebar with AI assistant, calculator, notes, translator, calendar, and more. Add custom web apps. Access tools without leaving your current page.',
      'product.browser.feat4.title': 'Reader Mode & Distraction-Free',
      'product.browser.feat4.desc': 'One-click reader mode strips ads, sidebars, and clutter. Customizable fonts, themes, text-to-speech, and auto-scroll for comfortable reading.',
      'product.browser.feat5.title': 'Built-in AdBlock & Privacy',
      'product.browser.feat5.desc': 'uBlock Origin compatible ad/tracker blocking built-in. No extensions needed. Fingerprinting protection, cookie auto-delete, HTTPS-first, and strict privacy controls.',
      'product.browser.feat6.title': 'Chrome Extension Support',
      'product.browser.feat6.desc': 'Full WebExtensions API support. Install extensions from Chrome Web Store. Compatible with uBlock Origin, Bitwarden, Dark Reader, Vimium, and thousands more.',
      'product.browser.feat7.title': 'Mouse Gestures & Keyboard Shortcuts',
      'product.browser.feat7.desc': 'Customizable mouse gestures for navigation, tabs, and actions. Vimium-style keyboard shortcuts. Fully customizable keybindings for power users.',
      'product.browser.feat8.title': 'Offline Translator',
      'product.browser.feat8.desc': 'Built-in offline translation for 100+ languages. No cloud required - translations happen locally. Select text or translate entire pages instantly.',
      'product.browser.feat9.title': 'Picture-in-Picture & Media Controls',
      'product.browser.feat9.desc': 'Float any video in Picture-in-Picture mode. Global media controls in toolbar. Background audio playback. Video speed controller and screenshot tool.',
      'product.browser.feat10.title': 'Integrated Download Manager',
      'product.browser.feat10.desc': 'Multi-threaded download accelerator built-in. Pause/resume, scheduled downloads, video detection, clipboard monitoring, and malware scanning integration.',
      'product.browser.feat11.title': 'Deep Customization',
      'product.browser.feat11.desc': 'Complete UI theming - colors, spacing, density, animations. Custom CSS support. Toolbar customization. Density modes: compact, normal, touch-friendly.',
      'product.browser.feat12.title': 'Sync & Backup',
      'product.browser.feat12.desc': 'End-to-end encrypted sync across devices. Sync tabs, bookmarks, history, passwords, settings, and extensions. Self-hosted sync server option for privacy.',
      'product.browser.use1.title': 'Low-Spec & Old Hardware',
      'product.browser.use1.desc': 'Runs smoothly on 2GB RAM, old CPUs, and limited storage. Perfect for reviving old laptops and budget devices.',
      'product.browser.use2.title': 'Power Users & Multitaskers',
      'product.browser.use2.desc': 'Vertical tabs, split view, sidebar apps, mouse gestures, and keyboard shortcuts for maximum productivity.',
      'product.browser.use3.title': 'Privacy Enthusiasts',
      'product.browser.use3.desc': 'No telemetry, no tracking, built-in adblock, fingerprinting protection, and self-hosted sync option. Your data stays yours.',
      'product.browser.use4.title': 'Readers & Researchers',
      'product.browser.use4.desc': 'Reader mode, text-to-speech, offline translation, split view for comparing sources, and distraction-free reading.',
      'product.browser.use5.title': 'Developers',
      'product.browser.use5.desc': 'DevTools compatible with Chrome DevTools protocol. Vertical tabs for docs + code. Sidebar for API docs, regex tester, color picker.',
      'product.browser.use6.title': 'Portable & USB Usage',
      'product.browser.use6.desc': 'Fully portable version runs from USB drive. No installation needed. Carry your browser, bookmarks, and extensions anywhere.',
      'product.browser.tech1.title': 'Klat Engine (Custom Engine)',
      'product.browser.tech2.title': 'System Requirements',
      'product.browser.tech3.title': 'Web Compatibility',
      'product.browser.tech4.title': 'Performance & Memory',
      'product.browser.tech5.title': 'Privacy & Security',
      'product.browser.tech6.title': 'Unique Klat Engine Features',
      'product.browser.faq1.q': 'Is Klat Browser really not based on Chromium/Firefox/WebKit?',
      'product.browser.faq1.a': 'Yes! Klat Browser uses Klat Engine - a completely custom browser engine written from scratch in Rust and C++. It has its own HTML parser (KlatHTML), CSS engine (KlatStyle), JavaScript engine (KlatJS), layout engine (KlatLayout), and networking stack (KlatNet). Zero Chromium/Gecko/WebKit code.',
      'product.browser.faq2.q': 'Will my favorite Chrome extensions work?',
      'product.browser.faq2.a': 'Most likely yes. Klat Browser supports the WebExtensions API (Manifest V2 and V3) with ~95% Chrome compatibility. Popular extensions like uBlock Origin, Bitwarden, Dark Reader, Vimium, LanguageTool, and thousands more work out of the box. Install directly from Chrome Web Store.',
      'product.browser.faq3.q': 'How does it use so little RAM?',
      'product.browser.faq3.a': 'Klat Engine was designed from day one for memory efficiency: single-process-per-site (not per-tab), shared string interning, compact AST representation, aggressive dead code elimination, lazy parsing, tab hibernation, and a custom allocator (KlatAlloc) optimized for browser workloads. No V8/SpiderMonkey overhead.',
      'product.browser.faq4.q': 'Is it safe for daily use? Banking, shopping, etc.?',
      'product.browser.faq4.a': 'Yes. Klat Engine implements modern security: site isolation, process sandboxing (seccomp on Linux, AppContainer on Windows, Seatbelt on macOS), HSTS, certificate transparency, same-site cookies, and regular security audits. It passes all major web platform tests. However, as a younger engine, it may have undiscovered edge cases - use judgment for high-stakes activities.',
      'product.browser.faq5.q': 'Does it support Netflix, YouTube, Spotify, etc.?',
      'product.browser.faq5.a': 'Yes! Klat Engine supports Widevine CDM (via official component), Media Source Extensions, Encrypted Media Extensions, and all modern streaming standards. Netflix, YouTube, Disney+, Spotify, Prime Video, and all major streaming services work out of the box. DRM can be disabled in settings if preferred.',
      'product.browser.faq6.q': 'Can I sync my data across devices?',
      'product.browser.faq6.a': 'Yes! Built-in end-to-end encrypted sync for bookmarks, history, passwords, tabs, settings, and extensions. You can use our official sync server (zero-knowledge, we can\'t read your data) or self-host the Klat Sync Server for complete control. Sync is optional and disabled by default.',
      'product.browser.faq7.q': 'What about web compatibility? Do sites break?',
      'product.browser.faq7.a': 'Compatibility is excellent for modern sites. Klat Engine passes >95% of Web Platform Tests. Some very old sites relying on non-standard IE/legacy behaviors may render differently. We maintain a compatibility list and site-specific quirks mode for known issues. Report broken sites on GitHub - we fix them fast.',
      'product.browser.faq8.q': 'Is there a mobile version (Android/iOS)?',
      'product.browser.faq8.a': 'Not yet. Klat Engine is currently desktop-only (Windows, Linux, macOS). Mobile ports are planned for 2026 - the engine architecture supports it, but native UI work is needed for Android/iOS. For now, use the desktop version with remote debugging for mobile development.',
      'product.browser.faq9.q': 'How do I report bugs or request features?',
      'product.browser.faq9.a': 'GitHub Issues: github.com/klatasia/klat-browser/issues. We\'re very responsive - most bugs get triaged within 24h. Feature requests go through discussions first. Join our Discord/Matrix for real-time chat. Security issues: security@klat.asia (PGP key on website).',
      'product.browser.faq10.q': 'What license? Can I use it commercially?',
      'product.browser.faq10.a': 'MPL-2.0 (Mozilla Public License 2.0) - file-level copyleft. You can use, modify, distribute commercially. If you modify engine source files, you must share those changes. UI/application code can be proprietary. Embedding Klat Engine in your app is allowed. Very business-friendly license.',
      'product.os.desc': 'Linux-based operating system built on Klat kernel. Lightweight, modern UI, pre-installed Klat apps (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling updates. Visit klatos.klat.asia for ISO download and documentation.',
      'product.os.feat1.title': 'Klat AI',
      'product.os.feat1.desc': 'Local AI assistant with code completion, image generation, and Q&A. Runs offline with local models.',
      'product.os.feat2.title': 'Klat Browser',
      'product.os.feat2.desc': 'Privacy-first browser with built-in ad blocker, tracker protection, and video downloader.',
      'product.os.feat3.title': 'Klat Downloader',
      'product.os.feat3.desc': 'Multi-threaded download manager with BitTorrent, scheduling, and browser integration.',
      'product.os.feat4.title': 'Klat Office',
      'product.os.feat4.desc': 'Complete office suite: Writer, Calc, Impress, Draw, Math, Base. MS Office compatible.',
      'product.os.feat5.title': 'Klat Tube',
      'product.os.feat5.desc': 'Ad-free YouTube client with background play, PiP, SponsorBlock, and downloads.',
      'product.os.feat6.title': 'Software Center',
      'product.os.feat6.desc': 'Discover and install thousands of Flatpak, Snap, and native apps with one click.',
      'product.os.use1.title': 'Daily Driver',
      'product.os.use1.desc': 'Fast, stable, and beautiful. Pre-installed apps cover all daily needs out of the box.',
      'product.os.use2.title': 'Development',
      'product.os.use2.desc': 'Latest compilers, kernels, containers. Rolling updates mean always-current toolchains.',
      'product.os.use3.title': 'Raspberry Pi / SBC',
      'product.os.use3.desc': 'ARM64 images for Pi 4/5 with hardware video decode, GPIO, and optimized kernels.',
      'product.os.use4.title': 'Virtual Machines',
      'product.os.use4.desc': 'Ready-to-use OVA/QCOW2 images. Guest additions, auto-resize, seamless integration.',
      'product.os.tech1.title': 'Base System',
      'product.os.tech2.title': 'Desktop Environment',
      'product.os.tech3.title': 'Package Management',
      'product.os.tech4.title': 'Supported Architectures',
      'product.os.faq1.q': 'Is Klat OS based on Arch Linux?',
      'product.os.faq1.a': 'Yes, Klat OS uses Arch Linux as its upstream base but adds the Klat kernel, custom desktop environment, pre-installed Klat apps, and a curated software center. It\'s 100% Arch compatible.',
      'product.os.faq2.q': 'Can I dual boot with Windows?',
      'product.os.faq2.a': 'Absolutely. The installer detects existing OSes and configures systemd-boot/GRUB for dual boot. Secure Boot supported. See docs for step-by-step guide.',
      'product.os.faq3.q': 'How often do I need to update?',
      'product.os.faq3.a': 'Rolling release = update whenever you want. Recommended: weekly. Run klat-update or use Software Center. No major version upgrades ever needed.',
      'product.os.faq4.q': 'Does it support NVIDIA GPUs?',
      'product.os.faq4.a': 'Yes! Driver Manager auto-detects and installs proprietary NVIDIA drivers with DKMS (auto-rebuild on kernel update). Optimus/Prime offloading supported.',
      'product.os.faq5.q': 'Can I run it on Raspberry Pi?',
      'product.os.faq5.a': 'ARM64 images for Raspberry Pi 4/5, Pine64, and other SBCs. Includes hardware-accelerated video, GPIO access, and Pi-specific optimizations.',
      'product.os.faq6.q': 'Is it suitable for beginners?',
      'product.os.faq6.a': 'Yes! Graphical installer, driver manager, software center, and pre-installed apps make it beginner-friendly. But it\'s still Arch underneath for power users.',
      'product.kasir.desc': 'Free and open source Point of Sale (POS) system built specifically for Indonesian businesses. Supports official receipts, 80mm thermal printer integration, inventory system, tax reporting, multi-store, multi-cashier, and offline mode. Perfect for warungs, shops, restaurants, cafes, minimarkets, and SME businesses across Indonesia.',
      'product.kasir.feat1.title': 'Fast & Easy POS',
      'product.kasir.feat1.desc': 'POS interface designed for speed. Just type a barcode or search for a product, select quantity, and the transaction is done in seconds. Perfect for rush hours.',
      'product.kasir.feat2.title': 'Indonesian Official Receipts',
      'product.kasir.feat2.desc': 'Print official purchase receipts in standard Indonesian format. Includes store NPWP, address, transaction date, 11% VAT, and item details per DJP regulations.',
      'product.kasir.feat3.title': '80mm & 58mm Thermal Printers',
      'product.kasir.feat3.desc': 'Direct support for common thermal printers in Indonesia: Xprinter, Epson TM-T20, Goojodoor, Citizen. Auto-print receipts, cut paper, and open cash drawer.',
      'product.kasir.feat4.title': 'Barcode & QRIS',
      'product.kasir.feat4.desc': 'Scan product barcodes, generate barcodes for unlisted products. Supports QRIS payments (QR Code Indonesian Standard), GoPay, OVO, Dana, ShopeePay.',
      'product.kasir.feat5.title': 'Inventory & Stock',
      'product.kasir.feat5.desc': 'Auto-manage stock on every transaction. Minimum stock alerts, inventory reports, FIFO, multi-warehouse, stock opname, and supplier integration.',
      'product.kasir.feat6.title': 'Tax & Financial Reports',
      'product.kasir.feat6.desc': 'Daily, weekly, monthly sales reports. Input/output VAT reports, automatic tax calculation, CSV/Excel export for accounting.',
      'product.kasir.feat7.title': 'Multi-Cashier & Multi-Store',
      'product.kasir.feat7.desc': 'Manage multiple stores from one system. Each cashier has a separate account. Data syncs between stores. Combined reports for business owners.',
      'product.kasir.feat8.title': 'Offline Mode & Auto-Sync',
      'product.kasir.feat8.desc': 'Sell without internet. All transactions are stored locally. When online, data automatically syncs to the cloud. No data is lost.',
      'product.kasir.feat9.title': 'Complete Payment Options',
      'product.kasir.feat9.desc': 'Cash, debit/credit cards, QRIS, e-wallets (GoPay, OVO, Dana, ShopeePay), bank transfers, store credit, receivables, and split payments.',
      'product.kasir.feat10.title': 'Discounts & Promotions',
      'product.kasir.feat10.desc': 'Per-item discounts, transaction discounts, buy X get Y free, happy hour, bundle packages, vouchers, loyalty points, and special member pricing.',
      'product.kasir.feat11.title': 'Supplier Management',
      'product.kasir.feat11.desc': 'Supplier database, product ordering, purchase orders, goods receiving, purchase price records, and transaction history with suppliers.',
      'product.kasir.feat12.title': 'Mobile & Tablet Ready',
      'product.kasir.feat12.desc': 'Responsive interface for tablets and phones. Cashiers can sell from Android/iPad tablets. Perfect for food trucks, bazaar stands, or small shops.',
      'product.kasir.use1.title': 'Warungs & Grocery Stores',
      'product.kasir.use1.desc': 'Thousands of items, hundreds of transactions per day. Klat Kasir is designed for fast cashier service at affordable prices. Stock decreases automatically.',
      'product.kasir.use2.title': 'Restaurants & Cafes',
      'product.kasir.use2.desc': 'Menus with variations (size, topping), split bills, table ordering, kitchen printer, delivery orders, and GrabFood/GoFood integration.',
      'product.kasir.use3.title': 'Minimarkets & Supermarkets',
      'product.kasir.use3.desc': 'Thousands of SKUs, barcode scanning, bundle promotions, member cards, loyalty points, and sales reports per department/category.',
      'product.kasir.use4.title': 'Pharmacies & Drug Stores',
      'product.kasir.use4.desc': 'Track expiry dates, batch numbers, drug registration numbers, doctor prescriptions, and drug sales reports for BPJS.',
      'product.kasir.use5.title': 'Fashion & Garment Stores',
      'product.kasir.use5.desc': 'Size, color, model variations. Barcode per variation, separate stock levels, catalog display on cashier tablets, and item returns.',
      'product.kasir.use6.title': 'Fruit & Vegetable Stores',
      'product.kasir.use6.desc': 'Sales per kg/oz/pcs. Integrated digital scales, dynamic pricing by weight, and spoiled/damaged goods management.',
      'product.kasir.tech1.title': 'Minimum Requirements',
      'product.kasir.tech2.title': 'Database & Storage',
      'product.kasir.tech3.title': 'Printers & Hardware',
      'product.kasir.tech4.title': 'Digital Payments',
      'product.kasir.tech5.title': 'Tax & VAT',
      'product.kasir.tech6.title': 'Connectivity & Integration',
      'product.kasir.faq1.q': 'Is Klat Kasir free?',
      'product.kasir.faq1.a': 'Yes! Klat Kasir is 100% free and open source (GPL-3.0). No subscription fees, no transaction fees, no locked features. All features are available from the start.',
      'product.kasir.faq2.q': 'Does it support Indonesian official receipts?',
      'product.kasir.faq2.a': 'Yes! Klat Kasir prints receipts in Indonesian standard format with store NPWP, full address, transaction date, item details, 11% VAT, and totals per DJP regulations. Supports 80mm and 58mm thermal printers.',
      'product.kasir.faq3.q': 'Which thermal printers are supported?',
      'product.kasir.faq3.a': 'Xprinter XP-N160II, XP-T80II, Epson TM-T20III, TM-T82, Goojodoor GP-1320D, GP-58MM, Citizen CT-S310II, and most other ESC/POS compatible thermal printers.',
      'product.kasir.faq4.q': 'Can it work without internet?',
      'product.kasir.faq4.a': 'Yes! Klat Kasir works 100% offline. All transactions, stock, and reports are stored locally on your computer. When internet is available, data can be synced to the cloud automatically.',
      'product.kasir.faq5.q': 'Does it support QRIS payments?',
      'product.kasir.faq5.a': 'Yes! Klat Kasir supports QRIS (QR Code Indonesian Standard) for digital payments. Also supports GoPay, OVO, Dana, ShopeePay, LinkAja, and bank transfers.',
      'product.kasir.faq6.q': 'Is it suitable for restaurants/cafes?',
      'product.kasir.faq6.a': 'Yes! Klat Kasir has a restaurant mode with features: menus with variations (size, topping), split bills, table ordering, kitchen printer, delivery orders, and GrabFood/GoFood integration.',
      'product.kasir.faq7.q': 'What about VAT/tax reporting?',
      'product.kasir.faq7.a': 'Klat Kasir automatically calculates 11% VAT (ready for 12%). Input/output VAT reports are available and can be exported for monthly VAT returns. DJP e-Faktur integration is also available.',
      'product.kasir.faq8.q': 'Is my data safe?',
      'product.kasir.faq8.a': 'Yes! Data is stored locally with encryption. Automatic daily backups can be saved to USB/cloud. No data is sent to KlatAsia servers without your consent. You have full control over your data.',
      'product.kasir.faq9.q': 'Can it support multiple stores?',
      'product.kasir.faq9.a': 'Yes! Klat Kasir supports multi-store with one account. Data syncs via the internet. Combined reports are available for business owners managing multiple branches.',
      'product.kasir.faq10.q': 'How do I get started?',
      'product.kasir.faq10.a': 'Download, install, and run. The setup wizard will help you: input store data, add product categories, import products from CSV (if available), set up the printer, and start selling. You can be up and running in 10 minutes!',
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
      'nav.products.sub.klat-ai': 'Klat AI',
      'nav.products.sub.klat-browser': 'Klat Browser',
      'nav.products.sub.klat-downloader': 'Klat Downloader',
      'nav.products.sub.klat-office': 'Klat Office',
      'nav.products.sub.klat-tube': 'Klat Tube',
      'nav.products.sub.klat-os': 'Klat OS',
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
      'nav.products.sub.klat-kasir': 'Klat Kasir',
      'hero.stat1': 'Produk',
      'hero.stat2': 'Platform',
      'hero.stat3': 'Lisensi Gratis',
      'product.featuresTitle': 'Kemampuan <span>Hebat</span>',
      'product.useCasesTitle': 'Cocok untuk <span>Semua Kebutuhan</span>',
      'product.techTitle': 'Dirancang untuk <span>Pengembang</span>',
      'product.downloadWin': 'Unduh untuk Windows',
      'product.freeLicense': 'Gratis sepenuhnya \u2022 Open source (MIT) \u2022 Tanpa akun \u2022 Tanpa telemetry',
      'product.faqTitle': 'Pertanyaan yang <span>Sering Ditanyakan</span>',
      'product.viewSource': 'Lihat Source',
      'product.protocolsTitle': 'Kompatibilitas <span>Universal</span>',
      'product.docs': 'Dokumentasi',
      'product.downloadISO': 'Unduh ISO x86_64',
      'product.downloadARM': 'Unduh ISO ARM64',
      'product.downloadVM': 'Unduh untuk VirtualBox',
      'product.downloadPortable': 'Versi Portable',
      'product.ai.desc': 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.',
      'product.ai.feat1.title': 'Asisten Kode',
      'product.ai.feat1.desc': 'Code completion cerdas, bantuan debugging, saran refactoring, dan dukungan multi-bahasa untuk Python, JavaScript, TypeScript, dan lainnya.',
      'product.ai.feat2.title': 'Generasi Gambar',
      'product.ai.feat2.desc': 'Buat gambar menakjubkan dari prompt teks dengan berbagai model AI. Mendukung gaya, rasio aspek, dan penyempurnaan bertahap.',
      'product.ai.feat3.title': 'Tanya Jawab Umum',
      'product.ai.feat3.desc': 'Jawab pertanyaan tentang topik apapun - sains, sejarah, penulisan kreatif, analisis, terjemahan, dan lainnya dengan sitasi.',
      'product.ai.feat4.title': 'Multi-Model',
      'product.ai.feat4.desc': 'Beralih antar model AI (GPT, Claude, Llama, model lokal) sesuai kebutuhan dan persyaratan privasi Anda.',
      'product.ai.feat5.title': 'Privasi Terjamin',
      'product.ai.feat5.desc': 'Jalankan model lokal di perangkat Anda. Tidak ada data dikirim ke cloud kecuali Anda memilih model cloud. Kemampuan offline penuh.',
      'product.ai.feat6.title': 'Integrasi API',
      'product.ai.feat6.desc': 'REST API dan Python SDK untuk mengintegrasikan kemampuan AI ke aplikasi dan workflow Anda sendiri.',
      'product.ai.use1.title': 'Pengembangan Perangkat Lunak',
      'product.ai.use1.desc': 'Generasi kode, debugging, code review, penulisan dokumentasi, dan mempelajari framework baru.',
      'product.ai.use2.title': 'Pembuatan Konten',
      'product.ai.use2.desc': 'Artikel blog, copywriting, konten media sosial, penulisan kreatif, dan terjemahan.',
      'product.ai.use3.title': 'Analisis Data',
      'product.ai.use3.desc': 'Query SQL, kode visualisasi data, analisis statistik, dan pembuatan insight.',
      'product.ai.use4.title': 'Belajar & Pendidikan',
      'product.ai.use4.desc': 'Jelaskan konsep kompleks, praktik coding, belajar bahasa, dan bantuan tugas.',
      'product.ai.tech1.title': 'Model yang Didukung',
      'product.ai.tech2.title': 'Spesifikasi Sistem',
      'product.ai.tech3.title': 'Inferensi Lokal',
      'product.ai.faq1.q': 'Apakah Klat AI benar-benar gratis?',
      'product.ai.faq1.a': 'Ya! Klat AI 100% gratis dan open source (lisensi MIT). Tidak ada langganan, tidak ada batas penggunaan, tidak ada biaya tersembunyi. Model cloud memerlukan API key Anda sendiri.',
      'product.ai.faq2.q': 'Bisakah saya menjalankannya offline?',
      'product.ai.faq2.a': 'Tentu saja. Unduh model lokal (Llama, Mistral, CodeLlama) dan gunakan Klat AI sepenuhnya offline. Sempurna untuk pekerjaan yang sensitif terhadap privasi.',
      'product.ai.faq3.q': 'Bahasa pemrograman apa yang didukung?',
      'product.ai.faq3.a': 'Semua bahasa utama: Python, JavaScript, TypeScript, Go, Rust, C++, Java, C#, PHP, Ruby, Swift, Kotlin, dan banyak lagi.',
      'product.ai.faq4.q': 'Bagaimana cara memperbarui Klat AI?',
      'product.ai.faq4.a': 'Installer Windows memiliki auto-update. Linux AppImage diperbarui via AppImageUpdate. Atau unduh versi terbaru dari GitHub releases.',
      'product.ai.faq5.q': 'Bisakah saya menggunakan API key sendiri?',
      'product.ai.faq5.a': 'Ya! Tambahkan API key OpenAI, Anthropic, atau lainnya di Pengaturan untuk menggunakan model cloud bersama model lokal.',
      'product.ai.faq6.q': 'Apakah kode/data saya dikirim ke mana-mana?',
      'product.ai.faq6.a': 'Hanya jika Anda menggunakan model cloud. Model lokal berjalan seluruhnya di mesin Anda. Tidak ada telemetry, tidak ada pengumpulan data, selamanya.',
      'product.office.desc': 'Suite kantor lengkap alternatif MS Office. Termasuk Writer, Calc, Impress, Draw, Math, dan Base. Kompatibilitas penuh format MS Office, ekspor PDF, template, makro. Gratis di Windows & Linux.',
      'product.office.writer.desc': 'Pengolah kata dengan gaya, template, mail merge, track changes, komentar, daftar isi, indeks, dan kompatibilitas penuh .docx/.odt.',
      'product.office.writer.f1': 'Pemformatan & gaya lanjutan',
      'product.office.writer.f2': 'Mail merge & surat formulir',
      'product.office.writer.f3': 'Track changes & komentar',
      'product.office.writer.f4': 'Dokumen induk & subdokumen',
      'product.office.calc.desc': 'Spreadsheet dengan 500+ fungsi, pivot table, grafik, pemformatan bersyarat, solver, skenario, dan dukungan penuh .xlsx/.ods.',
      'product.office.calc.f1': '500+ fungsi keuangan/statistik',
      'product.office.calc.f2': 'Pivot table & grafik',
      'product.office.calc.f3': 'Solver & goal seek',
      'product.office.calc.f4': 'Kalkulasi multi-threaded',
      'product.office.impress.desc': 'Perangkat lunak presentasi dengan animasi, transisi, master slide, presenter view, dan kompatibilitas penuh .pptx/.odp.',
      'product.office.impress.f1': 'Animasi & transisi slide',
      'product.office.impress.f2': 'Master slide & layout',
      'product.office.impress.f3': 'Presenter view & remote',
      'product.office.impress.f4': 'Ekspor ke PDF, video, gambar',
      'product.office.draw.desc': 'Editor grafis vektor untuk diagram, flowchart, bagan organisasi, poster. Lapisan, konektor, objek 3D, ekspor SVG/PDF.',
      'product.office.draw.f1': 'Flowchart & diagram',
      'product.office.draw.f2': 'Konektor pintar & glue point',
      'product.office.draw.f3': 'Objek 3D & efek',
      'product.office.draw.f4': 'Ekspor SVG, PDF, EMF',
      'product.office.math.desc': 'Editor formula dengan antarmuka point-and-click, impor/ekspor LaTeX, dukungan MathML. Terintegrasi dengan semua aplikasi.',
      'product.office.math.f1': 'Pengeditan persamaan WYSIWYG',
      'product.office.math.f2': 'Impor/ekspor LaTeX & MathML',
      'product.office.math.f3': 'Katalog simbol & template',
      'product.office.math.f4': 'Mode inline & display',
      'product.office.base.desc': 'Frontend database dengan form, laporan, query, tampilan SQL. HSQLDB embedded, konektivitas MySQL/PostgreSQL/JDBC/ODBC.',
      'product.office.base.f1': 'Desainer form & laporan',
      'product.office.base.f2': 'Query builder visual',
      'product.office.base.f3': 'Konektivitas DB eksternal',
      'product.office.base.f4': 'Otomasi makro & skrip',
      'product.office.use1.title': 'Pembuatan Dokumen',
      'product.office.use1.desc': 'Dokumen profesional, laporan, surat dengan pemformatan lanjutan, mail merge, dan alat kolaborasi.',
      'product.office.use2.title': 'Analisis Data',
      'product.office.use2.desc': 'Spreadsheet kompleks, pivot table, grafik, fungsi statistik, dan solver untuk business intelligence.',
      'product.office.use3.title': 'Presentasi',
      'product.office.use3.desc': 'Slide menakjubkan dengan animasi, transisi, template master, dan presenter view untuk konferensi.',
      'product.office.use4.title': 'Diagram & Grafis',
      'product.office.use4.desc': 'Flowchart, bagan organisasi, diagram teknis, poster dengan lapisan, konektor, dan efek 3D.',
      'product.office.tech1.title': 'Performa',
      'product.office.tech2.title': 'Ekstensibilitas',
      'product.office.tech3.title': 'Kolaborasi',
      'product.office.tech4.title': 'Aksesibilitas',
      'product.office.faq1.q': 'Apakah Klat Office kompatibel dengan Microsoft Office?',
      'product.office.faq1.a': 'Ya! Klat Office membuka, mengedit, dan menyimpan file .docx, .xlsx, .pptx dengan fidilitas tinggi. Pemformatan kompleks, makro, dan fitur lanjutan mungkin memiliki perbedaan kecil.',
      'product.office.faq2.q': 'Bisakah saya menggunakan makro VBA?',
      'product.office.faq2.a': 'Klat Office mendukung makro Basic (mirip VBA) dan Python/JavaScript. Makro VBA perlu konversi. Makro Basic berjalan native; gunakan perekam makro untuk memindahkan logika.',
      'product.office.faq3.q': 'Apakah mendukung pengeditan kolaboratif?',
      'product.office.faq3.a': 'Co-editing real-time via integrasi Nextcloud/ownCloud. Track changes dan komentar berfungsi offline. Untuk live editing gaya Google Docs, gunakan versi web (segera hadir).',
      'product.office.faq4.q': 'Bisakah saya menginstal hanya Writer?',
      'product.office.faq4.a': 'Installer memungkinkan Anda memilih komponen. Instalasi minimum (hanya Writer) ~80 MB. Flatpak/AppImage bersifat monolitik tapi ter-sandbox.',
      'product.office.faq5.q': 'Apakah ada versi mobile?',
      'product.office.faq5.a': 'Belum. Klat Office Viewer untuk Android (read-only) dalam beta. Pengeditan penuh di mobile direncanakan untuk 2027. Gunakan alternatif web/cloud untuk sementara.',
      'product.office.faq6.q': 'Bagaimana cara mendapatkan template?',
      'product.office.faq6.a': 'File \u2192 Baru \u2192 Template. Template bawaan + repositori online (templates.klatasia.com). Template komunitas dalam format .otp/.ots/.ott.',
      'product.tube.desc': 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, SponsorBlock, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.',
      'product.tube.feat1.title': 'Bebas Iklan',
      'product.tube.feat1.desc': 'Blokir semua iklan YouTube secara otomatis - pre-roll, mid-roll, banner, dan overlay. Tonton tanpa gangguan.',
      'product.tube.feat2.title': 'Putar di Latar Belakang',
      'product.tube.feat2.desc': 'Putar video dengan layar mati atau saat menggunakan aplikasi lain. Sempurna untuk musik, podcast, dan konten panjang.',
      'product.tube.feat3.title': 'Picture-in-Picture',
      'product.tube.feat3.desc': 'Melayangkan jendela video di atas aplikasi lain. Ubah ukuran, geser, dan lanjutkan menonton saat multitasking.',
      'product.tube.feat4.title': 'Unduh Video & Audio',
      'product.tube.feat4.desc': 'Simpan video hingga kualitas 8K atau ekstrak audio sebagai MP3/OGG. Unduh batch playlist dan channel.',
      'product.tube.feat5.title': 'Integrasi SponsorBlock',
      'product.tube.feat5.desc': 'Lewati sponsor, intro, outro, pengingat, dan filler secara otomatis. Segmen berbasis komunitas.',
      'product.tube.feat6.title': 'Tanpa Akun',
      'product.tube.feat6.desc': 'Kelola langganan, watch later, dan histori secara lokal. Impor/ekspor OPML. Zero tracking, zero akun Google.',
      'product.tube.feat7.title': 'UI Kustomisabel',
      'product.tube.feat7.desc': 'Tema gelap/terang, warna aksen, mode compact, mode theater, CSS kustom. Buat sesuai selera Anda.',
      'product.tube.feat8.title': 'Privasi Terjamin',
      'product.tube.feat8.desc': 'Tanpa telemetry, tanpa analitik, tanpa pengumpulan data. Proxy request melalui instance Invidious/Piped secara opsional.',
      'product.tube.use1.title': 'Musik & Podcast',
      'product.tube.use1.desc': 'Putar di latar belakang memungkinkan Anda mendengarkan dengan layar mati. Unduh playlist untuk mendengarkan offline.',
      'product.tube.use2.title': 'Multitasking',
      'product.tube.use2.desc': 'Mode PiP menjaga video terlihat saat Anda bekerja, browsing, atau chatting. Jendela melayang yang bisa diubah ukuran.',
      'product.tube.use3.title': 'Arsip Offline',
      'product.tube.use3.desc': 'Unduh tutorial, kuliah, dokumenter untuk ditonton offline. Atur dengan tag kustom.',
      'product.tube.use4.title': 'Peduli Privasi',
      'product.tube.use4.desc': 'Tanpa akun Google, tanpa tracking, tanpa histori tontonan dikirim ke YouTube. Langganan lokal saja.',
      'product.tube.tech1.title': 'Sumber yang Didukung',
      'product.tube.tech2.title': 'Kualitas Video',
      'product.tube.tech3.title': 'Format Audio',
      'product.tube.tech4.title': 'Spesifikasi Sistem',
      'product.tube.faq1.q': 'Apakah Klat Tube legal?',
      'product.tube.faq1.a': 'Ya. Klat Tube menggunakan instance publik Invidious/Piped untuk mengambil konten YouTube. Ini adalah klien, bukan scraper. Mengunduh untuk penggunaan pribadi termasuk fair use di sebagian besar yurisdiksi.',
      'product.tube.faq2.q': 'Bisakah saya login dengan akun Google?',
      'product.tube.faq2.a': 'Tidak, dan itu memang sengaja. Klat Tube menyimpan langganan secara lokal. Impor/ekspor OPLO untuk migrasi dari/ke klien lain atau YouTube.',
      'product.tube.faq3.q': 'Apakah fitur YouTube Premium berfungsi?',
      'product.tube.faq3.a': 'Klat Tube menyediakan tanpa iklan, putar di latar belakang, PiP, dan unduhan secara GRATIS - fitur yang YouTube kunci di balik Premium.',
      'product.tube.faq4.q': 'Bisakah saya menggunakan instance Invidious/Piped sendiri?',
      'product.tube.faq4.a': 'Ya! Buka Pengaturan \u2192 Instance dan masukkan URL instance kustom Anda. Mendukung API Invidious dan Piped.',
      'product.tube.faq5.q': 'Bagaimana cara memperbarui?',
      'product.tube.faq5.a': 'Windows: notifikasi auto-update. Linux AppImage: gunakan AppImageUpdate atau unduh ulang. Flatpak: update sistem. GitHub Releases selalu memiliki versi terbaru.',
      'product.tube.faq6.q': 'Apakah mendukung live stream?',
      'product.tube.faq6.a': 'Ya! Tonton live stream dengan chat (read-only), kontrol DVR, dan pemilihan kualitas. Chat replay tersedia untuk stream sebelumnya.',
      'product.downloader.desc': 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.',
      'product.dl.feat1.title': 'Download Multi-Threaded',
      'product.dl.feat1.desc': 'Bagi file menjadi hingga 64 segmen untuk kecepatan maksimum. Alokasi segmen dinamis beradaptasi dengan kondisi jaringan.',
      'product.dl.feat2.title': 'Resume & Pemulihan',
      'product.dl.feat2.desc': 'Resume otomatis saat koneksi putus, mati listrik, atau crash sistem. Verifikasi checksum memastikan integritas file.',
      'product.dl.feat3.title': 'Dukungan BitTorrent',
      'product.dl.feat3.desc': 'Klien BitTorrent lengkap bawaan. Magnet link, DHT, PEX, enkripsi, unduh file selektif, unduh sekuensial untuk media.',
      'product.dl.feat4.title': 'Scheduler Cerdas',
      'product.dl.feat4.desc': 'Antrean download untuk jam non-puncak. Mulai/berhenti berdasarkan waktu, jenis jaringan, level baterai, atau trigger kustom.',
      'product.dl.feat5.title': 'Pembatas Bandwidth',
      'product.dl.feat5.desc': 'Batas kecepatan global dan per-download. Jadwalkan batas (unlimited malam hari, 500 KB/s saat jam kerja).',
      'product.dl.feat6.title': 'Integrasi Browser',
      'product.dl.feat6.desc': 'Ekstensi Chrome, Firefox, Edge. Klik kanan \u2192 "Download with Klat". Auto-intercept download.',
      'product.dl.feat7.title': 'Monitoring Clipboard',
      'product.dl.feat7.desc': 'Deteksi otomatis URL di clipboard. Filter cerdas untuk tautan video/audio/halaman. Tambahkan ke antrean dengan satu klik.',
      'product.dl.feat8.title': 'Scan Virus',
      'product.dl.feat8.desc': 'Integrasi dengan Windows Defender, ClamAV, atau API VirusTotal. Auto-scan download selesai. Karantina file mencurigakan.',
      'product.dl.feat9.title': 'Dukungan Situs Video',
      'product.dl.feat9.desc': 'Unduh dari YouTube, Vimeo, Dailymotion, Twitch, Twitter, Instagram, TikTok, dan 1000+ situs via backend yt-dlp.',
      'product.dl.feat10.title': 'Dukungan Protokol',
      'product.dl.feat10.desc': 'HTTP/HTTPS, FTP/FTPS, SFTP, BitTorrent, Metalink, Magnet link. Dukungan proxy (HTTP, SOCKS4/5).',
      'product.dl.feat11.title': 'Opsi Lanjutan',
      'product.dl.feat11.desc': 'Header kustom, cookie, autentikasi, user-agent. Aksi pasca-download (jalankan skrip, ekstrak, pindah). Kategori & tag.',
      'product.dl.feat12.title': 'System Tray & Notifikasi',
      'product.dl.feat12.desc': 'Minimize ke tray. Notifikasi desktop saat selesai. Grafik kecepatan di tooltip tray. Dukungan boss key.',
      'product.dl.use1.title': 'Download File Besar',
      'product.dl.use1.desc': 'Image ISO, installer game, dataset. Multi-threading memaksimalkan bandwidth. Resume bertahan dari gangguan apapun.',
      'product.dl.use2.title': 'Arsip Video',
      'product.dl.use2.desc': 'Unduh dari 1000+ situs. Batch download playlist/channel. Auto-organisasi berdasarkan kreator, tanggal, kualitas.',
      'product.dl.use3.title': 'Manajemen Torrent',
      'product.dl.use3.desc': 'Klien BitTorrent ringan. Unduh file selektif, sekuensial untuk streaming, auto-download RSS.',
      'product.dl.use4.title': 'Server & FTP',
      'product.dl.use4.desc': 'Dukungan SFTP/FTP dengan autentikasi kunci. Mirror direktori. Sinkron dengan server remote. Penjadwalan bandwidth.',
      'product.dl.faq1.q': 'Berapa banyak segmen yang bisa saya gunakan?',
      'product.dl.faq1.a': 'Hingga 64 segmen per file. Default 8. Lebih banyak segmen = lebih cepat di koneksi latency tinggi, tetapi return berkurang setelah 16-32.',
      'product.dl.faq2.q': 'Bisakah mengunduh dari YouTube?',
      'product.dl.faq2.a': 'Ya! Tempel URL YouTube apa pun. Menggunakan backend yt-dlp yang mendukung 1000+ situs. Pilih kualitas, format, audio-only. Subtitle termasuk.',
      'product.dl.faq3.q': 'Apakah berfungsi dengan private tracker?',
      'product.dl.faq3.a': 'Ya. Tambahkan cookie tracker di pengaturan. Mendukung passkey di URL. Hormati interval announce. DHT/PEX bisa dinonaktifkan per-torrent.',
      'product.dl.faq4.q': 'Bagaimana cara kerja monitoring clipboard?',
      'product.dl.faq4.a': 'Aktifkan di Pengaturan \u2192 Umum. Klat memantau clipboard untuk URL. Filter cerdas mendeteksi tautan video/audio/halaman. Notifikasi meminta untuk menambahkan ke antrean.',
      'product.dl.faq5.q': 'Bisakah saya membatasi kecepatan sesuai jadwal?',
      'product.dl.faq5.a': 'Ya! Pengaturan \u2192 Scheduler \u2192 Batas Kecepatan. Contoh: 100 KB/s jam 9 pagi - 6 sore, unlimited 6 sore - 9 pagi. Per-download atau global.',
      'product.dl.faq6.q': 'Apakah versi portable berfungsi penuh?',
      'product.dl.faq6.a': 'Ya. Semua fitur berfungsi. Pengaturan disimpan di folder aplikasi. Ekstensi browser perlu instalasi terpisah. Tidak perlu hak admin.',
      'product.browser.desc': 'Browser ringan dan cepat yang didukung Klat Engine - bukan Chromium, Gecko, atau WebKit. Lebih hemat RAM dengan fitur lengkap termasuk tab vertikal, adblock bawaan, split view, sidebar apps, reader mode, dan lainnya. Gratis dan open source.',
      'product.browser.feat1.title': 'Ultra Ringan',
      'product.browser.feat1.desc': 'Klat Engine menggunakan ~70% lebih sedikit RAM dibanding browser berbasis Chromium. Berjalan lancar di perangkat 2GB RAM. Sempurna untuk hardware lama dan perangkat low-spec.',
      'product.browser.feat2.title': 'Tab Vertikal & Split View',
      'product.browser.feat2.desc': 'Sidebar tab vertikal untuk manajemen tab yang lebih baik. Split view memungkinkan melihat dua halaman berdampingan. Sempurna untuk riset, coding, dan multitasking.',
      'product.browser.feat3.title': 'Aplikasi Sidebar',
      'product.browser.feat3.desc': 'Sidebar bawaan dengan asisten AI, kalkulator, catatan, penerjemah, kalender, dan lainnya. Tambahkan aplikasi web kustom. Akses alat tanpa meninggalkan halaman saat ini.',
      'product.browser.feat4.title': 'Reader Mode & Tanpa Gangguan',
      'product.browser.feat4.desc': 'Reader mode satu klik menghilangkan iklan, sidebar, dan clutter. Font kustom, tema, text-to-speech, dan auto-scroll untuk membaca nyaman.',
      'product.browser.feat5.title': 'AdBlock Bawaan & Privasi',
      'product.browser.feat5.desc': 'Blokir iklan/tracker kompatibel uBlock Origin bawaan. Tidak perlu ekstensi. Pelindungan fingerprinting, auto-hapus cookie, HTTPS-first, dan kontrol privasi ketat.',
      'product.browser.feat6.title': 'Dukungan Ekstensi Chrome',
      'product.browser.feat6.desc': 'Dukungan penuh WebExtensions API. Instal ekstensi dari Chrome Web Store. Kompatibel dengan uBlock Origin, Bitwarden, Dark Reader, Vimium, dan ribuan lainnya.',
      'product.browser.feat7.title': 'Gestur Mouse & Shortcut Keyboard',
      'product.browser.feat7.desc': 'Gestur mouse kustom untuk navigasi, tab, dan aksi. Shortcut keyboard gaya Vimium. Keybinding sepenuhnya kustom untuk power user.',
      'product.browser.feat8.title': 'Penerjemah Offline',
      'product.browser.feat8.desc': 'Penerjemahan offline bawaan untuk 100+ bahasa. Tidak perlu cloud - terjemahan terjadi secara lokal. Pilih teks atau terjemahkan seluruh halaman secara instan.',
      'product.browser.feat9.title': 'Picture-in-Picture & Kontrol Media',
      'product.browser.feat9.desc': 'Melayangkan video apa pun dalam mode Picture-in-Picture. Kontrol media global di toolbar. Putar audio di latar belakang. Pengontrol kecepatan video dan alat screenshot.',
      'product.browser.feat10.title': 'Download Manager Terintegrasi',
      'product.browser.feat10.desc': 'Akselerator download multi-threaded bawaan. Pause/resume, download terjadwal, deteksi video, monitoring clipboard, dan integrasi scan malware.',
      'product.browser.feat11.title': 'Kustomisasi Mendalam',
      'product.browser.feat11.desc': 'Tema UI lengkap - warna, jarak, kerapatan, animasi. Dukungan CSS kustom. Kustomisasi toolbar. Mode kerapatan: compact, normal, touch-friendly.',
      'product.browser.feat12.title': 'Sinkron & Backup',
      'product.browser.feat12.desc': 'Sinkron terenkripsi end-to-end antar perangkat. Sinkron tab, bookmark, histori, kata sandi, pengaturan, dan ekstensi. Opsi server sync self-hosted untuk privasi.',
      'product.browser.use1.title': 'Hardware Low-Spec & Lama',
      'product.browser.use1.desc': 'Berjalan lancar di 2GB RAM, CPU lama, dan penyimpanan terbatas. Sempurna untuk menghidupkan kembali laptop lama dan perangkat budget.',
      'product.browser.use2.title': 'Power User & Multitasker',
      'product.browser.use2.desc': 'Tab vertikal, split view, sidebar apps, gestur mouse, dan shortcut keyboard untuk produktivitas maksimal.',
      'product.browser.use3.title': 'Pecinta Privasi',
      'product.browser.use3.desc': 'Tanpa telemetry, tanpa tracking, adblock bawaan, pelindungan fingerprinting, dan opsi sync self-hosted. Data Anda tetap milik Anda.',
      'product.browser.use4.title': 'Pembaca & Peneliti',
      'product.browser.use4.desc': 'Reader mode, text-to-speech, penerjemahan offline, split view untuk membandingkan sumber, dan membaca tanpa gangguan.',
      'product.browser.use5.title': 'Pengembang',
      'product.browser.use5.desc': 'DevTools kompatibel dengan Chrome DevTools protocol. Tab vertikal untuk docs + kode. Sidebar untuk API docs, regex tester, color picker.',
      'product.browser.use6.title': 'Penggunaan Portable & USB',
      'product.browser.use6.desc': 'Versi portable berjalan dari drive USB. Tidak perlu instalasi. Bawa browser, bookmark, dan ekstensi kemana saja.',
      'product.browser.tech1.title': 'Klat Engine (Engine Kustom)',
      'product.browser.tech2.title': 'Spesifikasi Sistem',
      'product.browser.tech3.title': 'Kompatibilitas Web',
      'product.browser.tech4.title': 'Performa & Memori',
      'product.browser.tech5.title': 'Privasi & Keamanan',
      'product.browser.tech6.title': 'Fitur Unik Klat Engine',
      'product.browser.faq1.q': 'Apakah Klat Browser benar-benar tidak berbasis Chromium/Firefox/WebKit?',
      'product.browser.faq1.a': 'Ya! Klat Browser menggunakan Klat Engine - browser engine sepenuhnya kustom yang ditulis dari awal dalam Rust dan C++. Memiliki parser HTML sendiri (KlatHTML), engine CSS (KlatStyle), engine JavaScript (KlatJS), engine layout (KlatLayout), dan stack jaringan (KlatNet). Zero kode Chromium/Gecko/WebKit.',
      'product.browser.faq2.q': 'Akankah ekstensi Chrome favorit saya berfungsi?',
      'product.browser.faq2.a': 'Kemungkinan besar ya. Klat Browser mendukung WebExtensions API (Manifest V2 dan V3) dengan ~95% kompatibilitas Chrome. Ekstensi populer seperti uBlock Origin, Bitwarden, Dark Reader, Vimium, LanguageTool, dan ribuan lainnya berfungsi langsung. Instal langsung dari Chrome Web Store.',
      'product.browser.faq3.q': 'Bagaimana cara menggunakan sedikit RAM?',
      'product.browser.faq3.a': 'Klat Engine dirancang sejak hari pertama untuk efisiensi memori: single-process-per-site (bukan per-tab), shared string interning, representasi AST compact, eliminasi kode mati agresif, parsing malas, hibernasi tab, dan allocator kustom (KlatAlloc) yang dioptimalkan untuk beban kerja browser. Tanpa overhead V8/SpiderMonkey.',
      'product.browser.faq4.q': 'Apakah aman untuk penggunaan sehari-hari? Perbankan, belanja, dll.?',
      'product.browser.faq4.a': 'Ya. Klat Engine menerapkan keamanan modern: isolasi situs, sandboxing proses (seccomp di Linux, AppContainer di Windows, Seatbelt di macOS), HSTS, certificate transparency, cookie same-site, dan audit keamanan rutin. Lulus semua tes platform web utama. Namun sebagai engine yang lebih baru, mungkin memiliki edge case yang belum ditemukan - gunakan pertimbangan untuk aktivitas berisiko tinggi.',
      'product.browser.faq5.q': 'Apakah mendukung Netflix, YouTube, Spotify, dll.?',
      'product.browser.faq5.a': 'Ya! Klat Engine mendukung Widevine CDM (via komponen resmi), Media Source Extensions, Encrypted Media Extensions, dan semua standar streaming modern. Netflix, YouTube, Disney+, Spotify, Prime Video, dan semua layanan streaming utama berfungsi langsung. DRM bisa dinonaktifkan di pengaturan jika diinginkan.',
      'product.browser.faq6.q': 'Bisakah saya menyinkronkan data antar perangkat?',
      'product.browser.faq6.a': 'Ya! Sinkron bawaan terenkripsi end-to-end untuk bookmark, histori, kata sandi, tab, pengaturan, dan ekstensi. Anda dapat menggunakan server sync resmi kami (zero-knowledge, kami tidak bisa membaca data Anda) atau self-host Klat Sync Server untuk kendali penuh. Sinkron bersifat opsional dan dinonaktifkan secara default.',
      'product.browser.faq7.q': 'Bagaimana dengan kompatibilitas web? Apakah situs rusak?',
      'product.browser.faq7.a': 'Kompatibilitas sangat baik untuk situs modern. Klat Engine lulus >95% Web Platform Tests. Beberapa situs lama yang mengandalkan perilaku IE/legacy non-standar mungkin rendering berbeda. Kami memelihara daftar kompatibilitas dan mode quirks spesifik situs untuk masalah yang diketahui. Laporkan situs yang rusak di GitHub - kami memperbaikinya dengan cepat.',
      'product.browser.faq8.q': 'Apakah ada versi mobile (Android/iOS)?',
      'product.browser.faq8.a': 'Belum. Klat Engine saat ini hanya desktop (Windows, Linux, macOS). Port mobile direncanakan untuk 2026 - arsitektur engine mendukungnya, tetapi pekerjaan UI native diperlukan untuk Android/iOS. Untuk saat ini, gunakan versi desktop dengan remote debugging untuk mobile development.',
      'product.browser.faq9.q': 'Bagaimana cara melaporkan bug atau meminta fitur?',
      'product.browser.faq9.a': 'GitHub Issues: github.com/klatasia/klat-browser/issues. Kami sangat responsif - sebagian besar bug di-triage dalam 24 jam. Permintaan fitur melalui diskusi terlebih dahulu. Bergabung dengan Discord/Matrix kami untuk chat real-time. Masalah keamanan: security@klat.asia (PGP key di website).',
      'product.browser.faq10.q': 'Lisensi apa? Bisakah saya menggunakannya secara komersial?',
      'product.browser.faq10.a': 'MPL-2.0 (Mozilla Public License 2.0) - copyleft per-file. Anda dapat menggunakan, memodifikasi, mendistribusikan secara komersial. Jika Anda memodifikasi file sumber engine, Anda harus membagikan perubahan tersebut. Kode UI/aplikasi bisa proprietary. Menyematkan Klat Engine di aplikasi Anda diizinkan. Lisensi yang sangat ramah bisnis.',
      'product.os.desc': 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.',
      'product.os.feat1.title': 'Klat AI',
      'product.os.feat1.desc': 'Asisten AI lokal dengan code completion, generasi gambar, dan tanya jawab. Berjalan offline dengan model lokal.',
      'product.os.feat2.title': 'Klat Browser',
      'product.os.feat2.desc': 'Browser privacy-first dengan ad blocker bawaan, pelindungan tracker, dan video downloader.',
      'product.os.feat3.title': 'Klat Downloader',
      'product.os.feat3.desc': 'Download manager multi-threaded dengan BitTorrent, penjadwalan, dan integrasi browser.',
      'product.os.feat4.title': 'Klat Office',
      'product.os.feat4.desc': 'Suite kantor lengkap: Writer, Calc, Impress, Draw, Math, Base. Kompatibel MS Office.',
      'product.os.feat5.title': 'Klat Tube',
      'product.os.feat5.desc': 'Klien YouTube tanpa iklan dengan putar di latar belakang, PiP, SponsorBlock, dan unduhan.',
      'product.os.feat6.title': 'Software Center',
      'product.os.feat6.desc': 'Temukan dan instal ribuan aplikasi Flatpak, Snap, dan native dengan satu klik.',
      'product.os.use1.title': 'Daily Driver',
      'product.os.use1.desc': 'Cepat, stabil, dan indah. Aplikasi bawaan memenuhi semua kebutuhan sehari-hari.',
      'product.os.use2.title': 'Pengembangan',
      'product.os.use2.desc': 'Compiler, kernel, kontainer terbaru. Rolling update berarti toolchain selalu terkini.',
      'product.os.use3.title': 'Raspberry Pi / SBC',
      'product.os.use3.desc': 'Image ARM64 untuk Pi 4/5 dengan hardware video decode, GPIO, dan kernel yang dioptimasi.',
      'product.os.use4.title': 'Mesin Virtual',
      'product.os.use4.desc': 'Image OVA/QCOW2 siap pakai. Guest additions, auto-resize, integrasi seamless.',
      'product.os.tech1.title': 'Sistem Basis',
      'product.os.tech2.title': 'Desktop Environment',
      'product.os.tech3.title': 'Manajemen Paket',
      'product.os.tech4.title': 'Arsitektur yang Didukung',
      'product.os.faq1.q': 'Apakah Klat OS berbasis Arch Linux?',
      'product.os.faq1.a': 'Ya, Klat OS menggunakan Arch Linux sebagai basis upstream tetapi menambahkan kernel Klat, desktop environment kustom, aplikasi Klat yang terpasang, dan software center yang dikurasi. 100% kompatibel Arch.',
      'product.os.faq2.q': 'Bisakah saya dual boot dengan Windows?',
      'product.os.faq2.a': 'Tentu saja. Installer mendeteksi OS yang ada dan mengonfigurasi systemd-boot/GRUB untuk dual boot. Secure Boot didukung. Lihat dokumentasi untuk panduan langkah demi langkah.',
      'product.os.faq3.q': 'Seberapa sering saya perlu memperbarui?',
      'product.os.faq3.a': 'Rolling release = update kapan saja Anda mau. Direkomendasikan: mingguan. Jalankan klat-update atau gunakan Software Center. Tidak pernah ada upgrade versi utama.',
      'product.os.faq4.q': 'Apakah mendukung GPU NVIDIA?',
      'product.os.faq4.a': 'Ya! Driver Manager auto-deteksi dan menginstal driver NVIDIA proprietary dengan DKMS (auto-rebuild saat update kernel). Optimus/Prime offloading didukung.',
      'product.os.faq5.q': 'Bisakah saya menjalankannya di Raspberry Pi?',
      'product.os.faq5.a': 'Image ARM64 untuk Raspberry Pi 4/5, Pine64, dan SBC lainnya. Termasuk video accelerated by hardware, akses GPIO, dan optimasi khusus Pi.',
      'product.os.faq6.q': 'Apakah cocok untuk pemula?',
      'product.os.faq6.a': 'Ya! Installer grafis, driver manager, software center, dan aplikasi yang sudah terpasang membuatnya ramah pemula. Tapi tetap Arch di bawahnya untuk power user.',
      'product.kasir.desc': 'Sistem Point of Sale (POS) gratis dan open source khusus untuk bisnis Indonesia. Mendukung struk pembelian resmi, integrasi printer thermal 80mm, sistem inventaris, laporan penjualan per pajak, multi-toko, multi-kasir, dan mode offline. Cocok untuk warung, toko, restoran, cafe, minimarket, dan bisnis UMKM di seluruh Indonesia.',
      'product.kasir.feat1.title': 'Kasir Cepat & Mudah',
      'product.kasir.feat1.desc': 'Interface kasir yang dirancang untuk kecepatan. Cukup ketik barcode atau cari produk, pilih jumlah, dan transaksi selesai dalam hitungan detik. Cocok untuk jam ramai.',
      'product.kasir.feat2.title': 'Struk Resmi Indonesia',
      'product.kasir.feat2.desc': 'Cetak struk pembelian resmi dengan format standar Indonesia. Termasuk NPWP toko, alamat, tanggal transaksi, PPN 11%, dan detail items sesuai ketentuan DJP.',
      'product.kasir.feat3.title': 'Printer Thermal 80mm & 58mm',
      'product.kasir.feat3.desc': 'Support langsung printer thermal umum di Indonesia: Xprinter, Epson TM-T20, Goojodoor, Citizen. Auto-cetak struk, cut kertas, dan buka drawer kas.',
      'product.kasir.feat4.title': 'Barcode & QRIS',
      'product.kasir.feat4.desc': 'Scan barcode produk, generate barcode untuk produk tanpa barcode. Dukung pembayaran QRIS (QR Code Indonesian Standard), GoPay, OVO, Dana, ShopeePay.',
      'product.kasir.feat5.title': 'Inventaris & Stok',
      'product.kasir.feat5.desc': 'Kelola stok otomatis setiap transaksi. Alert stok minimum, laporan persediaan, FIFO, multi-gudang, opname stok, dan integrasi supplier.',
      'product.kasir.feat6.title': 'Laporan Pajak & Keuangan',
      'product.kasir.feat6.desc': 'Laporan penjualan harian, mingguan, bulanan. Laporan PPN masukan/keluar, perhitungan pajak otomatis, ekspor CSV/Excel untuk akuntansi.',
      'product.kasir.feat7.title': 'Multi-Kasir & Multi-Toko',
      'product.kasir.feat7.desc': 'Kelola beberapa toko dari satu sistem. Setiap kasir punya akun terpisah. Sinkron data antar toko. Laporan gabungan untuk pemilik bisnis.',
      'product.kasir.feat8.title': 'Mode Offline & Auto-Sync',
      'product.kasir.feat8.desc': 'Berjualan tanpa internet. Semua transaksi tersimpan lokal. Saat online, data otomatis tersync ke cloud. Tidak ada data yang hilang.',
      'product.kasir.feat9.title': 'Pembayaran Lengkap',
      'product.kasir.feat9.desc': 'Tunai, kartu debit/kredit, QRIS, e-wallet (GoPay, OVO, Dana, ShopeePay), transfer bank, kredit toko, piutang, dan split payment.',
      'product.kasir.feat10.title': 'Diskon & Promosi',
      'product.kasir.feat10.desc': 'Diskon per item, per transaksi, beli X gratis Y, happy hour, paket bundling, voucher, loyalty points, dan harga khusus member.',
      'product.kasir.feat11.title': 'Manajemen Supplier',
      'product.kasir.feat11.desc': 'Database supplier, pemesanan barang, purchase order, penerimaan barang, catatan harga beli, dan riwayat transaksi dengan supplier.',
      'product.kasir.feat12.title': 'Mobile & Tablet Ready',
      'product.kasir.feat12.desc': 'Interface responsif untuk tablet dan HP. Kasir bisa berjualan dari tablet Android/iPad. Cocok untuk food truck, stand bazaar, atau toko kecil.',
      'product.kasir.use1.title': 'Warung & Toko Kelontong',
      'product.kasir.use1.desc': 'Ribuan item, ratusan transaksi per hari. Klat Kasir dirancang untuk kecepatan kasir warung dengan harga terjangkau. Stok otomatis berkurang.',
      'product.kasir.use2.title': 'Restoran & Cafe',
      'product.kasir.use2.desc': 'Menu dengan variasi (ukuran, topping), split bill, pemesanan meja, dapur printer, delivery order, dan integrasi GrabFood/GoFood.',
      'product.kasir.use3.title': 'Minimarket & Supermarket',
      'product.kasir.use3.desc': 'Ribuan SKU, barcode scanning, promosi bundling, member card, loyalty points, dan laporan penjualan per departemen/kategori.',
      'product.kasir.use4.title': 'Apotek & Toko Obat',
      'product.kasir.use4.desc': 'Track expiry date, batch number, nomor registrasi obat, resep dokter, dan laporan penjualan obat untuk BPJS.',
      'product.kasir.use5.title': 'Toko Fashion & Garment',
      'product.kasir.use5.desc': 'Variasi ukuran, warna, model. Barcode per variasi, ukuran stok terpisah, display katalog di tablet kasir, dan retur barang.',
      'product.kasir.use6.title': 'Toko Buah & Sayur',
      'product.kasir.use6.desc': 'Penjualan per kg/ons/pcs. Timbangan digital terintegrasi, harga dinamis sesuai berat, dan manajemen barang basi/rusak.',
      'product.kasir.tech1.title': 'Spesifikasi Minimum',
      'product.kasir.tech2.title': 'Database & Storage',
      'product.kasir.tech3.title': 'Printer & Hardware',
      'product.kasir.tech4.title': 'Pembayaran Digital',
      'product.kasir.tech5.title': 'Pajak & PPN',
      'product.kasir.tech6.title': 'Koneksi & Integrasi',
      'product.kasir.faq1.q': 'Apakah Klat Kasir gratis?',
      'product.kasir.faq1.a': 'Ya! Klat Kasir 100% gratis dan open source (GPL-3.0). Tidak ada biaya langganan, tidak ada biaya transaksi, tidak ada fitur terkunci. Semua fitur tersedia sejak awal.',
      'product.kasir.faq2.q': 'Apakah mendukung struk resmi Indonesia?',
      'product.kasir.faq2.a': 'Ya! Klat Kasir mencetak struk sesuai standar Indonesia dengan NPWP toko, alamat lengkap, tanggal transaksi, detail item, PPN 11%, dan total yang sesuai ketentuan DJP. Mendukung printer thermal 80mm dan 58mm.',
      'product.kasir.faq3.q': 'Printer thermal apa saja yang didukung?',
      'product.kasir.faq3.a': 'Xprinter XP-N160II, XP-T80II, Epson TM-T20III, TM-T82, Goojodoor GP-1320D, GP-58MM, Citizen CT-S310II, dan mayoritas printer thermal ESC/POS compatible lainnya.',
      'product.kasir.faq4.q': 'Apakah bisa tanpa internet?',
      'product.kasir.faq4.a': 'Ya! Klat Kasir bekerja 100% offline. Semua transaksi, stok, dan laporan tersimpan lokal di komputer Anda. Saat internet tersedia, data bisa disinkronkan ke cloud secara otomatis.',
      'product.kasir.faq5.q': 'Apakah mendukung pembayaran QRIS?',
      'product.kasir.faq5.a': 'Ya! Klat Kasir mendukung QRIS (QR Code Indonesian Standard) untuk pembayaran digital. Juga mendukung GoPay, OVO, Dana, ShopeePay, LinkAja, dan transfer bank.',
      'product.kasir.faq6.q': 'Apakah bisa untuk restoran/cafe?',
      'product.kasir.faq6.a': 'Ya! Klat Kasir punya mode restoran dengan fitur: menu dengan variasi (ukuran, topping), split bill, pemesanan meja, printer dapur, delivery order, dan integrasi GrabFood/GoFood.',
      'product.kasir.faq7.q': 'Bagaimana dengan laporan pajak PPN?',
      'product.kasir.faq7.a': 'Klat Kasir otomatis menghitung PPN 11% (siap untuk 12%). Laporan PPN masukan/keluar tersedia, bisa diekspor untuk pengisian SPT Masa PPN. Integrasi e-Faktur DJP juga tersedia.',
      'product.kasir.faq8.q': 'Apakah data saya aman?',
      'product.kasir.faq8.a': 'Ya! Data tersimpan lokal dengan enkripsi. Backup otomatis harian bisa disimpan ke USB/cloud. Tidak ada data yang dikirim ke server KlatAsia tanpa persetujuan Anda. Anda kendali penuh atas data.',
      'product.kasir.faq9.q': 'Bisakah multi-toko?',
      'product.kasir.faq9.a': 'Ya! Klat Kasir mendukung multi-toko dengan satu akun. Data tersinkron via internet. Laporan gabungan tersedia untuk pemilik bisnis yang mengelola beberapa cabang.',
      'product.kasir.faq10.q': 'Bagaimana cara mulai?',
      'product.kasir.faq10.a': 'Download, install, jalankan. Wizard setup akan membantu Anda: input data toko, tambah kategori produk, import produk dari CSV (jika ada), setup printer, dan mulai berjualan. Bisa berjualan dalam 10 menit!',
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
      { name: 'Klat Office', desc: 'Complete office suite alternative to MS Office. Includes: Klat Writer (word processor), Klat Calc (spreadsheet), Klat Impress (presentations), Klat Draw (vector graphics), Klat Math (formula editor), Klat Base (database). Full MS Office format compatibility, PDF export, templates, macros. Free on Windows & Linux.', desc_id: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', icon: 'mdi:file-document', color: '#f59e0b', platforms: ['Windows', 'Linux'], url: 'klatoffice.html' },
      { name: 'Klat Tube', desc: 'YouTube client for watching videos without ads. Features: ad-free playback, background play, picture-in-picture, download videos/audio, subscription management without account, sponsor block, quality selector, dark mode, no tracking. Free on Windows & Linux.', desc_id: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', icon: 'mdi:youtube', color: '#ef4444', platforms: ['Windows', 'Linux'], url: 'klattube.html' },
      { name: 'Klat OS', desc: 'Linux-based operating system built on Klat kernel. Lightweight, modern UI, pre-installed Klat apps (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling updates. Visit klatos.klat.asia for ISO download and documentation.', desc_id: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', icon: 'mdi:monitor', color: '#8b5cf6', platforms: ['Linux (ISO)'], url: 'os/index.html' }
    ],
    id: [
      { name: 'Klat AI', desc: 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.', desc_id: 'Asisten AI cerdas untuk coding, pembuatan gambar, dan tanya jawab umum. Mendukung multi-model AI, code completion, bantuan debugging, generasi gambar kreatif dengan prompt, dan jawaban pintar untuk pertanyaan apapun. Gratis dan tanpa batas.', icon: 'mdi:robot', color: '#5c6bc0', platforms: ['Windows', 'Linux'], url: 'klatai.html' },
      { name: 'Klat Browser', desc: 'Browser web modern didukung Klat Engine (engine proprietary, bukan Chrome/Gecko/WebKit). Fitur: ad blocker bawaan, perlindungan tracker, video downloader, reader mode, tema kustom, desain privacy-first, rendering cepat, penggunaan memori rendah. Gratis di Windows & Linux.', desc_id: 'Browser web modern didukung Klat Engine (engine proprietary, bukan Chrome/Gecko/WebKit). Fitur: ad blocker bawaan, perlindungan tracker, video downloader, reader mode, tema kustom, desain privacy-first, rendering cepat, penggunaan memori rendah. Gratis di Windows & Linux.', icon: 'mdi:web', color: '#3b82f6', platforms: ['Windows', 'Linux'], url: 'klatbrowser.html' },
      { name: 'Klat Downloader', desc: 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.', desc_id: 'Download manager cepat dan stabil mendukung HTTP/HTTPS/FTP, BitTorrent, dan situs streaming video. Fitur: multi-threaded download, resume, scheduler, pembatas bandwidth, integrasi browser, monitoring clipboard, scan virus. Gratis di Windows & Linux.', icon: 'mdi:download', color: '#10b981', platforms: ['Windows', 'Linux'], url: 'klatdownloader.html' },
      { name: 'Klat Office', desc: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', desc_id: 'Suite kantor lengkap alternatif MS Office. Termasuk: Klat Writer (kata), Klat Calc (spreadsheet), Klat Impress (presentasi), Klat Draw (grafis vektor), Klat Math (editor formula), Klat Base (database). Kompatibel format MS Office penuh, ekspor PDF, template, macro. Gratis di Windows & Linux.', icon: 'mdi:file-document', color: '#f59e0b', platforms: ['Windows', 'Linux'], url: 'klatoffice.html' },
      { name: 'Klat Tube', desc: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', desc_id: 'Klien YouTube untuk menonton video tanpa iklan. Fitur: putar tanpa iklan, background play, picture-in-picture, unduh video/audio, kelola langganan tanpa akun, sponsor block, pemilih kualitas, dark mode, tanpa tracking. Gratis di Windows & Linux.', icon: 'mdi:youtube', color: '#ef4444', platforms: ['Windows', 'Linux'], url: 'klattube.html' },
      { name: 'Klat OS', desc: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', desc_id: 'Sistem operasi berbasis Linux dengan kernel Klat. Ringan, UI modern, aplikasi Klat terpasang (AI, Browser, Downloader, Office, Tube), driver manager, software center, rolling update. Kunjungi klatos.klat.asia untuk download ISO dan dokumentasi.', icon: 'mdi:monitor', color: '#8b5cf6', platforms: ['Linux (ISO)'], url: 'os/index.html' }
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
    updateLangLabels();
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

  function updateLangLabels() {
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langLabelMobile) langLabelMobile.textContent = lang.toUpperCase();
  }

  if (langToggle) {
    langToggle.addEventListener('click', switchLang);
  }

  // Mobile language toggle
  var langToggleMobile = document.getElementById('langToggleMobile');
  var langLabelMobile = document.getElementById('langLabelMobile');
  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', switchLang);
  }

  // ========== THEME TOGGLE ==========
  var themeToggle = document.getElementById('themeToggle');
  var themeIcon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Initialize theme: localStorage > system preference > default light
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTheme(); }
    });
  }

  // Listen for system theme changes (only applies if no localStorage choice)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Update both language labels
  function updateLangLabels() {
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    if (langLabelMobile) langLabelMobile.textContent = lang.toUpperCase();
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