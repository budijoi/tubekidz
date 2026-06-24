var VIDEOS = [
  { id: "XqZsoesa55w", title: "Baby Shark Dance", channel: "Pinkfong", cat: "lagu" },
  { id: "e_04ZrNroTo", title: "Wheels on the Bus", channel: "CoComelon", cat: "lagu" },
  { id: "F4tHL8reNCs", title: "Johny Johny Yes Papa", channel: "LooLoo Kids", cat: "lagu" },
  { id: "ZzAm13KsBCc", title: "Bath Song + More", channel: "CoComelon", cat: "lagu" },
  { id: "_6HzoUcx3eo", title: "Old MacDonald Had A Farm", channel: "Super Simple Songs", cat: "lagu" },
  { id: "QT2B0HoDH5g", title: "Blippi Ultimate Roadtrip", channel: "Blippi", cat: "petualangan" },
  { id: "8_V80B2j1U8", title: "Blippi Belajar Traktor", channel: "Blippi", cat: "edukasi" },
  { id: "CBbjUQhzFEg", title: "Peppa Pig Tales 2025", channel: "Peppa Pig", cat: "kartun" },
  { id: "s8nCo3RtqRE", title: "Baby Shark 10B Views Spesial", channel: "Pinkfong", cat: "lagu" },
  { id: "k7D7a-btgug", title: "Bath Song", channel: "CoComelon", cat: "lagu" },
  { id: "9FDuUd39NOI", title: "Wheels on the Bus (Play)", channel: "CoComelon", cat: "lagu" },
  { id: "2iEpWefmdQI", title: "Best of Wheels on the Bus", channel: "CoComelon", cat: "lagu" },
  { id: "HHfEEUggHGk", title: "5 Little Ducks + More", channel: "CoComelon", cat: "lagu" },
  { id: "IPf2cA1KUdE", title: "Baby Shark Dance Compilation", channel: "Pinkfong", cat: "lagu" },
  { id: "D7MhgeV9yA8", title: "Old MacDonald + More", channel: "Super Simple Songs", cat: "lagu" },
  { id: "O1PnPqy1p7o", title: "1 Jam Blippi Edukasi", channel: "Blippi", cat: "edukasi" },
  { id: "t1WyHMc321g", title: "Peppa Pig Petualangan Musim Panas", channel: "Peppa Pig", cat: "kartun" },
  { id: "WDbG8d4q1Ik", title: "Johny Johny Yes Papa Official", channel: "LooLoo Kids", cat: "lagu" },
  { id: "YdBqbrF28e4", title: "Johny Johny Yes Papa Classic", channel: "LooLoo Kids", cat: "lagu" },
  { id: "N5YSbaUl9Y4", title: "5 Little Ducks (Warna)", channel: "Lalafun", cat: "lagu" },
  { id: "lchFVJgbf9Y", title: "Wheels on the Bus To School", channel: "CoComelon", cat: "lagu" },
  { id: "98PPVJ05Mi4", title: "Wheels on the Bus 15 Min", channel: "CoComelon", cat: "lagu" },
  { id: "wV3N-wCRL2k", title: "Wheels on the Bus + More", channel: "CoComelon", cat: "lagu" },
  { id: "psnJCW0XEkY", title: "Wheels on the Bus Learning", channel: "CoComelon", cat: "edukasi" },
  { id: "xdQlJwG_MJM", title: "Blippi di Walt Disney World", channel: "Blippi", cat: "petualangan" },
  { id: "7GjOOyBoELw", title: "Johny Johny Yes Papa Fun", channel: "LooLoo Kids", cat: "lagu" },
  { id: "rN0BMRkg0_8", title: "Baby Shark Karaoke", channel: "Pinkfong", cat: "lagu" },
  { id: "0K0hEwih_2E", title: "Head Shoulders Knees Toes", channel: "CoComelon", cat: "lagu" },
  { id: "pW7iZgYGR-U", title: "Blippi Visits Zoo", channel: "Blippi", cat: "petualangan" },
  { id: "M5BYn2dYF74", title: "Peppa Pig Christmas", channel: "Peppa Pig", cat: "kartun" },
  { id: "hMvsL0bSGQ0", title: "Wheels on the Bus Animals", channel: "Super Simple Songs", cat: "lagu" },
  { id: "8P1n6qE-OAc", title: "Blippi Fire Truck", channel: "Blippi", cat: "edukasi" },
  { id: "SJ1UJBIEBQ4", title: "Bath Song Animals", channel: "LooLoo Kids", cat: "lagu" },
  { id: "J3OXGk4FtV4", title: "Twinkle Twinkle Little Star", channel: "Super Simple Songs", cat: "lagu" },
  { id: "SRzry3xv_Nc", title: "Peppa Pig Playground", channel: "Peppa Pig", cat: "kartun" },
  { id: "bO0kLBk_12A", title: "Blippi Sink or Float", channel: "Blippi", cat: "edukasi" },
  { id: "hmxX1fJSnxo", title: "Menyamar Di Tower Mecha Chameleon", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "lsU33r4Ht18", title: "Bekerja Dirumah Sakit Hewan", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "jXmfua5Z72g", title: "Pilih HP IPHONE 17 Atau Samsung?", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "neUCuq_XoqY", title: "Membuat Pasukan Klone Paling Kuat", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "KVGaZnunwKI", title: "Bertahan Dari Tantangan 7 Hari Mr Beast", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "ra5cpdmVRzc", title: "Mencari Semua SCP", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "NN7pe0rFfaA", title: "Main Uno Di Atas Tower Hancur", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "C34L3bMFA4w", title: "Tidak Boleh Bersuara Atau Meninggoy", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "9DiEtI5f51M", title: "Jual Lemon Sampe Jadi Kaya", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "8uHn83lbdkw", title: "Cari Squishy Needoh Paling Empuk", channel: "Dunia Farash ROBLOX", cat: "petualangan" },
  { id: "-6kCEYFPLc0", title: "Yuta Dan Mio Lihat Hantu Pocong Vs Thomas Exe", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "MRa6QdLLV5g", title: "Dikejar CHOO CHOO CHARLES Karena Mengambil Telurnya", channel: "Dunia Farash ROBLOX", cat: "gaming" },
  { id: "cPlrUPqLnpQ", title: "Pelihara Sapi Qurban Idul Adha", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "JrfoMnoKYaU", title: "Antar MBG Ke Sekolah Terpencil", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "JqZqBtpV3aQ", title: "Tambah Kecepatan Di ASMR Keyboard Coklat", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "IbCZa0rmT0k", title: "Jualan Mie Ayam Sidoarjo", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "ZuuW9ctOEnI", title: "Jadi Kelelawar Karena Kak Yuta Dan Kak Mio", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "jhlBcXXZ0Jo", title: "Balapan Di Tower Swing", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "1Q4PCn8IEIg", title: "Naik Tower Kicau Mania", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "k6fh9f5iP3E", title: "Jaga Dirumah Sakit Hewan", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "EoKmmULT8I0", title: "Kerjasama Kabur Dari Sekolah", channel: "Popo Mimi ROBLOX", cat: "gaming" },
  { id: "eXEDsEKG9tY", title: "Menemukan Bayi Monster The Bloop Tersesat", channel: "FranzRX1", cat: "gaming" },
  { id: "2x6V_oMVveg", title: "Mencoba Kabur Dari Hantu The Boiled One", channel: "FranzRX1", cat: "gaming" },
  { id: "151_yPKqBCg", title: "Panik Ada Bencana Kiamat Villager", channel: "FranzRX1", cat: "gaming" },
  { id: "nA2co8Otz0U", title: "Sembunyi Dari Hantu Leher Panjang", channel: "FranzRX1", cat: "gaming" },
  { id: "vj_jEix9eP0", title: "Prank Teman Jadi Monster", channel: "FranzRX1", cat: "gaming" },
  { id: "Y9Pu9lnVQcM", title: "Prank Teman Jadi Ular Mengerikan", channel: "FranzRX1", cat: "gaming" }
];

var CATEGORIES = { semua: "all", edukasi: "edukasi", lagu: "lagu", kartun: "kartun", petualangan: "petualangan", gaming: "gaming" };

var IS_FILE = window.location.protocol === "file:";

var EMBEDS = [];
if (!IS_FILE) {
  EMBEDS.push({ name: "YouTube", url: "https://www.youtube.com/embed/" });
}
EMBEDS.push({ name: "Piped", url: "https://piped.video/embed/" });

var OEMBED = "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=";

var state = {
  view: "home",
  cat: "all",
  query: "",
  videoId: null,
  loadTimer: null,
  metadata: {}
};

var el = {
  view: document.getElementById("viewContent"),
  search: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  nav: document.getElementById("mainNav"),
  logo: document.getElementById("logoLink"),
  modal: document.getElementById("watchModal"),
  title: document.getElementById("modalTitle"),
  wrapper: document.getElementById("videoWrapper"),
  fallback: document.getElementById("fallbackMsg"),
  ytLink: document.getElementById("ytLink"),
  details: document.getElementById("videoDetails"),
  uploader: document.getElementById("vdUploader"),
  desc: document.getElementById("vdDesc"),
  close: document.getElementById("modalClose")
};

function esc(s) {
  if (!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function thumb(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }

function dur(t) {
  if (!t) return "";
  var m = Math.floor(t / 60);
  var s = Math.floor(t % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

function channelName(raw) {
  if (!raw) return "";
  return raw.replace(/\s*[-–|].*$/, "").trim();
}

function getSafeVideos(cat, query) {
  var out = [];
  for (var i = 0; i < VIDEOS.length; i++) {
    var v = VIDEOS[i];
    var matchCat = cat === "all" || v.cat === cat;
    var q = (query || "").toLowerCase();
    var matchSearch = !q || v.title.toLowerCase().indexOf(q) !== -1 || v.channel.toLowerCase().indexOf(q) !== -1;
    if (matchCat && matchSearch) out.push(v);
  }
  return out;
}

function getChannels() {
  var map = {};
  for (var i = 0; i < VIDEOS.length; i++) {
    map[VIDEOS[i].channel] = true;
  }
  return Object.keys(map).sort();
}

function catLabel(cat) {
  var m = { edukasi: "Edukasi", lagu: "Lagu Anak", kartun: "Kartun", petualangan: "Petualangan", gaming: "Gaming" };
  return m[cat] || cat;
}

function catClass(cat) {
  return ["edukasi","lagu","kartun","petualangan","gaming"].indexOf(cat) !== -1 ? cat : "";
}

// ================= OEMBED =================

function fetchMeta(videoId, cb) {
  if (state.metadata[videoId]) { cb(null, state.metadata[videoId]); return; }

  var s = document.createElement("script");
  s.src = OEMBED + videoId + "&format=json&callback=handleOembed";
  window.handleOembed = function(data) {
    delete window.handleOembed;
    state.metadata[videoId] = data;
    cb(null, data);
  };
  s.onerror = function() { cb(new Error("oEmbed failed")); };
  document.head.appendChild(s);
}

// ================= RENDER =================

function render() {
  if (state.view === "home") renderHome();
  else if (state.view === "categories") renderCategories();
  else if (state.view === "channel") renderChannel(state.channelName);
  else if (state.view === "search") renderSearch(state.query);
}

function renderHome() {
  var cats = ["lagu", "edukasi", "kartun", "petualangan", "gaming"];
  var html = "";

  for (var c = 0; c < cats.length; c++) {
    var items = getSafeVideos(cats[c], "");
    if (items.length === 0) continue;
    html += '<div class="section">';
    html += '<h2 class="section-title"><span class="sec-cat-tag ' + catClass(cats[c]) + '">' + catLabel(cats[c]) + '</span></h2>';
    html += '<div class="video-grid">';
    for (var i = 0; i < Math.min(items.length, 8); i++) {
      html += cardHtml(items[i]);
    }
    html += '</div></div>';
  }

  if (!html) html = '<div class="no-results">Belum ada video</div>';
  el.view.innerHTML = html;
}

function renderCategories() {
  var cats = [
    { id: "all", label: "Semua" },
    { id: "edukasi", label: "Edukasi" },
    { id: "lagu", label: "Lagu Anak" },
    { id: "kartun", label: "Kartun" },
    { id: "petualangan", label: "Petualangan" },
    { id: "gaming", label: "Gaming" }
  ];

  var html = '<div class="cat-pills" id="catPills">';
  for (var i = 0; i < cats.length; i++) {
    html += '<button class="cat-pill' + (i === 0 ? ' active' : '') + '" data-cat="' + cats[i].id + '">' + cats[i].label + '</button>';
  }
  html += '</div><div class="video-grid" id="catGrid">';
  var items = getSafeVideos("all", "");
  for (var i = 0; i < items.length; i++) {
    html += cardHtml(items[i]);
  }
  html += '</div>';
  el.view.innerHTML = html;

  var btns = el.view.querySelectorAll(".cat-pill");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var parent = this.parentNode;
      var allBtns = parent.querySelectorAll(".cat-pill");
      for (var j = 0; j < allBtns.length; j++) allBtns[j].classList.remove("active");
      this.classList.add("active");
      var grid = document.getElementById("catGrid");
      var items = getSafeVideos(this.dataset.cat, "");
      grid.innerHTML = "";
      for (var k = 0; k < items.length; k++) {
        grid.innerHTML += cardHtml(items[k]);
      }
    });
  }
}

function renderChannel(chName) {
  var items = [];
  for (var i = 0; i < VIDEOS.length; i++) {
    if (VIDEOS[i].channel === chName) items.push(VIDEOS[i]);
  }
  el.view.innerHTML =
    '<div class="channel-header"><div class="channel-avatar" style="background:linear-gradient(135deg,#ff6b6b,#ffa94d)">' +
    '<span style="font-size:2rem;color:#fff;font-weight:800">' + esc(chName.charAt(0)) + '</span></div>' +
    '<div class="channel-info"><h1>' + esc(chName) + '</h1></div></div>' +
    '<div class="video-grid">';
  for (var i = 0; i < items.length; i++) {
    el.view.innerHTML += cardHtml(items[i]);
  }
  el.view.innerHTML += '</div>';
}

function renderSearch(query) {
  var items = getSafeVideos("all", query);
  var html = '<h2 style="font-size:1.3rem;margin:20px 0 16px;font-weight:800;">Hasil untuk "' + esc(query) + '"</h2>';
  if (items.length === 0) {
    html += '<div class="no-results">Tidak ada video yang cocok</div>';
  } else {
    html += '<div class="video-grid">';
    for (var i = 0; i < items.length; i++) html += cardHtml(items[i]);
    html += '</div>';
  }
  el.view.innerHTML = html;
}

function cardHtml(v) {
  return '<div class="video-card" data-id="' + v.id + '" data-title="' + esc(v.title) + '" data-channel="' + esc(v.channel) + '" data-cat="' + v.cat + '">' +
    '<div class="thumb-wrap">' +
    '<img src="' + thumb(v.id) + '" alt="' + esc(v.title) + '" loading="lazy">' +
    '<div class="play-badge">&#9654;</div></div>' +
    '<div class="video-info">' +
    '<h3>' + esc(v.title) + '</h3>' +
    '<div class="video-meta">' +
    '<span class="channel-link">' + esc(v.channel) + '</span>' +
    '</div></div></div>';
}

// ================= PLAYER =================

function openPlayer(videoId, title, channel) {
  state.videoId = videoId;
  el.title.textContent = title || "";
  el.ytLink.href = "https://www.youtube.com/watch?v=" + videoId;
  el.fallback.style.display = "none";
  el.wrapper.innerHTML = "";
  el.uploader.textContent = channel || "";
  el.uploader.dataset.channel = channel || "";
  el.desc.textContent = "Memuat informasi video...";

  el.modal.classList.add("show");
  document.body.style.overflow = "hidden";

  fetchMeta(videoId, function(err, data) {
    if (data) {
      if (data.author_name && el.uploader) {
        el.uploader.textContent = data.author_name;
        el.uploader.dataset.channel = data.author_name;
      }
      el.desc.textContent = data.title || "";
    }
  });

  var idx = 0;

  function tryNext() {
    if (!el.modal.classList.contains("show")) return;
    if (idx >= EMBEDS.length) {
      el.fallback.style.display = "block";
      return;
    }

    var inst = EMBEDS[idx];
    idx++;

    if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }

    var iframe = document.createElement("iframe");
    iframe.src = inst.url + videoId + "?autoplay=1&rel=0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    iframe.addEventListener("load", function() {
      if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
    });

    el.wrapper.appendChild(iframe);

    state.loadTimer = setTimeout(function() {
      if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
      tryNext();
    }, 7000);
  }

  tryNext();
}

function closePlayer() {
  el.modal.classList.remove("show");
  document.body.style.overflow = "";
  el.wrapper.innerHTML = "";
  el.fallback.style.display = "none";
  if (state.loadTimer) { clearTimeout(state.loadTimer); state.loadTimer = null; }
  state.videoId = null;
}

// ================= NAVIGATION =================

function goHome() {
  state.view = "home";
  updateNav("home");
  render();
}

function goSearch(query) {
  if (!query.trim()) return;
  state.view = "search";
  state.query = query.trim();
  updateNav(null);
  render();
}

function goChannel(name) {
  state.view = "channel";
  state.channelName = name;
  updateNav(null);
  render();
}

function updateNav(view) {
  var links = el.nav.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle("active", links[i].dataset.view === view);
  }
}

// ================= EVENTS =================

el.view.addEventListener("click", function(e) {
  var card = e.target.closest(".video-card");
  if (card) {
    e.preventDefault();
    openPlayer(card.dataset.id, card.dataset.title, card.dataset.channel);
    return;
  }

  var channel = e.target.closest(".channel-link");
  if (channel) {
    e.preventDefault();
    var parent = channel.closest(".video-card");
    if (parent) goChannel(parent.dataset.channel);
  }
});

el.uploader.addEventListener("click", function() {
  if (this.textContent) goChannel(this.textContent);
});

el.searchBtn.addEventListener("click", function() { goSearch(el.search.value); });
el.search.addEventListener("keyup", function(e) { if (e.key === "Enter") goSearch(this.value); });

el.nav.addEventListener("click", function(e) {
  var link = e.target.closest(".nav-link");
  if (!link) return;
  if (link.dataset.view === "home") goHome();
  else if (link.dataset.view === "categories") { state.view = "categories"; updateNav("categories"); render(); }
});

el.logo.addEventListener("click", goHome);
el.close.addEventListener("click", closePlayer);
el.modal.addEventListener("click", function(e) { if (e.target === el.modal) closePlayer(); });
document.addEventListener("keydown", function(e) { if (e.key === "Escape") closePlayer(); });

// ================= INIT =================
if (IS_FILE) {
  var banner = document.getElementById("protocolBanner");
  if (banner) {
    banner.style.display = "block";
    banner.innerHTML = "&#128161; Halaman dibuka dari <code>file://</code>. YouTube Embed tidak diizinkan oleh browser. " +
      "Jalankan server lokal untuk pengalaman terbaik:<br><code>npx serve</code> atau <code>python -m http.server 8080</code>, " +
      "lalu buka <code>http://localhost:8080</code>";
  }
}
goHome();
