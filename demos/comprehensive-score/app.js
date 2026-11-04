(function () {
  var INFO = window.CLASS_INFO;
  var ZC = window.ZC;
  var KEY = "neptune-score-demo-kj2501-v2";
  var TABS = [
    ["gpa", "绩点"],
    ["apply", "申报"],
    ["review", "审核"],
    ["rules", "规则"],
    ["quota", "名额"]
  ];
  var CATS = [
    { id: "荣誉称号", levels: ["4分档", "3分档", "2分档", "1分档"], ranks: [], lead: false },
    { id: "通报表扬", levels: ["学院", "年级"], ranks: [], lead: false },
    { id: "体育比赛", levels: ["国家级", "省级", "校级", "院级", "年级"], ranks: ["一等奖", "二等奖", "三等奖", "四等奖"], lead: true, leadLabel: "主力" },
    { id: "文艺活动", levels: ["国家级", "省级", "校级", "院级", "年级"], ranks: ["一等奖", "二等奖", "三等奖", "四等奖"], lead: true, leadLabel: "主演" },
    { id: "学习竞赛", levels: ["国家级", "省级", "校级", "院级"], ranks: ["一等奖", "二等奖", "三等奖"], lead: false },
    { id: "学术论文", levels: ["3分档", "1分档"], ranks: [], lead: false },
    { id: "科研成果", levels: ["3分档", "2分档", "1分档"], ranks: [], lead: false },
    { id: "专利", levels: ["发明专利", "实用新型"], ranks: [], lead: false },
    { id: "英语六级", levels: [], ranks: [], lead: false, titleOptional: true },
    { id: "社会工作", levels: ["一档", "二档", "三档"], ranks: ["优秀", "良好", "合格"], lead: false, levelLabel: "职务档", rankLabel: "考核" },
    { id: "文明宿舍", levels: ["标兵宿舍", "文明宿舍0.2档", "文明宿舍0.1档"], ranks: [], lead: true, leadLabel: "宿舍长" }
  ];
  var BASE_ITEMS = ["公益性志愿服务", "年级以上校园文化活动", "院级以上人文或学术讲座", "院级以上学术、科技或竞赛", "1500字学习心得或实践报告"];
  var REASONS = ["级别不符", "材料不清", "不在加分目录", "重复申报", "超过封顶"];
  var RULES = [
    { q: "科学文化", t: "ROUND(MIN(MAX(((平均学分绩点 - 1) × 10 + 60) × 70%, 0), 70), 2)" },
    { q: "基本分", t: "五项各 0.2。未填 0。已填为 MIN(已得项之和 + 0.2, 1)" },
    { q: "通报表扬 / 荣誉称号", t: "荣誉称号 4 / 3 / 2 / 1。学院通报 0.5，年级通报 0.2，合计不超过 1，再与荣誉称号合计不超过 2" },
    { q: "社会工作", t: "只取最高。一档 1 / 0.8 / 0.6，二档 0.8 / 0.6 / 0.4，三档 0.6 / 0.4 / 0.3" },
    { q: "宿舍", t: "标兵 0.3，文明 0.2 / 0.1。宿舍长 +0.1。多项只取最高" },
    { q: "文体", t: "国家级 3 / 2.5 / 2 / 1.5，省级 2 / 1.5 / 1 / 0.8，校级 1 / 0.8 / 0.6 / 0.4，院级 0.5 / 0.4 / 0.3 / 0，年级 0.3 / 0.2 / 0.1 / 0。非主力或主演 ×0.5。院级加年级不超过 0.5" },
    { q: "学习竞赛", t: "国家级 3 / 2.5 / 2，省级 2 / 1.5 / 1，校级 1 / 0.8 / 0.5，院级 0.5 / 0.3 / 0.1" },
    { q: "论文 / 专利 / 六级 / 科研", t: "论文 3 或 1，科研 3 / 2 / 1，发明专利 2，实用新型 1，英语六级 0.5" },
    { q: "素质拓展", t: "社会工作、精神文明、宿舍、文体、竞赛、科研合计不超过 5，再加基本分" },
    { q: "奖学金名额", t: "国家奖学金 1，国家励志奖学金 3，校一等 2，校二等 4，校三等 11。按平均学分绩点排序。警告及以上处分不参评。国家励志奖学金限已认定困难学生" },
    { q: "驳回", t: "级别不符、材料不清、不在加分目录、重复申报、超过封顶" },
    { q: "转专业", t: "采用总表绩点。申报绩点经班委、年级委通过后替换" },
    { q: "通报表扬导入", t: "年级 0.2，学院 0.5。导入后状态为待班委" }
  ];

  var state = load();
  var ui = { role: "导员", stu: INFO.students[0].id, tab: "gpa", page: 1, pageSize: 10 };
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6.5 3.5H7z"/><path fill="none" stroke="currentColor" stroke-width="1.7" d="M14 3.5V8.5h5"/></svg>';
  var HOME = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.8z"/></svg>';

  function seed() {
    return {
      awards: [
        award("S02", "学习竞赛", "校级", "一等奖", "学科竞赛", true, "证书.png", false, "学生", "待班委"),
        award("S02", "学习竞赛", "校级", "一等奖", "学科竞赛", true, "证书-再次.png", true, "学生", "待班委"),
        award("S08", "体育比赛", "院级", "一等奖", "院运动会", false, "秩序册.png", false, "学生", "通过")
      ],
      base: {},
      hardship: {},
      discipline: {},
      notice: ""
    };
  }
  function award(studentId, category, level, rank, title, lead, fileName, duplicate, source, status) {
    return {
      id: "A" + Math.random().toString(36).slice(2, 8),
      studentId: studentId, category: category, level: level, rank: rank, title: title,
      lead: lead, fileName: fileName, duplicate: duplicate, source: source, status: status,
      reason: "", trail: [{ at: "初始", actor: source, action: "进入" + status }]
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return seed();
  }
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

  function student(id) { return INFO.students.filter(function (s) { return s.id === id; })[0]; }
  function gpaDiff(s) { return Math.abs(Number(s.gpa) - Number(s.gpaSheet)) > 0.001; }
  function transferAward(s) {
    var list = state.awards.filter(function (a) { return a.studentId === s.id && a.category === "转专业绩点" && a.status === "通过"; });
    return list.length ? list[0] : null;
  }
  function effectiveGpa(s) {
    var done = transferAward(s);
    return done ? Number(done.declaredGpa) : Number(s.gpa);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function catOf(id) { return CATS.filter(function (c) { return c.id === id; })[0]; }
  function baseOf(id) { return state.base[id] || [false, false, false, false, false]; }
  function passedOf(id) { return state.awards.filter(function (a) { return a.studentId === id && a.status === "通过"; }); }
  function summaryOf(id) { return ZC.summarize(baseOf(id), passedOf(id)); }

  function options(list, placeholder) {
    var html = placeholder ? '<option value="">' + esc(placeholder) + "</option>" : "";
    list.forEach(function (x) { html += '<option value="' + esc(x) + '">' + esc(x) + "</option>"; });
    return html;
  }

  function tabName() {
    var hit = TABS.filter(function (t) { return t[0] === ui.tab; })[0];
    return hit ? hit[1] : "";
  }
  function slicePage(list) {
    var size = ui.pageSize;
    var pages = Math.max(1, Math.ceil(list.length / size));
    if (ui.page > pages) ui.page = pages;
    if (ui.page < 1) ui.page = 1;
    var start = (ui.page - 1) * size;
    return { rows: list.slice(start, start + size), start: start, total: list.length, pages: pages };
  }
  function pagerHtml(meta) {
    var from = meta.total ? meta.start + 1 : 0;
    var to = meta.start + meta.rows.length;
    var sizes = [10, 20, 50].map(function (n) {
      return '<option value="' + n + '"' + (n === ui.pageSize ? " selected" : "") + ">" + n + "</option>";
    }).join("");
    var btns = '<button type="button" class="pg" data-page="prev"' + (ui.page <= 1 ? " disabled" : "") + ">‹</button>";
    for (var i = 1; i <= meta.pages; i++) {
      btns += '<button type="button" class="pg' + (i === ui.page ? " on" : "") + '" data-page="' + i + '">' + i + "</button>";
    }
    btns += '<button type="button" class="pg" data-page="next"' + (ui.page >= meta.pages ? " disabled" : "") + ">›</button>";
    return '<div class="pager"><select id="pageSize">' + sizes + '</select><span>显示 ' + from + " 到 " + to + " 条，共 " + meta.total + ' 条数据</span><div class="pg-btns">' + btns + "</div></div>";
  }
  function emptyRow(cols) {
    return '<tr><td class="empty" colspan="' + cols + '">暂无数据</td></tr>';
  }
  function render() {
    var role = document.getElementById("role");
    if (!role.options.length) ["导员", "班委", "年级委", "学生"].forEach(function (r) { role.add(new Option(r, r)); });
    role.value = ui.role;
    var stu = document.getElementById("stu");
    if (!stu.options.length) INFO.students.forEach(function (s) { stu.add(new Option(s.name, s.id)); });
    stu.value = ui.stu;
    stu.style.display = ui.role === "学生" ? "" : "none";
    document.getElementById("pageTitle").textContent = tabName();
    document.getElementById("crumb").innerHTML = HOME + "<span>综测核算</span><span>›</span><span>" + esc(tabName()) + "</span>";
    document.getElementById("nav").innerHTML = TABS.map(function (t) {
      return '<button type="button" data-tab="' + t[0] + '" class="' + (ui.tab === t[0] ? "on" : "") + '">' + ICON + t[1] + "</button>";
    }).join("");
    var views = { gpa: viewGpa, apply: viewApply, review: viewReview, rules: viewRules, quota: viewQuota };
    document.getElementById("main").innerHTML = views[ui.tab]();
    if (ui.tab === "rules") document.getElementById("hits").innerHTML = ruleHits(document.getElementById("q").value);
    if (ui.tab === "apply" && document.getElementById("cat")) syncCatFields();
  }

  function transferState(s) {
    var list = state.awards.filter(function (a) { return a.studentId === s.id && a.category === "转专业绩点"; });
    if (!list.length) return "—";
    var a = list[0];
    if (a.status === "通过") return a.declaredGpa;
    return a.status;
  }
  function viewGpa() {
    var people = ui.role === "学生" ? [student(ui.stu)] : INFO.students;
    var meta = slicePage(people);
    var rows = meta.rows.map(function (s, i) {
      var used = effectiveGpa(s);
      var sheet = gpaDiff(s) ? '<span class="danger">' + s.gpaSheet + "</span>" : String(s.gpaSheet);
      return "<tr><td>" + (meta.start + i + 1) + "</td><td>" + esc(s.name) + "</td><td>" + s.gpa + "</td><td>" + sheet + "</td><td>" + used + "</td><td>" + ZC.academic(used) + "</td><td>" + esc(transferState(s)) + "</td></tr>";
    }).join("") || emptyRow(7);
    var form = "";
    if (ui.role === "学生") {
      var pending = state.awards.some(function (a) { return a.studentId === ui.stu && a.category === "转专业绩点" && (a.status === "待班委" || a.status === "待年级委"); });
      form = '<div class="toolbar"><label>转专业绩点 <input id="newGpa" type="text" placeholder="0–5"></label><label>成绩单 <input id="gpaFile" type="file"></label><button type="button" class="primary" id="submitTransfer"' + (pending ? " disabled" : "") + ">提交</button></div>";
    }
    return form + '<table><thead><tr><th>序号</th><th>姓名</th><th>总表绩点</th><th>绩点表</th><th>采用绩点</th><th>科学文化</th><th>转专业</th></tr></thead><tbody>' + rows + "</tbody></table>" + pagerHtml(meta);
  }

  function awardOps(a) {
    if (ui.role === "学生" && ui.stu === a.studentId && (a.status === "通过" || a.status === "驳回")) {
      return '<button type="button" class="link" data-object="' + a.id + '">再次提交</button>';
    }
    if ((ui.role === "班委" && a.status === "待班委") || (ui.role === "年级委" && a.status === "待年级委")) {
      return '<select data-reason="' + a.id + '">' + options(REASONS, "驳回理由") + '</select><button type="button" class="link" data-pass="' + a.id + '">通过</button><button type="button" class="link danger" data-reject="' + a.id + '">驳回</button>';
    }
    return "";
  }
  function awardRows(list, meta) {
    return meta.rows.map(function (a, i) {
      var s = student(a.studentId);
      var transfer = a.category === "转专业绩点";
      var pts = transfer ? ZC.academic(a.declaredGpa) : ZC.itemPoints(a);
      var status = esc(a.status);
      if (a.duplicate) status += ' <span class="danger">重复</span>';
      if (a.reason) status += " " + esc(a.reason);
      var detail = transfer ? esc(a.declaredGpa) : esc([a.level, a.rank, a.title].filter(Boolean).join(" / "));
      return "<tr><td>" + (meta.start + i + 1) + "</td><td>" + esc(s.name) + "</td><td>" + esc(transfer ? "转专业绩点" : a.category) + "</td><td>" + detail + "</td><td class=\"status\">" + status + "</td><td>" + pts + "</td><td>" + esc(a.fileName || "—") + '</td><td class="ops">' + awardOps(a) + "</td></tr>";
    }).join("") || emptyRow(8);
  }
  function awardTable(list) {
    var meta = slicePage(list);
    return '<table><thead><tr><th>序号</th><th>姓名</th><th>类别</th><th>内容</th><th>状态</th><th>分值</th><th>佐证</th><th>操作</th></tr></thead><tbody>' + awardRows(list, meta) + "</tbody></table>" + pagerHtml(meta);
  }
  function viewCounselor() {
    var imported = state.awards.filter(function (a) { return a.source === "导员导入"; });
    var msg = state.notice ? '<span class="stat" id="recognizeMsg">' + esc(state.notice) + "</span>" : '<span class="stat" id="recognizeMsg"></span>';
    return '<div class="toolbar"><input id="noticeFile" type="file" accept=".pdf,image/*" disabled><button type="button" class="primary" id="doRecognize" disabled>识别并申报</button><span class="stat">文件自动识别需本机 OCR 服务；可切换学生角色体验手动申报。</span>' + msg + "</div>" + awardTable(imported);
  }
  function viewApply() {
    if (ui.role === "导员") return viewCounselor();
    if (ui.role !== "学生") return awardTable([]);
    var sid = ui.stu;
    var s = student(sid);
    var flags = baseOf(sid);
    var checks = BASE_ITEMS.map(function (label, i) {
      return '<label><input type="checkbox" data-base="' + i + '"' + (flags[i] ? " checked" : "") + "> " + esc(label) + "</label>";
    }).join("");
    var sum = summaryOf(sid);
    var mine = state.awards.filter(function (a) { return a.studentId === sid && a.category !== "转专业绩点"; });
    return '<div class="toolbar"><span class="stat">' + esc(s.name) + '　科学文化 <b>' + ZC.academic(effectiveGpa(s)) + "</b>　素质拓展 <b>" + sum.extension + "</b></span></div>" +
      '<div class="toolbar checks">' + checks + "</div>" +
      '<div class="toolbar"><label>类别 <select id="cat">' + options(CATS.map(function (c) { return c.id; })) + '</select></label><label>级别 <select id="level"></select></label><label>名次 <select id="rank"></select></label><label>名称 <input id="title" type="text"></label><label id="leadWrap"><input id="lead" type="checkbox"> <span id="leadText">主力</span></label><label>佐证 <input id="file" type="file"></label><span class="stat">分值 <b id="preview"></b></span><button type="button" class="primary" id="submitAward">提交</button></div>' +
      awardTable(mine);
  }

  function viewReview() {
    var list = state.awards.filter(function (a) {
      if (ui.role === "班委") return a.status === "待班委";
      if (ui.role === "年级委") return a.status === "待年级委";
      return true;
    });
    return awardTable(list);
  }

  function viewRules() {
    return '<div class="toolbar"><input class="search" id="q" type="text" placeholder="关键词" value="' + esc(ui.q || "") + '"></div><table><thead><tr><th>序号</th><th>项目</th><th>分值</th></tr></thead><tbody id="hits"></tbody></table><div id="rulePager"></div>';
  }
  function ruleHits(q) {
    q = (q || "").trim();
    var rows = RULES.filter(function (r) { return !q || (r.q + r.t).indexOf(q) >= 0; });
    var meta = slicePage(rows);
    var pager = document.getElementById("rulePager");
    if (pager) pager.innerHTML = pagerHtml(meta);
    return meta.rows.map(function (r, i) {
      return "<tr><td>" + (meta.start + i + 1) + "</td><td>" + esc(r.q) + '</td><td class="rule">' + esc(r.t) + "</td></tr>";
    }).join("") || emptyRow(3);
  }

  function assignQuota() {
    var ranked = INFO.students.slice().sort(function (a, b) { return effectiveGpa(b) - effectiveGpa(a) || a.row - b.row; });
    var result = {};
    ranked.forEach(function (s) { result[s.id] = state.discipline[s.id] ? "不符合" : ""; });
    var rest = ranked.filter(function (s) { return !state.discipline[s.id]; });
    function take(label, n, pool) {
      var got = [];
      pool.slice().forEach(function (s) {
        if (got.length >= n) return;
        if (result[s.id]) return;
        result[s.id] = label;
        got.push(s);
      });
      return got.length;
    }
    take("国家奖学金候选人", INFO.quota["国家奖学金"], rest);
    var hard = rest.filter(function (s) { return state.hardship[s.id]; });
    var nHard = take("国家励志奖学金候选人", INFO.quota["国家励志奖学金"], hard);
    take("校一等奖学金候选人", INFO.quota["校一等奖学金"], rest);
    take("校二等奖学金候选人", INFO.quota["校二等奖学金"], rest);
    take("校三等奖学金候选人", INFO.quota["校三等奖学金"], rest);
    var backups = 0;
    rest.forEach(function (s) {
      if (result[s.id] || backups >= 3) return;
      result[s.id] = "候补";
      backups += 1;
    });
    rest.forEach(function (s) { if (!result[s.id]) result[s.id] = "—"; });
    return { result: result, ranked: ranked, hardshipFilled: nHard };
  }

  function viewQuota() {
    var pack = assignQuota();
    var meta = slicePage(pack.ranked);
    var body = meta.rows.map(function (s, i) {
      var sum = summaryOf(s.id);
      var mark = "";
      if (ui.role === "导员") {
        mark = '<button type="button" class="link" data-hard="' + s.id + '">' + (state.hardship[s.id] ? "取消困难认定" : "困难认定") + '</button><button type="button" class="link" data-disc="' + s.id + '">' + (state.discipline[s.id] ? "取消处分" : "处分") + "</button>";
      }
      var used = effectiveGpa(s);
      return "<tr><td>" + (meta.start + i + 1) + "</td><td>" + esc(s.name) + "</td><td>" + used + "</td><td>" + ZC.academic(used) + "</td><td>" + sum.extension + "</td><td>" + esc(pack.result[s.id]) + '</td><td class="ops">' + mark + "</td></tr>";
    }).join("");
    return '<table><thead><tr><th>序号</th><th>姓名</th><th>绩点</th><th>科学文化</th><th>素质拓展</th><th>结果</th><th>操作</th></tr></thead><tbody>' + body + "</tbody></table>" + pagerHtml(meta);
  }

  function refreshPreview() {
    var el = document.getElementById("preview");
    if (!el) return;
    var cat = catOf(document.getElementById("cat").value);
    var draft = {
      category: cat.id,
      level: document.getElementById("level").value,
      rank: document.getElementById("rank").value,
      lead: document.getElementById("lead").checked,
      status: "待班委"
    };
    el.textContent = ZC.itemPoints(draft);
  }
  function syncCatFields() {
    var cat = catOf(document.getElementById("cat").value);
    var level = document.getElementById("level");
    var rank = document.getElementById("rank");
    level.innerHTML = options(cat.levels);
    rank.innerHTML = options(cat.ranks);
    level.parentElement.style.display = cat.levels.length ? "" : "none";
    rank.parentElement.style.display = cat.ranks.length ? "" : "none";
    document.getElementById("leadWrap").style.display = cat.lead ? "" : "none";
    document.getElementById("leadText").textContent = cat.leadLabel || "主力";
    refreshPreview();
  }

  function submitAward() {
    var cat = catOf(document.getElementById("cat").value);
    var title = document.getElementById("title").value.trim();
    var file = document.getElementById("file").files[0];
    if (!cat.titleOptional && !title) { window.alert("请填写名称"); return; }
    if (!file) { window.alert("请上传佐证"); return; }
    if (!cat.titleOptional && title.length < 2) { window.alert("请填写名称"); return; }
    var sid = ui.stu;
    var norm = (title || cat.id).replace(/\s/g, "");
    var dup = state.awards.some(function (a) {
      return a.studentId === sid && a.status !== "驳回" && a.category === cat.id && (a.title || "").replace(/\s/g, "") === norm;
    });
    if (dup && !window.confirm("已有相同名称，仍要提交？")) return;
    state.awards.unshift({
      id: "A" + Math.random().toString(36).slice(2, 8),
      studentId: sid, category: cat.id, level: document.getElementById("level").value,
      rank: document.getElementById("rank").value, title: title || cat.id,
      lead: document.getElementById("lead").checked, fileName: file.name,
      duplicate: dup, source: "学生", status: "待班委", reason: "",
      trail: [{ at: now(), actor: student(sid).name, action: "提交" + (dup ? "，标为重复" : "") }]
    });
    save(); render();
  }

  function submitTransfer() {
    var g = Number(document.getElementById("newGpa").value);
    var file = document.getElementById("gpaFile").files[0];
    if (!(g >= 0 && g <= 5)) { window.alert("绩点须在 0 到 5 之间"); return; }
    if (!file) { window.alert("请上传成绩单"); return; }
    state.awards.unshift({
      id: "A" + Math.random().toString(36).slice(2, 8),
      studentId: ui.stu, category: "转专业绩点", level: "", rank: "", title: "转专业后绩点",
      declaredGpa: Math.round(g * 1000) / 1000, lead: false, fileName: file.name,
      duplicate: false, source: "学生", status: "待班委", reason: "",
      trail: [{ at: now(), actor: student(ui.stu).name, action: "申报转专业绩点 " + g }]
    });
    save(); render();
  }
  function recognizeNotice() {
    window.alert("通报自动识别需原项目的本机 OCR 服务。当前作品集 Demo 可体验核算、申报和审核。");
  }
  function now() {
    var d = new Date();
    function z(n) { return (n < 10 ? "0" : "") + n; }
    return z(d.getMonth() + 1) + "-" + z(d.getDate()) + " " + z(d.getHours()) + ":" + z(d.getMinutes());
  }
  function findAward(id) { return state.awards.filter(function (a) { return a.id === id; })[0]; }

  document.getElementById("role").addEventListener("change", function (e) { ui.role = e.target.value; ui.page = 1; render(); });
  document.getElementById("stu").addEventListener("change", function (e) { ui.stu = e.target.value; ui.page = 1; render(); });
  document.getElementById("reset").addEventListener("click", function () { state = seed(); save(); ui.page = 1; render(); });
  document.getElementById("nav").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    var t = btn.getAttribute("data-tab");
    if (!t) return;
    ui.tab = t;
    ui.page = 1;
    render();
  });
  document.getElementById("main").addEventListener("change", function (e) {
    if (e.target.id === "pageSize") { ui.pageSize = Number(e.target.value); ui.page = 1; render(); return; }
    if (e.target.id === "q") { ui.q = e.target.value; ui.page = 1; document.getElementById("hits").innerHTML = ruleHits(e.target.value); return; }
    if (e.target.id === "cat") syncCatFields();
    if (e.target.id === "level" || e.target.id === "rank" || e.target.id === "lead") refreshPreview();
    if (e.target.getAttribute("data-base") != null && ui.role === "学生") {
      var flags = baseOf(ui.stu).slice();
      flags[Number(e.target.getAttribute("data-base"))] = e.target.checked;
      state.base[ui.stu] = flags;
      save(); render(); syncCatFields();
    }
  });
  document.getElementById("main").addEventListener("input", function (e) {
    if (e.target.id === "q") { ui.q = e.target.value; ui.page = 1; document.getElementById("hits").innerHTML = ruleHits(e.target.value); }
  });
  document.getElementById("main").addEventListener("click", function (e) {
    var t = e.target;
    var pageBtn = t.closest ? t.closest("[data-page]") : null;
    if (pageBtn) {
      var p = pageBtn.getAttribute("data-page");
      if (pageBtn.disabled) return;
      if (p === "prev") ui.page -= 1;
      else if (p === "next") ui.page += 1;
      else ui.page = Number(p);
      render();
      return;
    }
    if (t.id === "submitAward") submitAward();
    if (t.id === "submitTransfer") submitTransfer();
    if (t.id === "doRecognize") recognizeNotice();
    var pass = t.getAttribute("data-pass");
    var reject = t.getAttribute("data-reject");
    var objectId = t.getAttribute("data-object");
    var hard = t.getAttribute("data-hard");
    var disc = t.getAttribute("data-disc");
    if (pass) {
      var a = findAward(pass);
      a.status = ui.role === "班委" ? "待年级委" : "通过";
      a.reason = "";
      a.trail.push({ at: now(), actor: ui.role, action: a.status === "通过" ? (a.category === "转专业绩点" ? "通过，改用申报绩点" : "通过并计分") : "通过，转年级委" });
      save(); render();
    }
    if (reject) {
      var reason = document.querySelector('[data-reason="' + reject + '"]').value;
      if (!reason) { window.alert("请选择驳回理由"); return; }
      var b = findAward(reject);
      b.status = "驳回"; b.reason = reason;
      b.trail.push({ at: now(), actor: ui.role, action: "驳回", note: reason });
      save(); render();
    }
    if (objectId) {
      var c = findAward(objectId);
      c.status = c.status === "通过" || (c.trail || []).some(function (x) { return x.actor === "年级委"; }) ? "待年级委" : "待班委";
      c.trail.push({ at: now(), actor: student(c.studentId).name, action: "异议，再次提交" });
      save(); render();
    }
    if (hard) { state.hardship[hard] = !state.hardship[hard]; save(); render(); }
    if (disc) { state.discipline[disc] = !state.discipline[disc]; save(); render(); }
  });

  render();
  if (ui.tab === "apply") syncCatFields();
})();
