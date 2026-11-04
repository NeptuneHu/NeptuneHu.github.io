(function (root, factory) {
  var api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.ZC = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function round2(n) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }

  function academic(gpa) {
    if (gpa === "" || gpa === null || gpa === undefined || Number.isNaN(Number(gpa))) return null;
    var raw = ((Number(gpa) - 1) * 10 + 60) * 0.7;
    return round2(Math.min(Math.max(raw, 0), 70));
  }

  var SPORT = {
    国家级: { 一等奖: 3, 二等奖: 2.5, 三等奖: 2, 四等奖: 1.5 },
    省级: { 一等奖: 2, 二等奖: 1.5, 三等奖: 1, 四等奖: 0.8 },
    校级: { 一等奖: 1, 二等奖: 0.8, 三等奖: 0.6, 四等奖: 0.4 },
    院级: { 一等奖: 0.5, 二等奖: 0.4, 三等奖: 0.3, 四等奖: 0 },
    年级: { 一等奖: 0.3, 二等奖: 0.2, 三等奖: 0.1, 四等奖: 0 }
  };
  var CONTEST = {
    国家级: { 一等奖: 3, 二等奖: 2.5, 三等奖: 2 },
    省级: { 一等奖: 2, 二等奖: 1.5, 三等奖: 1 },
    校级: { 一等奖: 1, 二等奖: 0.8, 三等奖: 0.5 },
    院级: { 一等奖: 0.5, 二等奖: 0.3, 三等奖: 0.1 }
  };
  var WORK = {
    一档: { 优秀: 1, 良好: 0.8, 合格: 0.6 },
    二档: { 优秀: 0.8, 良好: 0.6, 合格: 0.4 },
    三档: { 优秀: 0.6, 良好: 0.4, 合格: 0.3 }
  };

  function itemPoints(a) {
    if (!a) return 0;
    if (a.category === "荣誉称号") {
      return { "4分档": 4, "3分档": 3, "2分档": 2, "1分档": 1 }[a.level] || 0;
    }
    if (a.category === "通报表扬") {
      return a.level === "学院" ? 0.5 : a.level === "年级" ? 0.2 : 0;
    }
    if (a.category === "体育比赛" || a.category === "文艺活动") {
      var table = SPORT[a.level] || {};
      var base = table[a.rank] || 0;
      return round2(base * (a.lead ? 1 : 0.5));
    }
    if (a.category === "学习竞赛") {
      var ctable = CONTEST[a.level] || {};
      return ctable[a.rank] || 0;
    }
    if (a.category === "学术论文") return a.level === "3分档" ? 3 : a.level === "1分档" ? 1 : 0;
    if (a.category === "科研成果") return { "3分档": 3, "2分档": 2, "1分档": 1 }[a.level] || 0;
    if (a.category === "专利") return a.level === "发明专利" ? 2 : a.level === "实用新型" ? 1 : 0;
    if (a.category === "英语六级") return 0.5;
    if (a.category === "社会工作") {
      var w = WORK[a.level] || {};
      return w[a.rank] || 0;
    }
    if (a.category === "文明宿舍") {
      var dorm = { 标兵宿舍: 0.3, "文明宿舍0.2档": 0.2, "文明宿舍0.1档": 0.1 }[a.level] || 0;
      if (!dorm) return 0;
      return round2(dorm + (a.lead ? 0.1 : 0));
    }
    return 0;
  }

  function summarize(baseFlags, awards) {
    var yes = (baseFlags || []).filter(Boolean).length;
    var base = yes === 0 ? 0 : round2(Math.min(yes * 0.2 + 0.2, 1));
    var passed = (awards || []).filter(function (a) { return a.status === "通过"; });
    var buckets = { honor: 0, notice: 0, work: [], dorm: [], sportHigh: 0, sportLow: 0, contest: 0, research: 0 };
    passed.forEach(function (a) {
      var p = itemPoints(a);
      if (a.category === "荣誉称号") buckets.honor += p;
      else if (a.category === "通报表扬") buckets.notice += p;
      else if (a.category === "社会工作") buckets.work.push(p);
      else if (a.category === "文明宿舍") buckets.dorm.push(p);
      else if (a.category === "体育比赛" || a.category === "文艺活动") {
        if (a.level === "院级" || a.level === "年级") buckets.sportLow += p;
        else buckets.sportHigh += p;
      } else if (a.category === "学习竞赛" || a.category === "学术论文" || a.category === "科研成果" || a.category === "专利" || a.category === "英语六级") {
        buckets.contest += a.category === "学习竞赛" ? p : 0;
        if (a.category !== "学习竞赛") buckets.research += p;
      }
    });
    var spirit = round2(Math.min(buckets.honor + Math.min(buckets.notice, 1), 2));
    var work = buckets.work.length ? Math.max.apply(null, buckets.work) : 0;
    var dorm = buckets.dorm.length ? Math.max.apply(null, buckets.dorm) : 0;
    var sport = round2(buckets.sportHigh + Math.min(buckets.sportLow, 0.5));
    var contest = round2(buckets.contest);
    var research = round2(buckets.research);
    var rewardRaw = round2(work + spirit + dorm + sport + contest + research);
    var reward = round2(Math.min(rewardRaw, 5));
    var extension = round2(base + reward);
    return {
      base: base,
      spirit: spirit,
      work: work,
      dorm: dorm,
      sport: sport,
      contest: contest,
      research: research,
      rewardRaw: rewardRaw,
      reward: reward,
      extension: extension
    };
  }

  return { round2: round2, academic: academic, itemPoints: itemPoints, summarize: summarize, SPORT: SPORT, CONTEST: CONTEST };
});
