const GESTURES = {
  thumbsUp: {
    modelNames: ["Thumb_Up"],
    name: "竖起大拇指",
    cue: "很好，你是在点赞。",
    cards: [
      { emoji: "👍", caption: "可以！", color: "#ffe5a9" },
      { emoji: "😎", caption: "稳稳的", color: "#cfe7ff" },
      { emoji: "👏", caption: "就这么办", color: "#ffd9d1" },
      { emoji: "✨", caption: "太棒啦", color: "#ece2ff" },
    ],
  },
  thumbsDown: {
    modelNames: ["Thumb_Down"],
    name: "拇指向下",
    cue: "懂了，这次不太满意。",
    cards: [
      { emoji: "👎", caption: "不太行", color: "#e4e7ee" },
      { emoji: "😕", caption: "有点失望", color: "#dce7f2" },
      { emoji: "🙅", caption: "还是算了", color: "#ffe0dc" },
      { emoji: "🫠", caption: "我先缓缓", color: "#ffe9b8" },
    ],
  },
  openPalm: {
    modelNames: ["Open_Palm"],
    name: "张开手掌",
    cue: "你好！挥挥手很适合打招呼。",
    cards: [
      { emoji: "👋", caption: "嗨，在吗？", color: "#d8efff" },
      { emoji: "🙋", caption: "我在这里", color: "#fff0be" },
      { emoji: "🥳", caption: "见到你啦", color: "#ffdedf" },
      { emoji: "🌻", caption: "今天也好呀", color: "#fff4cf" },
    ],
  },
  victory: {
    modelNames: ["Victory"],
    name: "胜利手势",
    cue: "比耶成功，来点开心的。",
    cards: [
      { emoji: "✌️", caption: "耶！", color: "#ece0ff" },
      { emoji: "🎉", caption: "好消息", color: "#d9f2e5" },
      { emoji: "😄", caption: "开心到飞起", color: "#ffe8aa" },
      { emoji: "🫶", caption: "收下快乐", color: "#ffdbe5" },
    ],
  },
  fist: {
    modelNames: ["Closed_Fist"],
    name: "握拳",
    cue: "很有力量，给自己加个油。",
    cards: [
      { emoji: "✊", caption: "冲呀！", color: "#f0ded1" },
      { emoji: "💪", caption: "一定可以", color: "#dcecff" },
      { emoji: "🔥", caption: "火力全开", color: "#ffe0bb" },
      { emoji: "🚀", caption: "出发！", color: "#e4e5ff" },
    ],
  },
  point: {
    modelNames: ["Pointing_Up"],
    name: "食指向上",
    cue: "收到，像是在提醒一件事。",
    cards: [
      { emoji: "☝️", caption: "等一下", color: "#e7e2ff" },
      { emoji: "💡", caption: "我有个想法", color: "#fff0ae" },
      { emoji: "📌", caption: "记住这点", color: "#d9f0ff" },
      { emoji: "👀", caption: "看这里", color: "#ffe0dc" },
    ],
  },
  love: {
    modelNames: ["ILoveYou"],
    name: "爱心手势",
    cue: "爱心收到，发点温柔的表情吧。",
    cards: [
      { emoji: "🫶", caption: "送你一颗心", color: "#ffdfe9" },
      { emoji: "💗", caption: "喜欢你", color: "#ffe1ea" },
      { emoji: "🥰", caption: "被暖到了", color: "#ffe5b9" },
      { emoji: "🌷", caption: "给你一朵花", color: "#f0dcf4" },
    ],
  },
  ok: {
    modelNames: [],
    name: "OK 手势",
    cue: "收到，一切 OK。",
    cards: [
      { emoji: "👌", caption: "没问题", color: "#d9f2e5" },
      { emoji: "✅", caption: "确认收到", color: "#dcecff" },
      { emoji: "😌", caption: "放心吧", color: "#fff0be" },
      { emoji: "🆗", caption: "就这样定", color: "#ece2ff" },
    ],
  },
  callMe: {
    modelNames: [],
    name: "打电话手势",
    cue: "拇指和小指伸开，像是在说联系我。",
    cards: [
      { emoji: "🤙", caption: "回头联系", color: "#d8efff" },
      { emoji: "📞", caption: "给我电话", color: "#ffe5a9" },
      { emoji: "☎️", caption: "有空聊聊", color: "#ffd9d1" },
      { emoji: "💬", caption: "等你消息", color: "#e5e1ff" },
    ],
  },
  three: {
    modelNames: [],
    name: "三根手指",
    cue: "数到三，准备开始。",
    cards: [
      { emoji: "3️⃣", caption: "三、二、一", color: "#dcecff" },
      { emoji: "🤟", caption: "第三条", color: "#ffe5b9" },
      { emoji: "⏳", caption: "倒数开始", color: "#ece2ff" },
      { emoji: "🎬", caption: "开始行动", color: "#ffdbe5" },
    ],
  },
};

const EXPRESSIONS = {
  low: {
    name: "看起来有点低落",
    marker: "☁",
    cue: "我从表情里读到一点低落的线索。",
    responses: [
      "今天不必立刻变好。先喝一口水、把肩膀放松一点，也已经很够了。",
      "如果愿意，给自己一分钟：慢慢吸气，再把呼气放得更长一点。",
      "有些时候只是难熬，不代表你做得不够好。先陪自己待一会儿吧。",
    ],
  },
  tense: {
    name: "看起来有些紧绷",
    marker: "〰",
    cue: "眉眼和嘴部看起来有一点用力。",
    responses: [
      "你已经很努力了。先把下巴松一松，慢慢呼出一口气。",
      "可以暂时不用解决所有事。挑一件最小的事，做完就停下来。",
      "给自己留十秒钟空白：看看四周，感受脚踩在地面的感觉。",
    ],
  },
  surprised: {
    name: "看起来有点惊讶",
    marker: "✦",
    cue: "眼睛和嘴部的变化像是在消化一个意外。",
    responses: [
      "这一下好像来得有点突然。先不用急着回应，给自己一点反应时间。",
      "意外的事会让人乱一下，这是很正常的。先把事情分成下一小步就好。",
      "如果脑子有点吵，试着把最先想到的一句话写下来，其他的可以稍后再说。",
    ],
  },
  happy: {
    name: "看起来比较轻松",
    marker: "☀",
    cue: "嘴角的变化像是一个轻松的瞬间。",
    responses: [
      "这一点轻松很珍贵，记得把它收好。要不要把今天的小开心记下来？",
      "看起来你有一点好心情。把它分一点给自己：做件喜欢的小事吧。",
      "这一刻挺好。无需特别庆祝，也可以安静地享受它。",
    ],
  },
  neutral: {
    name: "只是想听一句话",
    marker: "♡",
    cue: "表情很平静，也完全可以只是来歇一会儿。",
    responses: [
      "你不需要表现得怎样，来这里停一会儿就好。",
      "不管今天过得怎么样，你已经走到了现在。",
      "给自己一点温柔的余地。慢一点，也没有关系。",
    ],
  },
};

const els = {
  startCamera: document.querySelector("#startCamera"),
  stopCamera: document.querySelector("#stopCamera"),
  recognizeNow: document.querySelector("#recognizeNow"),
  cameraFeed: document.querySelector("#cameraFeed"),
  videoStage: document.querySelector("#videoStage"),
  cameraPlaceholder: document.querySelector("#cameraPlaceholder"),
  cameraStatus: document.querySelector("#cameraStatus"),
  cameraHelp: document.querySelector("#cameraHelp"),
  gestureMode: document.querySelector("#gestureMode"),
  moodMode: document.querySelector("#moodMode"),
  recognitionBadge: document.querySelector("#recognitionBadge"),
  recognitionText: document.querySelector("#recognitionText"),
  manualGesture: document.querySelector("#manualGesture"),
  manualMatch: document.querySelector("#manualMatch"),
  moodManual: document.querySelector("#moodManual"),
  manualMood: document.querySelector("#manualMood"),
  manualMoodMatch: document.querySelector("#manualMoodMatch"),
  resultsGrid: document.querySelector("#resultsGrid"),
  resultsSummary: document.querySelector("#resultsSummary"),
  resultsTitle: document.querySelector("#results-title"),
  resultsKicker: document.querySelector("#resultsKicker"),
  resultTip: document.querySelector("#resultTip"),
  shuffleResults: document.querySelector("#shuffleResults"),
  savedGrid: document.querySelector("#savedGrid"),
  savedCount: document.querySelector("#savedCount"),
  clearSaved: document.querySelector("#clearSaved"),
  finderPanel: document.querySelector("#finderPanel"),
  savedPanel: document.querySelector("#savedPanel"),
  finderTab: document.querySelector("#finderTab"),
  savedTab: document.querySelector("#savedTab"),
  savedShortcut: document.querySelector("#savedShortcut"),
  toast: document.querySelector("#toast"),
};

let activeGesture = null;
let activeExpression = null;
let activeMode = "gesture";
let stream = null;
let recognizer = null;
let faceRecognizer = null;
let modelState = "idle";
let faceModelState = "idle";
let loopId = null;
let lastPredictionAt = 0;
let detectedFrames = 0;
let lastDetectedKey = null;
let lastDetectedExpression = null;
let detectedExpressionFrames = 0;
let expressionResponseIndex = 0;
let toastTimer = null;
let resultOrder = 0;
let saved = loadSaved();

function loadSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem("emojiiiiii-saved-v1") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistSaved() {
  localStorage.setItem("emojiiiiii-saved-v1", JSON.stringify(saved));
  updateSavedUI();
}

function makeId(card) {
  return `${card.emoji}-${card.caption}`;
}

function isSaved(card) {
  return saved.some((item) => item.id === makeId(card));
}

function showToast(message, type = "success") {
  window.clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.dataset.type = type;
  els.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    els.toast.hidden = true;
  }, 3000);
}

function setCameraState(state, label) {
  els.videoStage.dataset.state = state;
  els.cameraStatus.dataset.state = state;
  els.cameraStatus.textContent = label;
}

function setRecognitionBadge(message, visible = true) {
  els.recognitionText.textContent = message;
  els.recognitionBadge.hidden = !visible;
}

function showFinder() {
  els.finderPanel.hidden = false;
  els.savedPanel.hidden = true;
  els.finderTab.classList.add("is-active");
  els.finderTab.setAttribute("aria-selected", "true");
  els.savedTab.classList.remove("is-active");
  els.savedTab.setAttribute("aria-selected", "false");
}

function showSaved() {
  els.finderPanel.hidden = true;
  els.savedPanel.hidden = false;
  els.savedTab.classList.add("is-active");
  els.savedTab.setAttribute("aria-selected", "true");
  els.finderTab.classList.remove("is-active");
  els.finderTab.setAttribute("aria-selected", "false");
  els.savedPanel.focus?.();
}

function cardMarkup(card, source = "result") {
  const id = makeId(card);
  const savedState = isSaved(card);
  const saveLabel = savedState ? "取消收藏" : "收藏";
  return `
    <article class="sticker-card" style="--card-color: ${card.color}" data-card-id="${id}" data-source="${source}">
      <div class="sticker-content">
        <span class="sticker-emoji" aria-hidden="true">${card.emoji}</span>
        <span class="sticker-caption">${card.caption}</span>
      </div>
      <div class="sticker-actions">
        <button class="copy-button" type="button" data-action="copy" aria-label="复制表情：${card.caption}">复制表情</button>
        <button class="save-button ${savedState ? "is-saved" : ""}" type="button" data-action="save" aria-label="${saveLabel}：${card.caption}" aria-pressed="${savedState}">${savedState ? "♥" : "♡"}</button>
      </div>
      <div class="card-more-actions">
        <button class="mini-action" type="button" data-action="download">下载图片</button>
        <button class="mini-action" type="button" data-action="share">分享给朋友</button>
      </div>
    </article>`;
}

function activeCards() {
  if (!activeGesture) return [];
  const cards = [...GESTURES[activeGesture].cards];
  if (resultOrder > 0) {
    const step = resultOrder % cards.length;
    return [...cards.slice(step), ...cards.slice(0, step)];
  }
  return cards;
}

function renderResults() {
  if (!activeGesture) return;
  const gesture = GESTURES[activeGesture];
  els.resultsSummary.innerHTML = `识别到 <strong>“${gesture.name}”</strong> · ${gesture.cue}`;
  els.resultsGrid.innerHTML = activeCards().map((card) => cardMarkup(card)).join("");
  els.shuffleResults.disabled = false;
  els.resultTip.textContent = "点击“复制”直接粘贴到聊天框；也能下载图片或调用手机的分享面板。";
}

function renderExpressionResult() {
  if (!activeExpression) return;
  const expression = EXPRESSIONS[activeExpression];
  const response = expression.responses[expressionResponseIndex % expression.responses.length];
  els.resultsSummary.innerHTML = `表情线索：<strong>“${expression.name}”</strong> · ${expression.cue}`;
  els.resultsGrid.innerHTML = `
    <article class="mood-result">
      <span class="mood-result-mark" aria-hidden="true">${expression.marker}</span>
      <h3>${expression.name}</h3>
      <p>${expression.cue}</p>
      <div class="mood-response" id="moodResponse">${response}</div>
      <div class="mood-actions">
        <button type="button" data-action="next-mood-response">换一句</button>
        <button type="button" data-action="copy-mood-response">复制这句话</button>
      </div>
      <p class="mood-disclaimer">这只是对可见表情的推测，不代表你的真实感受，也不能作任何心理健康判断。</p>
    </article>`;
  els.shuffleResults.disabled = false;
  els.shuffleResults.textContent = "换一句";
  els.resultTip.textContent = "如果这些话不贴合你的感受，也没关系；你最了解自己。";
}

function resetResultArea() {
  els.resultsSummary.textContent = activeMode === "gesture" ? "先打开相机，或选择一个动作。" : "打开相机，或选择一个状态，听一句温和的话。";
  els.resultsGrid.innerHTML = activeMode === "gesture"
    ? `<div class="empty-state"><span class="empty-mark" aria-hidden="true">☝</span><p>动作识别后，这里会出现适合你的表情。</p></div>`
    : `<div class="empty-state"><span class="empty-mark" aria-hidden="true">♡</span><p>表情陪伴会根据可见表情给出一句温和回应；也可以手动选择状态。</p></div>`;
  els.shuffleResults.disabled = true;
  els.shuffleResults.textContent = "换一批";
  els.resultTip.textContent = activeMode === "gesture"
    ? "点击“复制”粘贴到聊天框，或下载成图片保存到相册。"
    : "表情不会被保存或上传；这不是对真实情绪的判断。";
}

function setMode(mode) {
  if (mode === activeMode) return;
  activeMode = mode;
  activeGesture = null;
  activeExpression = null;
  resultOrder = 0;
  expressionResponseIndex = 0;
  lastDetectedKey = null;
  lastDetectedExpression = null;
  detectedFrames = 0;
  detectedExpressionFrames = 0;
  els.gestureMode.classList.toggle("is-active", mode === "gesture");
  els.gestureMode.setAttribute("aria-pressed", String(mode === "gesture"));
  els.moodMode.classList.toggle("is-active", mode === "mood");
  els.moodMode.setAttribute("aria-pressed", String(mode === "mood"));
  els.manualGesture.closest(".manual-match").hidden = mode !== "gesture";
  els.moodManual.hidden = mode !== "mood";
  els.recognizeNow.textContent = mode === "gesture" ? "识别当前动作" : "看看当前表情";
  els.resultsKicker.textContent = mode === "gesture" ? "第 2 步" : "给自己一句话";
  els.resultsTitle.textContent = mode === "gesture" ? "挑一个发出去" : "停一会儿，听一句";
  resetResultArea();

  if (!stream) {
    els.cameraHelp.textContent = mode === "gesture"
      ? "支持点赞、倒赞、挥手、比耶、握拳、食指向上、爱心、OK、打电话和三根手指。"
      : "镜头只在这台设备上分析可见表情，不会判断你的真实心情。";
    return;
  }
  if (loopId) window.cancelAnimationFrame(loopId);
  loopId = null;
  setRecognitionBadge(mode === "gesture" ? "正在切换到手势识别…" : "正在切换到表情陪伴…");
  initializeActiveRecognizer();
}

function matchExpression(key, origin = "manual") {
  if (!EXPRESSIONS[key]) return;
  activeExpression = key;
  expressionResponseIndex = 0;
  renderExpressionResult();
  const expression = EXPRESSIONS[key];
  if (origin === "camera") {
    setRecognitionBadge(`看到表情：${expression.name}`);
    els.cameraHelp.textContent = `我看到的是“${expression.name}”的表情线索。它不等于你的真实感受；这里有一句话想送给你。`;
  } else {
    els.cameraHelp.textContent = `已按“${expression.name}”送上一句温和回应。你也可以随时换成更贴近自己的状态。`;
    showToast("这里有一句话想送给你。", "success");
  }
}

function renderSaved() {
  els.savedGrid.innerHTML = saved.length
    ? saved.map((item) => cardMarkup(item, "saved")).join("")
    : `<div class="empty-state"><span class="empty-mark" aria-hidden="true">♡</span><p>还没有收藏。找到喜欢的表情后，点卡片右下角的爱心保存。</p></div>`;
}

function updateSavedUI() {
  els.savedCount.textContent = saved.length;
  els.clearSaved.hidden = saved.length === 0;
  renderSaved();
  if (activeGesture) renderResults();
}

function matchGesture(key, origin = "manual") {
  if (!GESTURES[key]) return;
  activeGesture = key;
  resultOrder = 0;
  const gesture = GESTURES[key];
  renderResults();
  if (origin === "camera") {
    setRecognitionBadge(`识别到：${gesture.name}`);
    els.cameraHelp.textContent = `识别成功：${gesture.name}。已经为你找到 4 个可用表情。`;
  } else {
    els.cameraHelp.textContent = `已按“${gesture.name}”为你匹配表情。下次也可以直接做出动作让相机识别。`;
    showToast(`已找到 ${gesture.name} 的表情`, "success");
  }
}

async function startCamera() {
  if (stream) {
    els.cameraFeed.play();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    cameraError("当前浏览器不支持相机访问。请换用最新版 Chrome、Safari 或 Edge，或直接选择动作。");
    return;
  }

  els.startCamera.disabled = true;
  els.startCamera.querySelector("span:last-child").textContent = "正在打开…";
  setCameraState("loading", "正在打开");
  els.cameraHelp.textContent = "正在请求相机权限，请在浏览器提示中选择“允许”。";
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false,
    });
    els.cameraFeed.srcObject = stream;
    await els.cameraFeed.play();
    els.cameraPlaceholder.innerHTML = `<span class="camera-icon" aria-hidden="true">⌁</span><p>镜头还没打开</p><span>你的画面只会留在这台设备上</span>`;
    setCameraState("live", "相机已开启");
    els.startCamera.querySelector("span:last-child").textContent = "相机已开启";
    els.recognizeNow.disabled = false;
    els.stopCamera.hidden = false;
    els.cameraHelp.textContent = activeMode === "gesture"
      ? "请让一只手出现在画面中央，保持半秒钟。识别会自动开始。"
      : "请让脸部位于画面中央，保持片刻。分析只在这台设备上进行。";
    setRecognitionBadge(activeMode === "gesture" ? "正在准备手势识别…" : "正在准备表情分析…");
    initializeActiveRecognizer();
  } catch (error) {
    const denied = error?.name === "NotAllowedError" || error?.name === "SecurityError";
    cameraError(denied ? "没有获得相机权限。请在浏览器地址栏中允许相机后重试，或先手动选择动作。" : "暂时无法打开相机。请确认没有其他应用正在使用它，然后重试。");
  } finally {
    els.startCamera.disabled = false;
    if (!stream) els.startCamera.querySelector("span:last-child").textContent = "重试打开相机";
  }
}

function stopCamera() {
  if (loopId) window.cancelAnimationFrame(loopId);
  loopId = null;
  stream?.getTracks().forEach((track) => track.stop());
  stream = null;
  els.cameraFeed.srcObject = null;
  els.stopCamera.hidden = true;
  els.recognizeNow.disabled = true;
  els.startCamera.querySelector("span:last-child").textContent = "打开相机";
  setCameraState("idle", "等待开启");
  setRecognitionBadge("", false);
  els.cameraHelp.textContent = activeMode === "gesture"
    ? "相机已关闭。你可以重新打开相机，或选择一个动作继续。"
    : "相机已关闭。你可以重新打开相机，或在下方选择一个状态。";
}

function initializeActiveRecognizer() {
  if (activeMode === "gesture") initializeRecognizer();
  else initializeFaceRecognizer();
}

function cameraError(message) {
  stream?.getTracks().forEach((track) => track.stop());
  stream = null;
  setCameraState("error", "需要处理");
  els.cameraPlaceholder.innerHTML = `<span class="camera-icon" aria-hidden="true">!</span><p>暂时无法打开镜头</p><span>${message}</span>`;
  els.cameraHelp.textContent = message;
  els.recognizeNow.disabled = true;
  setRecognitionBadge("", false);
  showToast("相机未开启，仍可用动作选择继续。", "error");
}

async function initializeRecognizer() {
  if (activeMode !== "gesture") return;
  if (modelState === "ready") {
    runRecognitionLoop();
    return;
  }
  if (modelState === "loading") return;
  modelState = "loading";
  setRecognitionBadge("正在加载本地手势识别器…");
  try {
    const { FilesetResolver, GestureRecognizer } = await import(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35"
    );
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm"
    );
    recognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      },
      runningMode: "VIDEO",
      numHands: 1,
    });
    modelState = "ready";
    setRecognitionBadge("举起手势，我在看…");
    if (activeMode === "gesture") runRecognitionLoop();
  } catch (error) {
    console.error("Gesture recognizer failed to initialize:", error);
    modelState = "error";
    setRecognitionBadge("识别器未加载", false);
    els.cameraHelp.textContent = "手势识别器暂时无法加载。请检查网络后重新打开相机，或直接选择一个动作继续。";
    showToast("手势识别器加载失败，可使用手动选择。", "error");
  }
}

async function initializeFaceRecognizer() {
  if (activeMode !== "mood") return;
  if (faceModelState === "ready") {
    runExpressionLoop();
    return;
  }
  if (faceModelState === "loading") return;
  faceModelState = "loading";
  setRecognitionBadge("正在加载本地表情分析器…");
  try {
    const { FilesetResolver, FaceLandmarker } = await import(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35"
    );
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm"
    );
    faceRecognizer = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task",
      },
      runningMode: "VIDEO",
      numFaces: 1,
      outputFaceBlendshapes: true,
    });
    faceModelState = "ready";
    setRecognitionBadge("看向镜头，我只读取可见表情…");
    if (activeMode === "mood") runExpressionLoop();
  } catch (error) {
    console.error("Face landmarker failed to initialize:", error);
    faceModelState = "error";
    setRecognitionBadge("表情分析器未加载", false);
    els.cameraHelp.textContent = "表情分析器暂时无法加载。你仍可以在下方手动选择一个状态。";
    showToast("表情分析器加载失败，可使用手动选择。", "error");
  }
}

function modelGestureToKey(name) {
  return Object.entries(GESTURES).find(([, config]) => config.modelNames.includes(name))?.[0] || null;
}

function landmarkDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z || 0) - (b.z || 0));
}

function fingerExtended(landmarks, tip, pip) {
  return landmarkDistance(landmarks[tip], landmarks[0]) > landmarkDistance(landmarks[pip], landmarks[0]) * 1.16;
}

function customLandmarkGesture(landmarks) {
  if (!landmarks?.length) return null;
  const palmSize = landmarkDistance(landmarks[0], landmarks[9]);
  if (!palmSize) return null;

  const thumbIndexGap = landmarkDistance(landmarks[4], landmarks[8]) / palmSize;
  const index = fingerExtended(landmarks, 8, 6);
  const middle = fingerExtended(landmarks, 12, 10);
  const ring = fingerExtended(landmarks, 16, 14);
  const pinky = fingerExtended(landmarks, 20, 18);
  const thumb = landmarkDistance(landmarks[4], landmarks[0]) > landmarkDistance(landmarks[3], landmarks[0]) * 1.12;

  if (thumbIndexGap < 0.32 && middle && ring && pinky) return "ok";
  if (thumb && pinky && !index && !middle && !ring) return "callMe";
  if (index && middle && ring && !pinky && thumbIndexGap > 0.48) return "three";
  return null;
}

function recognizedGestureKey(results, candidate) {
  const landmarks = results.landmarks?.[0];
  return customLandmarkGesture(landmarks) || modelGestureToKey(candidate?.categoryName);
}

function runRecognitionLoop() {
  if (activeMode !== "gesture" || !stream || !recognizer) return;
  const tick = () => {
    if (activeMode !== "gesture" || !stream || !recognizer) return;
    const now = performance.now();
    if (els.cameraFeed.readyState >= 2 && now - lastPredictionAt > 110) {
      lastPredictionAt = now;
      try {
        const results = recognizer.recognizeForVideo(els.cameraFeed, now);
        const candidate = results.gestures?.[0]?.[0];
        const key = candidate && candidate.score >= 0.58 ? recognizedGestureKey(results, candidate) : customLandmarkGesture(results.landmarks?.[0]);
        if (key) {
          if (key === lastDetectedKey) detectedFrames += 1;
          else {
            lastDetectedKey = key;
            detectedFrames = 1;
          }
          setRecognitionBadge(`看到手势：${GESTURES[key].name}…`);
          if (detectedFrames >= 4 && key !== activeGesture) matchGesture(key, "camera");
        } else {
          detectedFrames = 0;
          lastDetectedKey = null;
          if (activeGesture) setRecognitionBadge("继续换个手势试试…");
          else setRecognitionBadge("请让一只手出现在画面中央…");
        }
      } catch {
        // A transient video frame error should not interrupt the camera experience.
      }
    }
    loopId = window.requestAnimationFrame(tick);
  };
  loopId = window.requestAnimationFrame(tick);
}

function blendshapeScore(categories, name) {
  return categories?.find((category) => category.categoryName === name)?.score || 0;
}

function expressionFromBlendshapes(categories) {
  const smile = (blendshapeScore(categories, "mouthSmileLeft") + blendshapeScore(categories, "mouthSmileRight")) / 2;
  const frown = (blendshapeScore(categories, "mouthFrownLeft") + blendshapeScore(categories, "mouthFrownRight")) / 2;
  const browDown = (blendshapeScore(categories, "browDownLeft") + blendshapeScore(categories, "browDownRight")) / 2;
  const mouthPress = (blendshapeScore(categories, "mouthPressLeft") + blendshapeScore(categories, "mouthPressRight")) / 2;
  const eyeWide = (blendshapeScore(categories, "eyeWideLeft") + blendshapeScore(categories, "eyeWideRight")) / 2;
  const jawOpen = blendshapeScore(categories, "jawOpen");
  const browInnerUp = blendshapeScore(categories, "browInnerUp");

  if (smile > 0.46) return "happy";
  if (eyeWide > 0.28 && jawOpen > 0.24) return "surprised";
  if (frown > 0.26 && browInnerUp > 0.16) return "low";
  if (browDown > 0.3 || mouthPress > 0.38) return "tense";
  return "neutral";
}

function runExpressionLoop() {
  if (activeMode !== "mood" || !stream || !faceRecognizer) return;
  const tick = () => {
    if (activeMode !== "mood" || !stream || !faceRecognizer) return;
    const now = performance.now();
    if (els.cameraFeed.readyState >= 2 && now - lastPredictionAt > 130) {
      lastPredictionAt = now;
      try {
        const results = faceRecognizer.detectForVideo(els.cameraFeed, now);
        const categories = results.faceBlendshapes?.[0]?.categories;
        if (categories?.length) {
          const expression = expressionFromBlendshapes(categories);
          if (expression === lastDetectedExpression) detectedExpressionFrames += 1;
          else {
            lastDetectedExpression = expression;
            detectedExpressionFrames = 1;
          }
          setRecognitionBadge(`看到表情线索：${EXPRESSIONS[expression].name}…`);
          if (detectedExpressionFrames >= 5 && expression !== activeExpression) matchExpression(expression, "camera");
        } else {
          detectedExpressionFrames = 0;
          lastDetectedExpression = null;
          setRecognitionBadge("请让脸部位于画面中央…");
        }
      } catch {
        // A transient video frame error should not interrupt the camera experience.
      }
    }
    loopId = window.requestAnimationFrame(tick);
  };
  loopId = window.requestAnimationFrame(tick);
}

function recognizeCurrentAction() {
  if (activeMode === "mood") {
    if (faceModelState === "loading") {
      showToast("表情分析器还在准备中，请稍等几秒。", "error");
      return;
    }
    if (faceModelState === "error") {
      showToast("表情分析器没有加载成功，请使用下方状态选择。", "error");
      return;
    }
    if (!lastDetectedExpression) {
      showToast("还没有看清表情。请让脸部位于画面中央，光线亮一些再试。", "error");
      setRecognitionBadge("还没有看清，保持片刻…");
      return;
    }
    matchExpression(lastDetectedExpression, "camera");
    return;
  }
  if (modelState === "loading") {
    showToast("识别器还在准备中，请稍等几秒。", "error");
    return;
  }
  if (modelState === "error") {
    showToast("识别器没有加载成功，请使用下方动作选择。", "error");
    return;
  }
  if (!lastDetectedKey) {
    showToast("还没有看清手势。请把手放在画面中央，光线亮一些再试。", "error");
    setRecognitionBadge("还没有看清，保持手势半秒钟…");
    return;
  }
  matchGesture(lastDetectedKey, "camera");
}

function findCard(id) {
  return [...activeCards(), ...saved].find((card) => makeId(card) === id);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.append(helper);
    helper.select();
    const success = document.execCommand("copy");
    helper.remove();
    return success;
  }
}

async function copyCard(card, button) {
  const success = await copyText(`${card.emoji} ${card.caption}`);
  if (success) {
    const original = button.textContent;
    button.textContent = "已复制 ✓";
    window.setTimeout(() => { button.textContent = original; }, 1500);
    showToast(`已复制“${card.caption}”，去聊天框粘贴吧。`, "success");
  } else {
    showToast("复制没有成功，请长按表情文字手动复制。", "error");
  }
}

function toggleSaved(card) {
  const id = makeId(card);
  const exists = saved.some((item) => item.id === id);
  if (exists) {
    saved = saved.filter((item) => item.id !== id);
    showToast("已从收藏中移除。", "success");
  } else {
    saved.push({ ...card, id });
    showToast(`已收藏“${card.caption}”。`, "success");
  }
  persistSaved();
}

function makeStickerBlob(card) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 900;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = card.color || "#fff0e8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,.38)";
    ctx.beginPath();
    ctx.arc(740, 150, 115, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#211d22";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "360px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
    ctx.fillText(card.emoji, 450, 410);
    ctx.font = "bold 72px system-ui, sans-serif";
    ctx.fillText(`· ${card.caption} ·`, 450, 690);
    ctx.fillStyle = "rgba(33,29,34,.58)";
    ctx.font = "36px system-ui, sans-serif";
    ctx.fillText("emojiiiiii", 450, 790);
    canvas.toBlob(resolve, "image/png");
  });
}

async function downloadCard(card) {
  showToast("正在生成表情图片…", "success");
  const blob = await makeStickerBlob(card);
  if (!blob) {
    showToast("图片生成失败，请再试一次。", "error");
    return;
  }
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `emojiiiiii-${card.caption}.png`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast("图片已开始下载，保存后就能发给朋友。", "success");
}

async function shareCard(card) {
  const text = `${card.emoji} ${card.caption}`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "emojiiiiii 表情", text });
      showToast("已打开分享面板。", "success");
    } else {
      const copied = await copyText(text);
      showToast(copied ? "你的浏览器没有分享面板，已复制表情。" : "请下载图片后发送给朋友。", copied ? "success" : "error");
    }
  } catch (error) {
    if (error?.name !== "AbortError") showToast("暂时无法分享，已保留在当前页面。", "error");
  }
}

function handleCardAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "next-mood-response" && activeExpression) {
    expressionResponseIndex += 1;
    renderExpressionResult();
    return;
  }
  if (button.dataset.action === "copy-mood-response") {
    const response = document.querySelector("#moodResponse")?.textContent;
    if (response) {
      copyText(response).then((success) => showToast(success ? "这句话已复制。" : "复制没有成功，请长按文字手动复制。", success ? "success" : "error"));
    }
    return;
  }
  const container = button.closest(".sticker-card");
  const card = findCard(container?.dataset.cardId);
  if (!card) return;
  const action = button.dataset.action;
  if (action === "copy") copyCard(card, button);
  if (action === "save") toggleSaved(card);
  if (action === "download") downloadCard(card);
  if (action === "share") shareCard(card);
}

els.startCamera.addEventListener("click", startCamera);
els.stopCamera.addEventListener("click", stopCamera);
els.recognizeNow.addEventListener("click", recognizeCurrentAction);
els.gestureMode.addEventListener("click", () => setMode("gesture"));
els.moodMode.addEventListener("click", () => setMode("mood"));
els.manualGesture.addEventListener("change", () => {
  els.manualMatch.disabled = !els.manualGesture.value;
});
els.manualMatch.addEventListener("click", () => matchGesture(els.manualGesture.value));
els.manualMood.addEventListener("change", () => {
  els.manualMoodMatch.disabled = !els.manualMood.value;
});
els.manualMoodMatch.addEventListener("click", () => matchExpression(els.manualMood.value));
els.shuffleResults.addEventListener("click", () => {
  if (activeMode === "mood" && activeExpression) {
    expressionResponseIndex += 1;
    renderExpressionResult();
    showToast("换一句，看看哪句更贴近你。", "success");
  } else if (activeGesture) {
    resultOrder += 1;
    renderResults();
    showToast("已换一批排列，看看有没有更顺眼的。", "success");
  }
});
els.resultsGrid.addEventListener("click", handleCardAction);
els.savedGrid.addEventListener("click", handleCardAction);
els.finderTab.addEventListener("click", showFinder);
els.savedTab.addEventListener("click", showSaved);
document.querySelector(".tab-switcher").addEventListener("keydown", (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [els.finderTab, els.savedTab];
  const current = tabs.indexOf(document.activeElement);
  let next = current === -1 ? 0 : current;
  if (event.key === 'ArrowLeft') next = (current + tabs.length - 1) % tabs.length;
  if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length - 1;
  tabs[next].focus();
  if (next === 0) showFinder();
  else showSaved();
});
els.savedShortcut.addEventListener("click", () => {
  showSaved();
  document.querySelector("#savedPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});
els.clearSaved.addEventListener("click", () => {
  saved = [];
  persistSaved();
  showToast("收藏已清空。", "success");
});
window.addEventListener("beforeunload", stopCamera);

updateSavedUI();
